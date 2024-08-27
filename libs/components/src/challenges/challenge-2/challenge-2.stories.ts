import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge2Component } from './challenge-2.component';

const component = new Challenge2Component();

const meta: Meta<Challenge2Component> = {
  title: 'Challenge 2 Component',
  component: component.tagName,
  render: (args: Challenge2Component) =>
    html`<challenge-2>
        <p slot="content">Include me in slot "content".</p>
        <p slot="title">Include me in slot "title".</p>
      </challenge-2> `,
};

export default meta;

export const Default = {};
