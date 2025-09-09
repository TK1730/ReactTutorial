import Sec1 from './sec1/sec1.js'
import Sec2 from './sec2/sec2.js'
import Sec3 from './sec3/sec3.js'

export default function Chapter4() {
    return (
        <div>
            <h2>4-1 フォーム操作の基本</h2>
            <Sec1 />
            <h2>4-2 Stateにおける構造化データの更新</h2>
            <p>Stateの更新には、setState関数を使用して新しい状態を指定する必要がある。そうしないと、Reactが値を更新されたか認識できないためである。</p>
            <p>Stateに格納されたオブジェクトを更新する際には、新しいオブジェクトを作成したうえで、setXxx関数に渡すのがreactのお作法である。</p>
            <Sec2 />
            <h2>4-3 検証機能の実装-React Hook Form</h2>
            <p>入力フォームと言えば、入力値の検証が必要不可欠です。不正な値を事前に弾くことでセキュリティ対策にもなる。
                検証コードは煩雑になりがちで、コードの重複も多くなりがちである。そこで、React Hook Formライブラリを利用することで、簡潔に実装できる。
            </p>
            <Sec3 />
        </div>
    )
}
