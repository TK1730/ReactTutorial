import Eventmouse from './EventMouse.js'
import EventCompare from './EventCompare.js'
import EventError from './EventError.js'
import EventObj from './EventObj.js'

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
            <p>イベントオブジェクトとは、イベントに関わる情報を管理するためのオプジェクトです。</p>
            <p>JavaScriptによって自動生成され、イベントオブジェクトを利用することで、イベントに関する情報に</p>
            <p>アクセスしたり、ハンドラーの挙動を操作できる</p>
            <p></p>
        </>
    )
}