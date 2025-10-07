import LazyBasic from "./LazyBasic"
import LazyMulti from "./LazyMulti"
import ProfilerBasic from "./ProfilerBasic"
export default function Sec1() {
    return (
        <div>
            <h3>5-1 組み込みコンポーネント</h3>
            <p>Reactでは、特別な準備をすることなく利用できる組み込みコンポーネントを用意している。</p>
            <p>代表的なものとして、Suspense, Profilerがある。</p>

            <h4>5-1-1 コンポーネント描画待ちを検知する-Suspenseコンポーネント(1)</h4>
            <p>Suspenseコンポーネントは、子コンポーネントの描画が完了するのを待つための仕組みを提供する。
                代替コンテンツを描画する処理をフォールバックと言い、描画が完了するまで表示される。
                代替コンテンツは、一般的にローディングメッセージ、スピナー、あるいはスケルトンスクリーンのようなものになる。
            </p>
            <p>Suspense要素はコンポーネントを遅延ロードする、ネットワーク経由でデータを取得する状況で利用される。</p>
            <h3>コンポーネントを遅延ロードする</h3>
            <p>React.lazy関数を利用して、動的にインポートされたコンポーネントを遅延ロードできる。</p>
            <LazyBasic />
            
            <p>Suspenseコンポーネントに複数の遅延コンポーネントをラップしている場合、全てのコンポーネントが
                ロードされたところで、内容を表示します。
            </p>
            <LazyMulti />

            <h3>5-1-3 コンポーネントの描画時間を計測する-Profilerコンポーネント</h3>
            <p>プロファイラー(Profiler)とは、プログラムの実行時の各種情報を収集/解析するツールのこと。
                Profiler要素でも、アプリ全体、あるいは一部を括ることで、配下の要素が描画に要した時間を計測できるようになる。
            </p>
            <ProfilerBasic />
        </div>
    )
}