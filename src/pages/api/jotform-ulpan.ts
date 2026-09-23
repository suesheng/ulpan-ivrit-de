export const prerender = false;

const FORM_ID = "261742322871052";
const FORM_URL = `https://form.jotform.com/${FORM_ID}?isIframeEmbed=1`;

/** Brand CSS injected into the proxied Jotform document (cross-origin iframe cannot be styled from the parent). */
const ULPAN_THEME_CSS = `
:root {
  --ulpan-blue: #0067b8;
  --ulpan-blue-deep: #003d7a;
  --ulpan-navy: #0a3d6b;
  --ulpan-green: #1f7a4d;
  --ulpan-muted: #4a6d8c;
  --ulpan-line: #c5d8ea;
  --ulpan-bg: #ffffff;
  --ulpan-font-display: "Montserrat", "Helvetica Neue", Arial, sans-serif;
  --ulpan-font-body: "Source Sans 3", "Helvetica Neue", Arial, sans-serif;
}

html,
body,
.supernova,
.supernova body,
body.supernova {
  background: var(--ulpan-bg) !important;
  background-color: var(--ulpan-bg) !important;
  background-image: none !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  min-height: 0 !important;
  height: auto !important;
  max-height: none !important;
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar,
.supernova::-webkit-scrollbar,
.form-all::-webkit-scrollbar,
.jf-form-page::-webkit-scrollbar,
.form-section::-webkit-scrollbar,
#stage::-webkit-scrollbar {
  width: 0 !important;
  height: 0 !important;
  display: none !important;
}

.supernova,
.form-all,
.jf-form-page,
.form-section,
#stage,
.supernova .form-all,
[role="main"] {
  overflow: hidden !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  max-height: none !important;
  scrollbar-width: none !important;
}

/* Thank-you / confirmation: no full-viewport vertical centering */
html.thankyou,
body.thankyou,
.supernova.thankyou,
.form-all.thankyou-page,
.thankyou-wrapper,
.jf-thankyou-wrapper,
.ty-container,
[class*="thankyou"],
[class*="ThankYou"],
.form-all:has(.thankyou),
.form-all:has([class*="thankyou"]) {
  min-height: 0 !important;
  height: auto !important;
  display: block !important;
  align-items: stretch !important;
  justify-content: flex-start !important;
  padding: 0.5rem 0 1rem !important;
}

.thankyou-wrapper,
.jf-thankyou-wrapper,
.ty-container,
div[class*="thankYou"],
div[class*="thankyou"] {
  max-width: 40rem !important;
  width: 100% !important;
  margin: 0 auto !important;
  box-sizing: border-box !important;
}

.form-all,
.supernova .form-all,
.supernova.transparent-form .form-all,
.supernova.overlay-form .form-all,
.supernova.stacked-form .form-all {
  background: var(--ulpan-bg) !important;
  background-color: var(--ulpan-bg) !important;
  background-image: none !important;
  box-shadow: none !important;
  border: none !important;
  border-radius: 0 !important;
  max-width: 100% !important;
  width: 100% !important;
  margin: 0 auto !important;
  padding: 0 !important;
  font-family: var(--ulpan-font-body) !important;
  font-size: 1rem !important;
  color: var(--ulpan-navy) !important;
  --clrText: var(--ulpan-navy) !important;
}

.supernova.stacked-form .form-line,
.supernova.stacked-form li:has(.form-pagebreak),
.supernova.stacked-form li[data-type="control_head"],
.supernova.stacked-form [data-type="control_text"] {
  background: var(--ulpan-bg) !important;
  background-color: var(--ulpan-bg) !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  margin: 0.35rem 0 !important;
  padding: 0.35rem 0 !important;
}

#formCoverLogo,
.form-cover-image,
.form-cover-image-area,
[id^="formCover"],
.header-bg-cover-color,
.form-header-group.has-bg-cover {
  background: transparent !important;
  background-image: none !important;
}

/* Site already shows „Anmeldung“ — drop only the first Jotform title/logo. */
#formCoverLogo,
.form-cover-image,
.form-cover-image-area,
img[alt*="Ulpan Ivrit"],
.form-header-group .header-logo,
.logo-image,
#cid_16,
#header_16,
#id_16 {
  display: none !important;
}

li[data-type="control_head"]:has(#header_16),
li[data-type="control_head"]:has(#cid_16) {
  display: none !important;
}

.form-header-group:not(:has(#header_16)) {
  border-bottom: 1px solid var(--ulpan-line) !important;
  margin: 0 0 1rem !important;
  padding: 0 0 0.85rem !important;
  background: transparent !important;
}

.form-header-group .form-header,
.form-header {
  font-family: var(--ulpan-font-display) !important;
  font-weight: 700 !important;
  color: var(--ulpan-navy) !important;
  font-size: 1.35rem !important;
}

.form-header-group .form-subHeader {
  color: var(--ulpan-muted) !important;
  font-family: var(--ulpan-font-body) !important;
}

.form-label,
.form-label-top,
.form-label-left,
.form-label-right,
.form-html,
.form-checkbox-item label,
.form-radio-item label {
  color: var(--ulpan-blue) !important;
  font-family: var(--ulpan-font-body) !important;
  font-weight: 600 !important;
}

.form-sub-label {
  color: var(--ulpan-muted) !important;
  font-family: var(--ulpan-font-body) !important;
}

.form-textbox,
.form-textarea,
.form-dropdown,
.supernova.stacked-form .form-textbox,
.supernova.stacked-form .form-textarea,
.supernova.stacked-form .form-dropdown,
.jf-form-buttons,
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
select,
textarea {
  font-family: var(--ulpan-font-body) !important;
  color: var(--ulpan-navy) !important;
  border: 1px solid var(--ulpan-line) !important;
  border-radius: 0 !important;
  background: #fff !important;
  box-shadow: none !important;
}

.form-textbox:focus,
.form-textarea:focus,
.form-dropdown:focus,
input:focus,
select:focus,
textarea:focus {
  outline: 2px solid var(--ulpan-blue) !important;
  outline-offset: 2px !important;
  border-color: var(--ulpan-blue) !important;
}

.form-submit-button,
.form-pagebreak-next,
.form-pagebreak-back,
button.form-submit-button,
.jf-form-buttons button,
[data-component="button"] button {
  font-family: var(--ulpan-font-display) !important;
  font-weight: 600 !important;
  font-size: 0.92rem !important;
  background: var(--ulpan-blue) !important;
  background-color: var(--ulpan-blue) !important;
  background-image: none !important;
  border: 1px solid var(--ulpan-blue) !important;
  border-radius: 0 !important;
  color: #fff !important;
  box-shadow: none !important;
  text-shadow: none !important;
  padding: 10px 18px !important;
  min-width: auto !important;
}

.form-submit-button:hover,
.form-pagebreak-next:hover,
.jf-form-buttons button:hover {
  background: var(--ulpan-blue-deep) !important;
  border-color: var(--ulpan-blue-deep) !important;
}

.form-pagebreak-back {
  background: transparent !important;
  color: var(--ulpan-blue) !important;
  border: 1px solid var(--ulpan-blue) !important;
}

.form-pagebreak-back:hover {
  background: #f4f8fc !important;
  color: var(--ulpan-blue-deep) !important;
}

.form-line-error,
.form-validation-error {
  box-shadow: none !important;
}

/* Perk / discount emphasis when Jotform uses bold price copy */
.form-html strong,
.form-label strong,
li[data-type="control_text"] strong {
  color: var(--ulpan-navy) !important;
  font-weight: 700 !important;
}

.form-html .ulpan-perk,
[data-wrapper-react="true"] .ulpan-perk {
  color: var(--ulpan-green) !important;
}

/* Remove Jotform footer chrome inside embed when present */
.supernova > .footer,
.jfFooter,
.jf-branding {
  display: none !important;
}
`;

