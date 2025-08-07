import Eventmouse from './EventMouse.js'
import EventCompare from './EventCompare.js'
import EventError from './EventError.js'
import EventObj from './EventObj.js'
import EventPoint from './EventPoint.js'
import EventKey from './EventKey.js'
import EventArgs from './EventArgs.js'
import EventArgs2 from './EventArgs2.js'

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
        </>
    )
}