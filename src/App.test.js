import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from './Theme';

test("mm", () => {
  render(<Provider>
    <App />
  </Provider>);
  const linkElement = screen.getByText("First Name");
  expect(linkElement).toBeInTheDocument();
});
