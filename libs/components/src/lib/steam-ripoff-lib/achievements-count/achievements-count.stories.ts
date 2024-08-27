import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { AchievementCountComponent } from './achievements-count.component';

const component = new AchievementCountComponent();

const meta: Meta<AchievementCountComponent> = {
  title: 'steam-ripoff-lib/Achievement Component',
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
  },
  args: {
    totalAchievements: 1,
    obtainedAchievements: 0,
  },
  render: (args: AchievementCountComponent) =>
    html`<achievenement-count-component 
      totalAchievements=${args.totalAchievements} 
      obtainedAchievements=${args.obtainedAchievements}
      />`,
};

export default meta;

export const Default = {};
