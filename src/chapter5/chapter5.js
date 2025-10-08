import Sec1 from "./sec1/sec1";
import Sec2 from "./sec2/sec2";

export default function Chapter5() {
    return (
        <div>
            <h2>Chapter 5 コンポーネント開発(応用)</h2>
            <p>この章では、組み込みコンポーネント(Suspense, Profiler), スタイルシートの組み込み, ポータル, エラー処理について学びます。</p>
            <Sec1 />
            <Sec2 />
        </div>
    )
}