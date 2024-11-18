import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class Image extends DDDSuper(I18NMixin(LitElement)) {

    constructor() {
        super();
        this.title = '';
        this.source = '';
        this.description = '';
    }

    static get properties() {
        return {
            source: { type: String },
            title: { type: String },
            description: { type: String },
        };
    }


    static get styles() {
        return [super.styles,css`
        
        :host {
            display:block;
        }

        .container {
        
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;

            font-size: 14px;
            padding: var(--ddd-spacing-5, 18px);
        
        }

        .title {
        
            font-size: 20px;
            text-align: center;
        }
        
        .text-container {
        
            font-weight: 350;
        }
        
        `];
    }




    render() {
        return html`
        
        <div class="container">
        
            <div class="text-container">
                <div class="title">${this.title}</div>

                <span>${this.description}</span>
            </div>

        </div>


        `;
    }

    static get tag() {
        return "image";
    }

}
customElements.define(Image.tag, Image);