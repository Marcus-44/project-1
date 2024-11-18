import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class card extends DDDSuper(I18NMixin(LitElement)) {


constructor() {
    super();
    this.title = '';
    this.description = '';
    this.imgSrc = '';

}

static get properties() {
    return {
        title: { type: String },
        description: { type: String },
        imgSrc: { type: String },
    };
}


static get styles() {
    return [super.styles,css`
        
    :host {
        display:block;

    }

    
    .card-container{
        display: flex;

        gap: var(--ddd-spacing-3, 20px);
        flex-wrap: wrap;

        min-height: 500px;
        padding: var(--ddd-spacing-5, 15px);
        border: var(--ddd-border-sm, black solid 3px);
        font-family: var(--ddd-font-primary, roboto);
        font-size:14px;
        color: var(--ddd-theme-primary);
    }
        
    .title{
        font-size: 16px;
        text-align: center;
    }

    .text-containter{
        display: flex;
        font-weight: 350;
    }
        
        
        `];
}





render() {
    return html`
    
    <div class="card-container">
    
        <div class="title" ?hidden="${this.title === ''}">
            <a>${this.title}</a>
        </div>

        <div class="text-container" ?hidden="${this.description === ''}">
            <span>${this.description}</span>
        </div>
    
    </div>
    
    
    `;
}



static get tag() {
    return "card";
}

}
customElements.define(card.tag, card);