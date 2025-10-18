class CKCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  private render() {
    const style = document.createElement("style");
    style.textContent = `
      .card{background:#fff;border-radius:.75rem;border:1px solid #e5e5e5;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1)}
      .header{padding:1.5rem;border-bottom:1px solid #e5e5e5;font-weight:600;font-size:1.25rem}
      .content{padding:1.5rem}
      .footer{padding:1.5rem;border-top:1px solid #e5e5e5;background:#fafafa}
    `;

    const template = document.createElement("template");
    template.innerHTML = `
      <div class="card">
        <div class="header"><slot name="header"></slot></div>
        <div class="content"><slot name="content"></slot></div>
        <div class="footer"><slot name="footer"></slot></div>
      </div>
    `;

    this.shadowRoot!.innerHTML = "";
    this.shadowRoot!.append(style, template.content.cloneNode(true));
  }
}

if (!customElements.get("ck-card")) {
  customElements.define("ck-card", CKCard);
}
