import { useState } from "react"

export default function StateForm() {
    // フォームとして扱う値をstateで管理
    const [form, setForm] = useState({
        name: '山田太郎',
        age: 18
    })

    // フォーム要素の変更をstateに反映
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const show = () => {
        console.log(`こんにちは、${form.name} (${form.age}歳)さん!`)
    }

    return (
        <form>
            {/* State値を個々のフォーム要素に割り当て */}
            <div>
                {/* labelのhtmlFor属性はinputのid属性と対応させることで入力欄と紐づく */}
                <label htmlFor="name">名前:</label>
                <input id="name" name="name" value={form.name} onChange={handleForm} />
            </div>
            <div>
                <label htmlFor="age">年齢:</label>
                <input id="age" name="age" value={form.age} onChange={handleForm} />
            </div>
            <div>
                <button type="button" onClick={show}>送信</button>
            </div>
            <p>こんにちは、{form.name} ({form.age}歳)さん!</p>
        </form>
    )

}