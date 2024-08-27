import { css } from 'lit';

export const styles = [
  css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      text-align: center;
    }

    .text {
      max-width:160px;
      max-height:60px;
      overflow: auto;
    }

    .card-down {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      border: solid;
    }

    .card-text-down {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    .card-right {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      height: 192px;
    }
    
    .card-stats {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      border-top: solid;
    }

    .card-picture {
      max-width: 200px;
    }

    .hint {
      color: #888;
    }

    .achievementAmount {
      border: solid;
      padding: 1rem;
    }

    button {
      color: white;
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }

    button:hover {
      border-color: #646cff;
    }

    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      button {
        background-color: #f9f9f9;
        color: black;
      }
    }
  `,
];
