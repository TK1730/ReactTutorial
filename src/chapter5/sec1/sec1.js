import LazyBasic from "./LazyBasic"
import LazyMulti from "./LazyMulti"
<<<<<<< HEAD
import ProfilerBasic from "./ProfilerBasic"
=======
import SuspenseResult from "./SuspenseResult"
import SuspenseSimple from "./SuspenseSimple"

>>>>>>> 23fae417fc40c33a5d9b924c9e83bef288213c16
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

<<<<<<< HEAD
            <h3>5-1-3 コンポーネントの描画時間を計測する-Profilerコンポーネント</h3>
            <p>プロファイラー(Profiler)とは、プログラムの実行時の各種情報を収集/解析するツールのこと。
                Profiler要素でも、アプリ全体、あるいは一部を括ることで、配下の要素が描画に要した時間を計測できるようになる。
            </p>
            <ProfilerBasic />
=======
            <h4>5-1-2 非同期処理の終了を待ち受ける-Suspense コンポーネント(2)</h4>
            <p>Suspense要素そのものは以前から利用できたが、React 18以降では、さらに利用範囲が広がっています。
                具体的には、コンポーネント以外のリソース（データ取得など）を待つことができるようになりました。</p>
            <p>ただし、コンポーネントの待ち受けに比べると記法が独特なので、ここでは簡単な例から徐々にコードを積み上げていきましょう。</p>
            <h5>Promiseによる非同期処理を受け取る</h5>
            <p>待ち受けるべき非同期処理(Promise)を受け取って、待ち受けメッセージを表示するだけの、簡単なサンプルからです。</p>
            <SuspenseSimple />

            <h5>Promiseの結果を表示する</h5>
            <p>Promiseの状態を検知することはできましたが、まだ不足です。一般的には、Promiseによって得られた結果をもとに、結果を生成したいはずです。
                ただし、Suspense要素はあくまでPromiseの変化に応じて描画を再試行するだけで、非同期処理の中身を見ているわけではない。
                非同期処理の結果を得るには、Promiseのラッパーを準備する必要がある。
            </p>
            <SuspenseResult />
>>>>>>> 23fae417fc40c33a5d9b924c9e83bef288213c16
        </div>
    )
}