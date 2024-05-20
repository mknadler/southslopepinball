import type { Meta, StoryObj } from '@storybook/svelte';
import EventCard from '$lib/components/eventcard/EventCard.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/EventCard',
  component: EventCard,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<EventCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
  },
};
