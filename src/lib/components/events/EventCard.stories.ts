import type { Meta, StoryObj } from '@storybook/svelte';
import EventCard from '$lib/components/events/EventCard.svelte';
import { mockLocationObject } from '$lib/types/LocationObject';
import { mockSeriesObject } from '$lib/types/SeriesObject';
import { mockEventObject } from '$lib/types/EventObject';

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
    locationObject: mockLocationObject,
    seriesObject: mockSeriesObject,
    eventObject: mockEventObject
  },
};
