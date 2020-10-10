import React from 'react';
import { render } from '@testing-library/react';
import { BookWishlist } from './BookWishlist';

test('renders wishlist component', () => {
    const { getAllByRole } = render(<BookWishlist />);
    const title = getAllByRole('heading');
    expect(title).toHaveLength(1);
});