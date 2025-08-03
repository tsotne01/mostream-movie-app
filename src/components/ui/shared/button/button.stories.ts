
import { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'outlined'],
            defaultValue: 'primary',
        },
        children: {
            control: { type: 'text' },
            defaultValue: 'Click Me',
        },
        beforeIcon: {
            control: { type: 'text' },
            defaultValue: '',
        },
        afterIcon: {
            control: { type: 'text' },
            defaultValue: '',
        },
        className: {
            control: { type: 'text' },
            defaultValue: '',
        },
        isActive: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        disabled: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        onClick: {
            action: 'clicked',
        },
        type: {
            control: { type: 'select' },
            options: ['button', 'submit', 'reset'],
            defaultValue: 'button',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: 'Outlined Button',
    },
};


export const WithIcons: Story = {
    args: {
        variant: 'primary',
        children: 'Button with Icons',
        beforeIcon: '🔍',
        afterIcon: '➡️',
        },
};

export const Disabled: Story = {
    args: {
        variant: 'primary',
        children: 'Disabled Button',
        disabled: true,
    },
};

export const Active: Story = {
    args: {
        variant: 'primary',
        children: 'Active Button',
        isActive: true,
    },
};

export const CustomClass: Story = {
    args: {
        variant: 'primary',
        children: 'Button with Custom Class',
        className: 'custom-class',
    },
};