import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './challenge-2.styles';

@customElement('challenge-2')
export class Challenge2Component extends LitElement {
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
    'challenge-2': Challenge2Component;
  }
}
