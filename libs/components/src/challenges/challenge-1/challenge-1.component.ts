import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './challenge-1.styles';

@customElement('challenge-1')
export class Challenge1Component extends LitElement {
  static override styles = styles;

  override render() {
    return html`
      <p class="alert">This is an alert!</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'challenge-1': Challenge1Component;
  }
}
