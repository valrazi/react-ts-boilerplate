import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '@components/ui/Button';

describe('Button', () => {
  it('renders label and triggers click callback', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Save</Button>);

    await user.click(screen.getByRole('button', { name: /save/i }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
