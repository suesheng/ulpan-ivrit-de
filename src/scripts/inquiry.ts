type InquiryKind = "location" | "host";

function mailtoFromForm(form: HTMLFormElement): string {
  const data = new FormData(form);
  const action = form.getAttribute("action") ?? "";
  const lines: string[] = [];
  for (const [key, value] of data.entries()) {
    if (key === "website" || key === "locale" || key === "privacy") continue;
    const text = String(value).trim();
    if (text) lines.push(`${key}: ${text}`);
  }
  const body = encodeURIComponent(lines.join("\n"));
  const join = action.includes("?") ? "&" : "?";
  return `${action}${join}body=${body}`;
}

export function bindInquiryForms() {
  document.querySelectorAll<HTMLFormElement>("form[data-inquiry]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const kind = form.dataset.inquiry as InquiryKind | undefined;
      const status = form.querySelector<HTMLElement>("[data-form-status]");
      const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      const sending = form.dataset.sending ?? "";
      const sent = form.dataset.sent ?? "";
      const error = form.dataset.error ?? "";
      if (status) {
        status.hidden = false;
        status.textContent = sending;
      }
      if (submit) submit.disabled = true;

      const data = new FormData(form);
      const fields: Record<string, string> = {};
      for (const [key, value] of data.entries()) {
        if (key === "website" || key === "privacy") continue;
        fields[key] = String(value);
      }

      try {
        const response = await fetch("/api/inquiry", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            kind,
            locale: fields.locale,
            website: String(data.get("website") ?? ""),
            fields,
          }),
        });
        const result = (await response.json()) as {
          ok?: boolean;
          fallback?: boolean;
        };
        if (result.ok) {
          form.reset();
          if (status) status.textContent = sent;
          if (submit) submit.hidden = true;
          return;
        }
        if (result.fallback || response.status === 503) {
          window.location.href = mailtoFromForm(form);
          if (status) status.hidden = true;
          if (submit) submit.disabled = false;
          return;
        }
        throw new Error("send");
      } catch {
        if (status) status.textContent = error;
        if (submit) submit.disabled = false;
      }
    });
  });
}

bindInquiryForms();
