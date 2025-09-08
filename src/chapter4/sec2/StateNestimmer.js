import {useImmer } from 'use-immer'

export default function StateNestimmer() {
    // フォームとして扱う値Stateとして宣言
    const [form, setForm] = useImmer({
        name: '山田太郎',
        address: {
            prefecture: '広島県',
            city: '広島市'
        }
    })

    // 1段目の要素を更新するためのハンドラー
    const handleForm = (e) => {
        setForm(form => {
            form[e.target.name] = e.target.value
        })
    }

    // 2段目の要素を更新するためのハンドラー
    const handleFormNest = (e) => {
        setForm(form => {
            form.address[e.target.name] = e.target.value
        })
    }

    // [送信] ボタンクリックでフォーム情報をログ出力
    const show = () => {
        console.log(`${form.name} ${form.address.prefecture} ${form.address.city}`)
    }

    return (
        <form>
            <div>
                <label htmlFor='prefecture'>都道府県：</label>
                <input type='text' id='prefecture' name='prefecture'
                value={form.address.prefecture} onChange={handleFormNest} />
            </div>
            <div>
                <label htmlFor='city'>市区町村：</label>
                <input type='text' id='city' name='city'
                value={form.address.city} onChange={handleFormNest} />
            </div>
            <button type='button' onClick={show}>送信</button>
        </form>
    )
}