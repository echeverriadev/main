import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Navbar } from '../Navbar';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('Navbar Component', () => {
  const mockPush = jest.fn();
  const mockRouter = {
    locale: 'en',
    asPath: '/',
    push: mockPush,
    route: '/',
    pathname: '/',
    query: {},
    basePath: '',
    isLocaleDomain: false,
    defaultLocale: 'en',
    isReady: true,
    isFallback: false,
    isPreview: false,
    events: {
      on: mockPush,
      off: mockPush,
      emit: mockPush,
    },
    forward: mockPush,
    reload: mockPush,
    back: mockPush,
    prefetch: mockPush,
    beforePopState: mockPush,
    replace: mockPush,
  };

  it('renders correctly', () => {
    const { getByText } = render(
      <RouterContext.Provider value={mockRouter}>
        <Navbar />
      </RouterContext.Provider>
    );

    expect(getByText('Harry Potter')).toBeInTheDocument();
    expect(getByText('Rick y Morty')).toBeInTheDocument();
    expect(getByText('EN')).toBeInTheDocument();
  });

  it('changes locale when button is clicked', () => {
    const { getByText } = render(
      <RouterContext.Provider value={mockRouter}>
        <Navbar />
      </RouterContext.Provider>
    );
    fireEvent.click(getByText('EN'));

    expect(mockPush).toHaveBeenCalledWith('/', '/', { locale: 'es' });
  });
});