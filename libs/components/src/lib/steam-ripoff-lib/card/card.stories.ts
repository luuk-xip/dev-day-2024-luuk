import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { CardComponent } from './card.component';

const component = new CardComponent();

const meta: Meta<CardComponent> = {
  title: 'steam-ripoff-lib/Card Component',
  component: component.tagName,
  argTypes: {
    
    totalAchievements: {
      control: 'number',
      description: 'start value',
      defaultValue: {
        summary: 1,
      },
    },
    obtainedAchievements: {
      control: 'number',
      description: 'start value',
      defaultValue: {
        summary: 0,
      },
    },
    imageLink: {
      Control: 'text',
      description: 'link to the image',
    },
    gameTitle: {
      Control: 'text',
      description: 'title of the game',
    },
    description: {
      Control: 'text',
      description: 'description of the game',
    },
  },
  args: {
    totalAchievements: 1,
    obtainedAchievements: 0,
    imageLink: '/example.png',
    gameTitle: 'Some fun game',
    description:' A very fun game',
  },
  render: (args: CardComponent) =>
    html`<card-component 
      totalAchievements=${args.totalAchievements}
      obtainedAchievements=${args.obtainedAchievements} 
      imageLink=${args.imageLink}
      gameTitle=${args.gameTitle}
      description=${args.description}
      />,`,
};

export default meta;

export const Default = {};
