import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ActiveLink } from '../ActiveLink';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    asPath: '/',
  }),
}));

const style = { backgroundColor: 'var(--button-color)', color: '#fff', textDecoration: 'underline' };

describe('ActiveLink Component', () => {
  it('should render the button with the correct props', () => {
    render(<ActiveLink href="/test" label="Test" />);
    const linkElement = screen.getByText('Test');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/test');
  });

  it('should apply the active style if the current path matches the href', () => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: '/test' });
    render(<ActiveLink href="/test" label="Test" />);
    const linkElement = screen.getByText('Test');
    expect(linkElement).toHaveStyle(style);
  });
});
