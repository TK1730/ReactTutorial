import { useState } from "react"

export default function StateNest() {
    // 入れ子の配列をStateとして宣言
    const [form, setForm] = useState({
        name: "山田太郎",
        address: {
            prefecture: "東京都",
            city: "千代田区"
        }
    })

    // 1段目の要素を更新するためのハンドラー
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // 2段目の要素を更新するためのハンドラー
    const handleFormNest = (e) => {
        setForm({
            ...form,
            address: {
                ...form.address,
                [e.target.name]: e.target.value
            }
        })
    }

    // [送信] ボタンクリックでフォーム情報をログ出力
    const show = () => {
        console.log(`${form.name} ${form.address.prefecture} ${form.address.city}`)
    }

    return (
        <form>
            <div>
                <label htmlFor="name">名前:</label>
                <input type="text" id="name" name="name"
                onChange={handleForm} value={form.name}/>
            </div>
            <div>
                <label htmlFor="prefecture">都道府県:</label>
                <input type="text" id="prefecture" name="prefecture"
                onChange={handleFormNest} value={form.address.prefecture}/>
            </div>
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}