import React from "react";

export default function ForItem({ book }) {
    return (
        <>
            <dt>
                <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
                    {book.title} ({book.price}円)
                </a>
            </dt>
            <dd>{book.summary}</dd>
            <p>{book.sample}</p>
            {
                book.sample ? <h1>サンプルあり</h1> : <h1>サンプルなし</h1>
            }
        </>
    );
}