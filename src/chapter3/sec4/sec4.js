import Eventmouse from './EventMouse.js'
import EventCompare from './EventCompare.js'
import EventError from './EventError.js'
import EventObj from './EventObj.js'
import EventPoint from './EventPoint.js'
import EventKey from './EventKey.js'
import EventArgs from './EventArgs.js'
import EventArgs2 from './EventArgs2.js'
import { EventPropagation, EventPropagationBubCapture, EventPropagationControl, EventPropagationCancel} from './EventPropagation.js'
import EventOnece from './EventOnece.js'
import EventPassive from './EventPassive.js'

export default function sec4() {
    return (
        <>
            <h3>3-4-1 Reactで利用できるイベント</h3>
            <p>マウスの出入りに応じて画像を入れ替える</p>
            <Eventmouse
                alt="ロゴ画像"
                beforeScr="https://www.web-deli.com/image/linkbanner_l.gif"
                afterScr="https://www.web-deli.com/image/home_chara.gif" />

            <p>mousesenter/mouseleaveとmouseover/mouseoutの相違点</p>
            <EventCompare />
            <p>画像が読み込めない場合にダミー画像を表示する</p>
            <EventError src="../../../image/download.png" alt="サンプル画像" />

            <h3>3-4-2 イベントオブジェクト</h3>
            <p>
                イベントオブジェクトとは、イベントに関わる情報を管理するためのオプジェクトです。
                アクセスしたり、ハンドラーの挙動を操作できるJavaScriptによって自動生成され、イベントオブジェクトを利用することで、イベントに関する情報に
                アクセスしたり、ハンドラーの挙動を操作できる
            </p>
            <EventObj />

            <h4>イベント発生時のマウス情報を取得したい</h4>
            <p>
                イベントオブジェクトはイベントの発生時の情報を取得するために複数のxxxX, xxxYプロパティを持っています。
                このプロパティはどこを基準とした座標を返すかが異なります。
            </p>
            <EventPoint />

            <h4>キーイベントでのキーを識別する</h4>
            <p>
                keyupやkeydown,keypressなどのキーイベントは、押されたキーの種類によって処理を分岐したり、
                特定のキーだけを受け付ける、といったことがよくある。そのような場合には、keyプロパティでもって
                トリガーとなったキーを識別することができます。<br />
                以下は、テキストボックスでCtrlキーとqキーが押されたときに、ヘルプメッセージを表示する例です。
            </p>
            <EventKey />

            <h4>イベントハンドラーに任意の引数を渡す</h4>
            <EventArgs />

            <h4>補足：独自データ属性を利用する</h4>
            <EventArgs2 />

            <h4>3-4-3 イベントの伝搬を抑制する</h4>
            <EventPropagation />
            <h5>処理の順序を変更する</h5>
            <p>(バブリングフェーズではなく)キャプチャフェーズでイベントを処理することもできる。</p>
            <p>イベントハンドラーをonXxxx属性ではなくonXxxxCapture属性で設定することができます。</p>
            <EventPropagationBubCapture />

            <h5>伝搬を抑制する</h5>
            <EventPropagationControl />

            <h5>イベント既定の動作をキャンセルする</h5>
            <p>イベント既定の動作とは、イベントに伴ってウェブ上で発生する動作のこと。<br />
                例えば、リンクをクリックしたときにそのリンク先に移動することや、テキストボックスでキーを入力したら対応する文字が反映されるなどの動作のこと。<br />
                これらの動作は、イベントハンドラー内で`e.preventDefault()`を呼び出すことでキャンセルすることができます。
            </p>
            <p>キャンセルできないイベントもある。イベントがキャンセルできるか否かは、同じくイベントオブジェクトのcancelableプロパティから確認できる。</p>
            <EventPropagationCancel />

            <h4>3-4-4 イベントハンドラーのオプションを設定する</h4>
            <p>Reactではonceオプション、passiveオプションには標準で対応していないので、若干ながら独自のコードを追加する必要がある。</p>

            <h5>イベントハンドラーを初回のみ実行する</h5>
            <p>onceオプションは、イベントハンドラーを初回のみ実行するためのオプションです。これを利用することで、特定のイベントに対して一度だけ処理を行いたい場合に便利です。</p>
            <p>以下は、今日の運勢を表示するサンプル。結果は、初回クリック時に一度だけ表示され、2回以降のクリックでは変動しない。</p>
            <EventOnece />

            <h5>非Passiveモードでイベントハンドラーを設置する</h5>
            <p>passiveモードはハンドラーがあらかじめpreventDefault()を呼び出さないことを示すオプションです。これにより、ブラウザはスクロールなどのデフォルト動作を最適化できるようになります。</p>
            <p>Reactにおける一部のイベントではPassiveモードが規定になっている。これはハンドラーは以下でpreventDefalutメソッドを呼び出すケースが相応に限定されていることからも妥当だが、思わぬ不具合の原因となることもある。</p>

            <p>以下はwheelイベントでpreventDefaultメソッドを呼び出しただけの簡単かコードだが、エラーとなる。</p>
            <EventPassive />
        </>
    )
}