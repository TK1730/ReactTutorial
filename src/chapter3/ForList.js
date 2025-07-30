import React from 'react'

// 書籍情報はProps (src) 経由で受け取る
export default function ForList({ src }) {
    return (
        // 書籍情報 (src属性) を<dt>/</dt>リストに整形
        <dl>
            {src.map(elem => (
                //一意なキーを設定することでオーバーヘッドを減らせる
                <React.Fragment key={elem.isbn}>
                    <dt>
                        <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                            {elem.title} ({elem.price}円)
                        </a>
                    </dt>
                    <dd>{elem.summary}</dd>
                </React.Fragment>
            ))}
            {/* 配列要素が意味ある主キーを持たない場合には、mapメソッドのインデックス値を用いることも可能 */}
            {src.map((elem, index) => (
                // インデックスは要素の追加、削除、ソートによって変化するため一意のキー値を明示的に用意することが望まれる
                <React.Fragment key={index}>
                    <dt>{elem.title}</dt>
                    <dd>{elem.summary}</dd>
                </React.Fragment>
            ))}
        </dl>
    )
}