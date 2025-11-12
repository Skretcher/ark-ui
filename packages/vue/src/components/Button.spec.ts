import { render, screen } from '@testing-library/vue';
import Button from './Button.vue';

describe('Button', () => {
  it('renders a button', () => {
    render(Button, { slots: { default: 'Click me' } });
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
});
