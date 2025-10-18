class CKModal extends HTMLElement {
  static get observedAttributes() {
    return ["open"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.setup();
    this.updateVisibility();
  }

  attributeChangedCallback(name: string) {
    if (name === "open") this.updateVisibility();
  }

  private render() {
    const style = document.createElement("style");
    style.textContent = `
      .backdrop{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;align-items:center;justify-content:center}
      .backdrop.open{display:flex}
      .modal{background:#fff;border-radius:.75rem;max-width:500px;width:90%;max-height:90vh;overflow:auto;box-shadow:0 20px 25px -5px rgba(0,0,0,.1)}
      .header{padding:1.5rem;border-bottom:1px solid #e5e5e5;font-weight:600;font-size:1.25rem}
      .content{padding:1.5rem}
      .footer{padding:1.5rem;border-top:1px solid #e5e5e5;display:flex;justify-content:flex-end;gap:.5rem}
    `;

    const template = document.createElement("template");
    template.innerHTML = `
      <div class="backdrop">
        <div class="modal" role="dialog" aria-modal="true">
          <div class="header"><slot name="header"></slot></div>
          <div class="content"><slot name="content"></slot></div>
          <div class="footer"><slot name="footer"></slot></div>
        </div>
      </div>
    `;

    this.shadowRoot!.innerHTML = "";
    this.shadowRoot!.append(style, template.content.cloneNode(true));
  }

  private setup() {
    const backdrop = this.shadowRoot!.querySelector(".backdrop");
    backdrop?.addEventListener("click", (e) => {
      if (e.target === backdrop) this.removeAttribute("open");
    });
  }

  private updateVisibility() {
    const backdrop = this.shadowRoot!.querySelector(".backdrop");
    if (this.hasAttribute("open")) backdrop?.classList.add("open");
    else backdrop?.classList.remove("open");
  }
}

if (!customElements.get("ck-modal")) {
  customElements.define("ck-modal", CKModal);
}
