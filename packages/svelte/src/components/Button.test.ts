import { render, screen } from '@testing-library/svelte';
import Button from './Button.svelte';

describe('Button', () => {
  it('renders a button', () => {
    render(Button, { props: { children: 'Click me' } });
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
});
