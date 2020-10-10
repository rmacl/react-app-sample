import React from 'react';
import './styles/App.scss';
import { BookSearch } from './book-search/BookSearch';
import { BookWishlist } from './book-wishlist/BookWishlist'
import { StoreProvider } from './state/store';

function App() {
  return (
    <StoreProvider>
      <div>
        <header className="header">
          <div className="header--content">
            <h1>My Good Reads</h1>
          </div>
        </header>
        <main>
          <div className="main-content">
            <div className="book-search-container">
              <BookSearch />
            </div>
            <div className="book-whishlist-container">
              <BookWishlist />
            </div>
          </div>
        </main>
      </div>
    </StoreProvider >
  );
}

export default App;
