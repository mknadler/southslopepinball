import type { Meta, StoryObj } from '@storybook/svelte';
import IconButton from '$lib/components/buttons/IconButton.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Example/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    argTypes: {
        icon: 'string',
        label: 'string'
    },
} satisfies Meta<IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        icon: 'icon-qr',
        label: 'A button'
    },
};
