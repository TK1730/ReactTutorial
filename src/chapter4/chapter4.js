import Sec1 from './sec1/sec1.js'
import Sec2 from './sec2/sec2.js'

export default function Chapter4() {
    return (
        <div>
            <h2>4-1 フォーム操作の基本</h2>
            <Sec1 />
            <h2>4-2 Stateにおける構造化データの更新</h2>
            <p>Stateの更新には、setState関数を使用して新しい状態を指定する必要がある。そうしないと、Reactが値を更新されたか認識できないためである。</p>
            <p>Stateに格納されたオブジェクトを更新する際には、新しいオブジェクトを作成したうえで、setXxx関数に渡すのがreactのお作法である。</p>
            <Sec2 />
        </div>
    )
}
