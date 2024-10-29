/**
 * Copyright 2024 Marcus-44
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `nasa-search1`
 * 
 * @demo index.html
 * @element nasa-search1
 */
export class nasaSearch1 extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nasa-search1";
  }

  constructor() {
    super();
    this.title = '';
    this.value = null;
    this.loading = false;
    this.items = [];
    
    
    //this.registerLocalization({
      //context: this,
      //localesPath:
        //new URL("./locales/nasa-search1.ar.json", import.meta.url).href +
        //"/../",
      //locales: ["ar", "es", "hi", "zh"],
    //});
  }

  // Lit reactive properties
  static get properties() {
    return {
      //...super.properties,
      title: { type: String },
      loading: { type: Boolean, reflect: true },
      items: { type: Array, },
      value: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--nasa-search1-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3><span>${this.t.title}:</span> ${this.title}</h3>
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(nasaSearch1.tag, nasaSearch1);