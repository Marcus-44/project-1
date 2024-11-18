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
export class project1 extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nasa-search1";
  }

  constructor() {
    super();
    this.title = "Search";
    this.value = null;
    this.loading = false;
    this.items = [];
    this.url = '';
    this.query = '';

    
    
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/project-1.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      //...super.properties,
      title: { type: String },
      loading: { type: Boolean, reflect: true },
      items: { type: Array, attribute: "items", reflect: true},
      value: { type: Object, reflect: true },
      url: { type: String },
      query: { type: String, attribute: "query"},
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
      


    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">

  <h2>${this.title}</h2>

  <div class="searchBar">
    <input class="input" placeholder="Enter URL" }" @keydown="${(e)=>{if(e.key==='Enter'){this.formatQuery();}}}"/>
    <button class="search-button" @click="${this.formatQuery}" label="analyze">Analyze</button>

  
</div>`;}



formatQuery() {
  this.loading = true;

  this.url = '';
  let jsonUrl = this.url+'site.json';

  if(this.query.endsWith("site.json")) {
      this.url = this.query;
  } else{
      this.url = this.query+jsonUrl;
  }
}












  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(project1.tag, project1);