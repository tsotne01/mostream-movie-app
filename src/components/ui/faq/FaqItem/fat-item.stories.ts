import type { Meta, StoryObj } from '@storybook/react';
import FaqItem from './faq-item';

const meta: Meta<typeof FaqItem> = {
    title: 'UI/FaqItem',
    component: FaqItem,
    tags: ['autodocs'],
    argTypes: {
        question: { control: 'text', defaultValue: 'What is mostream?' },
        answer: { control: 'text', defaultValue: 'mostream is movie app' },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        question: 'What is Storybook?',
        answer: 'An open source tool for building UI components and pages in isolation.',
    },
};

export const CustomClasses: Story = {
    args: {
        question: 'How do I use Storybook?',
        answer: 'You can use Storybook by installing it in your project and creating stories for your components.',
        componentClasses: 'bg-gray-800 text-white',
    },
};

export const OpenState: Story = {
    args: {
        question: 'What is the benefit of using Storybook?',
        answer: 'Storybook allows you to develop and test UI components in isolation, which can improve your development workflow.',
        componentClasses: 'bg-blue-500 text-white',
    },
    play: async ({ canvasElement }) => {
        const canvas = canvasElement as HTMLElement;
        const faqItem = canvas.querySelector('.p-6') as HTMLElement;
        if (faqItem) {
            faqItem.click();
        }  
    }
};