import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './achievements-count.styles';

@customElement('achievenement-count-component')
export class AchievementCountComponent extends LitElement {
  static override styles = styles;

  @property({ type: Number })
  totalAchievements: number = 1;

  @property({ type: Number })
  obtainedAchievements: number = 0;

  override render() {
    return html`
    <div>
      <p>achievements</p>
      <p>${this.obtainedAchievements} / ${this.totalAchievements}</p>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'achievenement-count-component': AchievementCountComponent;
  }
}
