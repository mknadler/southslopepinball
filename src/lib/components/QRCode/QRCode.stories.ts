import type { Meta, StoryObj } from '@storybook/svelte';
import QRCode from '$lib/components/QRCode/QRCode.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Example/QRCode',
    component: QRCode,
    tags: ['autodocs'],
    argTypes: {
        url: 'string'
    },
} satisfies Meta<QRCode>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        url: 'https://app.matchplay.events/tournaments/137713'
    },
};
