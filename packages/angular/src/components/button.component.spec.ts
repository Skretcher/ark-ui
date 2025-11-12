import { render, screen } from '@testing-library/angular';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  it('renders a button', async () => {
    await render(ButtonComponent, { componentProperties: { text: 'Click me' } });
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
});
