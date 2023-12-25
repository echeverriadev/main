import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '../index';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

jest.mock('next/router', () => ({
  useRouter: () => ({}),
}));

describe('Main Page', () => {
  it('should render with header text', () => {
    render(<Main />);
    expect(screen.getByText('navbar.title')).toBeInTheDocument();
    expect(screen.getByText('navbar.subtitle')).toBeInTheDocument();
  });
});