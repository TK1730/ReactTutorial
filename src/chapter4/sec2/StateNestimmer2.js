import { useImmer } from "use-immer"

export default function StateNestimmer2() {
    // フォームとして扱う値をStateとして宣言
    const [form, setForm] = useImmer({
        name: '山田太郎',
        address: {
            prefecture: '広島県',
            city: '広島市'
        }
    })

    const handleNest = (e) => {
        // 要素を「.」で分解（要素名が「xxx.xxxxx」であることが前提）
        const ns = e.target.name.split('.')
        setForm(form => {
            // 階層に応じて、代入先を振替
            if (ns.length === 1) {
                form[ns[0]] = e.target.value
            } else {
                form[ns[0]][ns[1]] = e.target.value
            }
        }
        )
    }

    // [送信] ボタンクリックでフォーム情報をログ出力
    const show = () => {
        console.log(`${form.name} ${form.address.prefecture} ${form.address.city}`)
    }

    return (
        <form>
            <div>
                <label htmlFor="name">名前：</label>
                <input type="text" id="name" name="name"
                    value={form.name} onChange={handleNest} />
            </div>
            <div>
                <label htmlFor="prefecture">都道府県：</label>
                <input type="text" id="prefecture" name="address.prefecture"
                    value={form.address.prefecture} onChange={handleNest} />
            </div>
            <div>
                <label htmlFor="city">市区町村：</label>
                <input type="text" id="city" name="address.city"
                    value={form.address.city} onChange={handleNest} />
            </div>
            <div>
                <button type="button" onClick={show}>送信</button>
            </div>
        </form>
    )
}