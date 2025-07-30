import React from "react"

export default function EventBasic({ type }) {
    // clickイベントハンドラー
    const current = () => {
        const d = new Date();
        // type属性の値に応じて現在日時をログに出力
        switch (type) {
            case 'date':
                console.log('d.toLocaleDateString() =', d.toLocaleDateString())
                break
            case 'time':
                console.log('d.toLocalTimeString() =', d.toLocaleTimeString())
                break
            default:
                console.log('d.toLocalString() =', d.toLocaleString())
                break
        }
    }

    return (
        <div>
            {/* ボタンクリック時にcurrent関数を呼び出し */}
            <button onClick={current}>現在時刻を取得</button>
        </div>
    )
}