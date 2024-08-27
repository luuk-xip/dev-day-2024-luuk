import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './challenge-3.styles';

@customElement('challenge-3')
export class Challenge3Component extends LitElement {
  static override styles = styles;

  override render() {
    return html`
      <p class="alert">
        <slot>Alert!</slot>
        <slot class="titleSlot" name="title"></slot>
        <slot name="content"></slot>
      </p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'challenge-3': Challenge3Component;
  }
}
