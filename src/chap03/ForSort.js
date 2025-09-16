import React from 'react';

export default function ForSort({ src }) {
    const sorted = [...src].sort((m, n) => m.price - n.price); // 元データを変更しない
    return (
        <dl>
            {sorted.map((elem) => (
                <React.Fragment key={elem.isbn}>
                    <dt>
                        <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                            {elem.title} ({elem.price}円)
                        </a>
                    </dt>
                    <dd>{elem.summary}</dd>
                </React.Fragment>
            ))}
        </dl>
    );
}