const ULPAN_HEIGHT_SCRIPT = `
<script id="ulpan-ivrit-height-bridge">
(function () {
  var last = 0;
  function measure() {
    var body = document.body;
    var form = document.querySelector(".form-all") || document.querySelector("form") || body;
    if (!form) return;
    var text = ((body && body.innerText) || "").toLowerCase();
    var thankyou =
      text.indexOf("vielen dank") !== -1 ||
      text.indexOf("thank you") !== -1 ||
      !!(document.querySelector("[class*='thankyou'], [class*='ThankYou'], .thankyou-wrapper"));
    if (thankyou) {
      document.documentElement.classList.add("thankyou");
      body && body.classList.add("thankyou");
    }
    var target = thankyou
      ? document.querySelector("[class*='thankyou'], [class*='ThankYou'], .thankyou-wrapper, .ty-container") || form
      : form;
    var rect = target.getBoundingClientRect();
    var h = Math.ceil((rect.height || target.offsetHeight || 0) + (thankyou ? 24 : 32));
    if (h < 120 || Math.abs(h - last) < 16) return;
    last = h;
    try {
      parent.postMessage({ action: "setHeight", height: h, thankYou: thankyou }, "*");
    } catch (e) {}
  }
  var t;
  function schedule() {
    clearTimeout(t);
    t = setTimeout(measure, 100);
  }
  window.addEventListener("load", measure);
  document.addEventListener("DOMContentLoaded", measure);
  if (typeof MutationObserver !== "undefined") {
    var mo = new MutationObserver(schedule);
    mo.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
</script>
`;

export async function GET() {
  try {
    const upstream = await fetch(FORM_URL, {
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": "ulpan-ivrit-de-form-embed/1.0",
      },
    });

    if (!upstream.ok) {
      return new Response("Anmeldung vorübergehend nicht erreichbar.", {
        status: 502,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    let html = await upstream.text();

    const inject = `
<base href="https://form.jotform.com/" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet" />
<style id="ulpan-ivrit-jotform-theme">${ULPAN_THEME_CSS}</style>
`;

    if (/<\/head>/i.test(html)) {
      html = html.replace(/<\/head>/i, `${inject}</head>`);
    } else {
      html = inject + html;
    }

    if (/<\/body>/i.test(html)) {
      html = html.replace(/<\/body>/i, `${ULPAN_HEIGHT_SCRIPT}</body>`);
    } else {
      html += ULPAN_HEIGHT_SCRIPT;
    }

    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, s-maxage=120, stale-while-revalidate=600",
        "Content-Security-Policy":
          "frame-ancestors 'self' https://www.ulpan-ivrit.de http://127.0.0.1:* http://localhost:*",
      },
    });
  } catch {
    return new Response("Anmeldung vorübergehend nicht erreichbar.", {
      status: 502,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}
