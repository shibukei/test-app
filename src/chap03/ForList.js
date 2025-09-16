import React from 'react';
import ForItem from './ForItem';

export default function ForList({ src }) {
    return (
        <dl>
            {src.map((elem) => (
                <ForItem book={elem} key={elem.id} />
            ))}
        </dl>
    );
}