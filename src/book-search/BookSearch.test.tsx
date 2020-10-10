import React from 'react';
import { render } from '@testing-library/react';
import { BookSearch } from './BookSearch';

test('renders search component', () => {
    const { getByPlaceholderText } = render(<BookSearch />);
    const inputNode = getByPlaceholderText('Search for books to add to your reading list and press Enter');
    expect(inputNode).toHaveAttribute('type');
});