import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DinamicPage from '../../src/pages/[project]';

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
    locale: 'es',
    push: mockPush,
  }),
}));

jest.mock('next/dynamic', () => () => {
  const MockComponent = () => <div>HarryPotter</div>;
  return MockComponent;
});

const mockPush = jest.fn();


jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('DinamicPage', () => {
  it('should render the not found message if the project selected does not exist', () => {
    render(<DinamicPage project="nonexistent" />);
    expect(screen.getByText('main.not-found')).toBeInTheDocument();
  });

  it('should render the correct page if the project exists', () => {
    render(<DinamicPage project="harry-potter" />);
    expect(screen.getByText('HarryPotter')).toBeInTheDocument();
  });
});