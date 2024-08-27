import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge3Component } from './challenge-3.component';

const component = new Challenge3Component();

const meta: Meta<Challenge3Component> = {
  title: 'Challenge 3 Component',
  component: component.tagName,
  render: (args: Challenge3Component) =>
    html`<challenge-3>
        <p slot="content">Include me in slot "content".</p>
        <p slot="title">Include me in slot "title".</p>
      </challenge-3> `,
};

export default meta;

export const Default = {};
