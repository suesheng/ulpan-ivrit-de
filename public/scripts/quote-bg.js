(() => {
  const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

  const FRAG = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
uniform float u_motion;
uniform sampler2D u_stamp;
uniform sampler2D u_letters;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.04 + 13.7;
    a *= 0.5;
  }
  return v;
}

float letterGlyph(vec2 local, float index) {
  if (local.x < -0.48 || local.x > 0.48 || local.y < -0.48 || local.y > 0.48) {
    return 0.0;
  }
  float col = mod(index, 8.0);
  float row = floor(index / 8.0);
  vec2 atlasUv = vec2(
    (col + local.x + 0.5) / 8.0,
    1.0 - (row + 0.5 - local.y) / 3.0
  );
  return texture2D(u_letters, atlasUv).r;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 stampUv = vec2(uv.x, uv.y);
  vec3 stamp = texture2D(u_stamp, stampUv).rgb;

  vec3 fieldBlue = vec3(48.0, 128.0, 192.0) / 255.0;
  float fieldAmt = 1.0 - smoothstep(0.05, 0.14, distance(stamp, fieldBlue));

  float aspect = u_res.x / max(u_res.y, 1.0);
  float t = u_time * u_motion;

  vec3 blue = vec3(0.0, 0.404, 0.722);
  vec3 sky = vec3(0.302, 0.639, 0.878);
  vec3 deep = vec3(0.0, 0.239, 0.478);
  vec3 foam = vec3(0.86, 0.94, 1.0);

  vec2 p = vec2(uv.x * aspect, uv.y);
  vec2 warp = vec2(
    fbm(p * 1.6 + vec2(t * 0.035, -t * 0.02)),
    fbm(p * 1.6 + vec2(4.1 - t * 0.025, t * 0.03))
  );
  float n = fbm(p * 2.15 + warp * 0.85 + vec2(t * 0.04, -t * 0.028));
  float n2 = fbm(p * 4.4 - warp * 0.5 + vec2(-t * 0.06, t * 0.045));
  float ribbons = smoothstep(0.42, 0.78, n2);

  vec3 field = mix(deep, blue, 0.35 + 0.65 * n);
  field = mix(field, sky, ribbons * 0.34);
  field += foam * ribbons * 0.08;

  float cx = (uv.x - 0.5) * 1.15;
  float cy = (uv.y - 0.58) * 1.35;
  float well = exp(-14.0 * (cx * cx + cy * cy));
  field = mix(field, blue * 0.92 + deep * 0.08, well * 0.42);

  float letters = 0.0;
  for (int i = 0; i < 18; i++) {
    float fi = float(i);
    vec2 seed = vec2(fi * 1.71, fi * 2.93);
    float life = fract(hash(seed) + t * (0.032 + hash(seed + 0.4) * 0.022));
    float fade = smoothstep(0.0, 0.12, life) * (1.0 - smoothstep(0.82, 1.0, life));
    float px = 0.06 + hash(seed + 2.1) * 0.88 + sin(t * 0.11 + fi) * 0.045;
    float py = 0.24 + life * 0.64;
    vec2 d = vec2((uv.x - px) * aspect, uv.y - py);
    float ang = (hash(seed + 8.4) - 0.5) * 0.55 + sin(t * 0.18 + fi) * 0.16;
    float ca = cos(ang);
    float sa = sin(ang);
    d = vec2(ca * d.x - sa * d.y, sa * d.x + ca * d.y);
    float sz = 0.038 + hash(seed + 1.2) * 0.042;
    float idx = floor(hash(seed + 9.7) * 22.0);
    letters += letterGlyph(d / sz, idx) * fade * (0.55 + 0.45 * hash(seed + 6.6));
  }
  letters *= 1.0 - well * 0.72;
  field = mix(field, foam, clamp(letters, 0.0, 1.0) * 0.42);

  gl_FragColor = vec4(mix(stamp, field, fieldAmt), 1.0);
}`;

  function compile(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function loadStamp(gl, url, onDone) {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGB,
      1,
      1,
      0,
      gl.RGB,
      gl.UNSIGNED_BYTE,
      new Uint8Array([48, 128, 192]),
    );

    const img = new Image();
    img.decoding = "sync";
    img.onload = () => {
      const raster = document.createElement("canvas");
      raster.width = 1024;
      raster.height = 532;
      const ctx = raster.getContext("2d");
      ctx.drawImage(img, 0, 0, raster.width, raster.height);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, raster);
      onDone(true);
    };
    img.onerror = () => onDone(false);
    img.src = url;
    return tex;
  }

  function start(canvas, done) {
    const gl =
      canvas.getContext("webgl", {
        antialias: true,
        alpha: false,
        depth: false,
        stencil: false,
        powerPreference: "low-power",
      }) || canvas.getContext("experimental-webgl");
    if (!gl) {
      canvas.dataset.gl = "no-context";
      done(false);
      return;
    }

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) {
      canvas.dataset.gl = "compile";
      done(false);
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.bindAttribLocation(program, 0, "a_pos");
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      canvas.dataset.gl = "link";
      done(false);
      return;
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );

    const uRes = gl.getUniformLocation(program, "u_res");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMotion = gl.getUniformLocation(program, "u_motion");
    const uStamp = gl.getUniformLocation(program, "u_stamp");
    const uLetters = gl.getUniformLocation(program, "u_letters");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stampUrl = canvas.getAttribute("data-quote-stamp");
    if (!stampUrl) {
      canvas.dataset.gl = "no-stamp";
      done(false);
      return;
    }

    let raf = 0;
    let visible = true;
    let paused = false;
    let startTime = performance.now();
    const pauseBtn = canvas.closest(".quote-band")?.querySelector("[data-quote-pause]");
    const labelPause = pauseBtn?.getAttribute("data-label-pause") || "";
    const labelPlay = pauseBtn?.getAttribute("data-label-play") || "";

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const width = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const height = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    function motionOn() {
      return !reduce.matches && !paused;
    }

    function syncPauseBtn() {
      if (!pauseBtn) return;
      if (reduce.matches) {
        pauseBtn.hidden = true;
        return;
      }
      pauseBtn.hidden = false;
      pauseBtn.setAttribute("aria-pressed", paused ? "true" : "false");
      pauseBtn.textContent = paused ? labelPlay : labelPause;
    }

    function draw(now) {
      resize();
      const motion = motionOn() ? 1 : 0;
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, stamp);
      gl.uniform1i(uStamp, 0);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, letters);
      gl.uniform1i(uLetters, 1);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (now - startTime) / 1000);
      gl.uniform1f(uMotion, motion);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (motion && visible) raf = requestAnimationFrame(draw);
    }

    const letters = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, letters);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGB,
      1,
      1,
      0,
      gl.RGB,
      gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 0]),
    );

    let stampReady = false;
    let lettersReady = false;

    function go() {
      if (!stampReady || !lettersReady) return;
      const io = new IntersectionObserver(
        (entries) => {
          visible = entries.some((entry) => entry.isIntersecting);
          if (visible && motionOn()) {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(draw);
          } else {
            cancelAnimationFrame(raf);
            draw(performance.now());
          }
        },
        { threshold: 0.05 },
      );
      io.observe(canvas);
      window.addEventListener("resize", () => draw(performance.now()), {
        passive: true,
      });
      reduce.addEventListener("change", () => {
        syncPauseBtn();
        draw(performance.now());
      });
      pauseBtn?.addEventListener("click", () => {
        paused = !paused;
        syncPauseBtn();
        cancelAnimationFrame(raf);
        if (visible && motionOn()) raf = requestAnimationFrame(draw);
        else draw(performance.now());
      });
      syncPauseBtn();
      draw(performance.now());
      canvas.dataset.gl = "ok";
      done(true);
    }

    const stamp = loadStamp(gl, stampUrl, (ok) => {
      if (!ok) {
        canvas.dataset.gl = "stamp";
        done(false);
        return;
      }
      stampReady = true;
      go();
    });

    const HEBREW = "אבגדהוזחטיכלמנסעפצקרשת";
    const COLS = 8;
    const ROWS = 3;
    const CELL = 96;

    function paintLetters() {
      const atlas = document.createElement("canvas");
      atlas.width = COLS * CELL;
      atlas.height = ROWS * CELL;
      const ctx = atlas.getContext("2d");
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, atlas.width, atlas.height);
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `700 ${Math.round(CELL * 0.64)}px "Frank Ruhl Libre", "Times New Roman", serif`;
      Array.from(HEBREW).forEach((ch, i) => {
        const col = i % COLS;
        const row = Math.floor(i / COLS);
        ctx.fillText(
          ch,
          col * CELL + CELL / 2,
          row * CELL + CELL / 2 + CELL * 0.03,
        );
      });
      gl.bindTexture(gl.TEXTURE_2D, letters);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, atlas);
      lettersReady = true;
      go();
    }

    const fontWait =
      document.fonts && document.fonts.load
        ? Promise.all([
            document.fonts.load('700 64px "Frank Ruhl Libre"', "א"),
            document.fonts.ready,
          ])
        : Promise.resolve();
    fontWait.then(paintLetters).catch(paintLetters);
  }

  function boot() {
    document.querySelectorAll("[data-quote-gl]").forEach((canvas) => {
      const band = canvas.closest(".quote-band");
      try {
        start(canvas, (ok) => {
          if (ok) band?.classList.add("has-gl");
          else band?.classList.add("no-gl");
        });
      } catch (err) {
        console.error(err);
        canvas.dataset.gl = "throw";
        band?.classList.add("no-gl");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
