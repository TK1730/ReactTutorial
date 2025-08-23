import { useState } from 'react'

export default function EventOnece() {
    // クリック済みかどうかを管理するためのフラグ
    const [clicked, setClicked] = useState(false)
    // 今日の運勢 (点数)
    const [result, setResult] = useState('-')
    const handleClick = e => {
        // 未クリックの場合のみ運勢を算出
        if (!clicked) {
            const fortune = Math.floor(Math.random() * 100) + 1
            setResult(fortune)
            setClicked(true)
        }
    }

    return (
        <>
            <button onClick={handleClick}>結果を表示</button>
            <p>{clicked ? `今日の運勢は ${result} です。` : 'まだ運勢は表示されていません。'}</p>
        </>
    )
}