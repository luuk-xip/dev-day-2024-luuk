import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './card.styles';

@customElement('card-component')
export class CardComponent extends LitElement {
  static override styles = styles;

  @property({ type: String })
  gameTitle: string = 'Some game';

  @property({ type: String })
  description: string = 'A very fun game';

  @property({ type: Number })
  totalAchievements: number = 1;

  @property({ type: Number })
  obtainedAchievements: number = 0;

  @property({ type: Number })
  hoursPlayed: number = 0;

  @property({ type: String })
  imageLink: string = '';

  @property({ type: String })
  lastPlayed: string = 'dd/mm/yyyy';

  override render() {
    return html`
      <div class="card-down">
        <div class="card-right">
          <div class="card-text-down">
            <h2 class="text">${this.gameTitle}</h2>
            <p class="text">${this.description} </p>
          </div>
          <img class="card-picture" src="${this.imageLink}" />
        </div>
        <div class="card-stats">
          <div>
            <p>Last played: </p>
            <p>${this.lastPlayed}</p>
          </div>
          <div>
            <p>Hours played: </p>
            <p>${this.hoursPlayed}</p>
          </div>
          <achievenement-count-component 
            totalAchievements=${this.totalAchievements}
            obtainedAchievements=${this.obtainedAchievements}
          ></achievenement-count-component>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'card-component': CardComponent;
  }
}
