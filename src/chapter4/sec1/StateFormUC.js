import { useRef } from "react"

export default function StateFormUC() {
    // React要素への参照を準備
    const name = useRef(null)  // 要素オブジェクトから直接値を取得するため、対象となる要素に対してuseRef関数で紐づける要素を準備
    const age = useRef(null)  // 同様にage要素に対してもuseRefを準備

    // 要素(参照)経由で入力値を準備
    const show = () => {
        console.log(`こんにちは、${name.current.value} (${age.current.value}歳)さん!`)
    }
    // フォームを描画
    return (
        <form>
            {/* 準備した参照を各要素に紐づけ */}
            <div>
                <label htmlFor="name">名前:</label>
                <input id="name" name="name" type="text" ref={name} defaultValue="山田太郎" />
            </div>
            <div>
                <label htmlFor="age">年齢:</label>
                <input id="age" name="age" type="number" ref={age} defaultValue="20" />
            </div>
            <div>
                <button type="button" onClick={show}>送信</button>
            </div>
        </form>
    )
}