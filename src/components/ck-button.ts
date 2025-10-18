class CKButton extends HTMLElement {
  private button!: HTMLButtonElement;

  static get observedAttributes() {
    return ["variant", "disabled"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.button = document.createElement("button");
  }

  connectedCallback() {
    this.render();
    this.setup();
  }

  attributeChangedCallback() {
    this.render();
  }

  private render() {
    const variant = this.getAttribute("variant") ?? "primary";
    const disabled = this.hasAttribute("disabled");
    this.button.disabled = disabled;
    this.button.innerHTML = `<slot></slot>`;

    const style = document.createElement("style");
    style.textContent = `
      button{padding:.75rem 2rem;border-radius:.5rem;font-weight:600;font-size:1rem;cursor:pointer;border:2px solid transparent;transition:all .2s;font-family:inherit}
      button:disabled{opacity:.5;cursor:not-allowed}
      .primary{background:#6366f1;color:#fff;border:none}
      .primary:hover:not(:disabled){background:#4f46e5}
      .secondary{background:#f3f4f6;color:#1a1a1a;border:none}
      .secondary:hover:not(:disabled){background:#e5e7eb}
      .outline{background:transparent;border-color:#6366f1;color:#6366f1}
      .outline:hover:not(:disabled){background:#6366f1;color:#fff}
    `;

    this.button.className = variant;
    this.shadowRoot!.innerHTML = "";
    this.shadowRoot!.append(style, this.button);
  }

  private setup() {
    this.button.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("ck-click", { bubbles: true, composed: true }));
    });
  }
}

if (!customElements.get("ck-button")) {
  customElements.define("ck-button", CKButton);
}
