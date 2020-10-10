import React from 'react';
import { useStore } from '../state/store';
import { BOOK_INFO_FIELDS } from '../constant/config';

interface IBookList {
    listData: any[]
}

interface IBookData {
    id: string,
    volumeInfo: { [key: string]: any }
}


export const BookList: React.FC<IBookList> = (props) => {
    const { listData } = props;
    const { dispatch } = useStore();
    return <>{
        listData.map((list: IBookData) => {
            const { volumeInfo } = list;
            const imgUrl = volumeInfo.imageLinks.smallThumbnail || volumeInfo.imageLinks.thumbnail;
            return (
                <div key={`${list.id}-book-list`} className="book-list-container">
                    <div className="thumbnail-image-container">
                        <div className="book-thumbmail-image">
                            <img src={imgUrl} />
                        </div>
                        <div className="add-whishlist-button"><button onClick={() => { dispatch({ type: 'addWishlist', wishlist: { [list.id]: volumeInfo.title } }) }}>ADD TO WISHLIST</button></div>
                    </div>
                    <div key={`${list.id}-book-info`} className="book-info-container">
                        {BOOK_INFO_FIELDS.map((field: string, index: number) => (
                            <div className={field} key={`${list.id}-book-detail-${index}`} > {field} : {volumeInfo[field] || '-'} </div>
                        ))}
                    </div>
                </div>)
        })
    }</>;
}

