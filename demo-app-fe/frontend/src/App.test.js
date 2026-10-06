import { render, screen } from '@testing-library/react';
import App from './App';

const originalFetch = global.fetch;

afterEach(() => {
  global.fetch = originalFetch;
});

test('renders the backend response', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ message: 'Hello from backend' }),
  });

  render(<App />);

  expect(screen.getByRole('heading', { name: /mô hình vpc: react \+ spring boot/i })).toBeInTheDocument();
  expect(await screen.findByText('Hello from backend')).toBeInTheDocument();
});
