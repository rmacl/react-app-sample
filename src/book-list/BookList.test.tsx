import React from 'react';
import { render } from '@testing-library/react';
import { BookList } from './BookList';

test('renders list with button&img elements', () => {
    const listData = [{ volumeInfo: { title: 'test', authors: 'test_author', imageLinks: {} } }];
    const { getByRole } = render(<BookList listData={listData} />)
    expect(getByRole('img')).toHaveTextContent('');
    expect(getByRole('button')).toHaveTextContent('ADD TO WISHLIST');
});

