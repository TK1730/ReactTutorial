import { useState } from "react"

export default function FormRadio() {
    const [form, setForm] = useState({
        os: "windows"
    })

    // ラジオボタンの変更時に入力値をStateに反映
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // [送信] ボタンクリックで入力値をログ出力
    const show = () => {
        console.log(`使用OS: ${form.os}`)
    }

    // Stateの現在値に応じて、checked属性を指定
    return (
        <form>
            <fieldset>
                <legend>使用OS:</legend>
                <label htmlFor="windows">Windows</label>
                <input type="radio" id="windows" name="os" value="windows"
                    checked={form.os === "windows"} onChange={handleForm} /><br />
                <label htmlFor="mac">macOS</label>
                <input type="radio" id="mac" name="os" value="mac"
                    checked={form.os === "mac"} onChange={handleForm} /><br />
                <label htmlFor="linux">Linux</label>
                <input type="radio" id="linux" mame="os" value="linux"
                    checked={form.os === "linux"} onChange={handleForm} /><br />
            </fieldset>
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}
