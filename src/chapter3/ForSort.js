import React from 'react'

export default function ForSort({ src }) {
    // ⚠️ 元の配列を変更してしまう（破壊的操作）
    // src.sort((m, n) => m.price - n.price)

    // ✅ 元の配列を保持して新しい配列を作成（非破壊的操作）
    const sortedBooks = [...src].sort((m, n) => m.price - n.price)

    return (
        <dl>
            {sortedBooks.map(elem => (
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
    )
}

