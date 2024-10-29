import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

    constructor() {
        super();
        this.title = '';
        this.source = '';
    }

    static get properties() {
        return {
            source: { type: String },
            title: { type: String },
        };
    }






    render() {
        return html`
        <div class="image">
            <img source="${this.source}" />
            <div>${this.title}</div>
        </div>
        `;
    }

    static get tag() {
        return "nasa-image";
    }

}
customElements.define(NasaImage.tag, NasaImage);