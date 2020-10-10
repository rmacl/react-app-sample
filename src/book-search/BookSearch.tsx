import React, { useEffect, useState, useCallback } from "react";
import { getBooksByType } from "./book-search.service";
import { BookList } from '../book-list/BookList';
import { SAMPLE_SEARCH_TEXT } from '../constant/text';
import debounce from 'lodash/debounce';


export const BookSearch = () => {
    const [bookType, updateBookType] = useState("");
    const [allAvailableBooks, setAllAvailableBooks] = useState([]);
    const searchBooksByType = useCallback(debounce(requestBooks, 500), [])

    function handleOnChange(searchInput: string) {
        updateBookType(searchInput);
        searchBooksByType(searchInput)
    }

    async function requestBooks(searchKeyword?: string) {
        if (searchKeyword) {
            const allBooks = await getBooksByType(searchKeyword);
            setAllAvailableBooks(allBooks.items);
        }
    }

    useEffect(() => {
        async function getAllBooks() {
            await requestBooks();
        }
        getAllBooks();
    }, [allAvailableBooks]);

    return (
        <>
            <div className="book--container">
                <div className="search-params">
                    <div>
                        <form
                            onSubmit={(e) => {
                                debugger;
                                e.preventDefault();
                            }}
                        >
                            <input
                                className="full-width"
                                autoFocus
                                name="gsearch"
                                type="search"
                                value={bookType}
                                placeholder="Search for books to add to your reading list and press Enter"
                                onChange={e => {
                                    handleOnChange(e.target.value);
                                }}
                            />
                        </form>
                        {!bookType && (
                            <div className="empty">
                                <p>
                                    Try searching for a topic, for example
                                        <a onClick={() => {
                                        handleOnChange(SAMPLE_SEARCH_TEXT);
                                    }}
                                    >
                                        {`  `}
                                        "{SAMPLE_SEARCH_TEXT}"
                                        </a>
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <div>
                {allAvailableBooks.length && <BookList listData={allAvailableBooks} />}
            </div>
        </>
    );
};