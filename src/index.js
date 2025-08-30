import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

import { MyHello, MyHelloRewritten } from './chapter3/MyHello'
import EventBasic from './chapter3/EventBasic'
import StateBasic from './chapter3/StateBasic'
import ForList from './chapter3/ForList'
import books from './chapter3/books'
import ForNest from './chapter3/ForNest'
import ForFilter from './chapter3/ForFilter'
import ForSort from './chapter3/ForSort'
import Chapter3 from './chapter3/chapter3'
import Chapter4 from './chapter4/chapter4'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <div>
            {/* 引数を文字列として渡す場合は""を使う */}
            <MyHello myName="太郎" />
            {/* 引数を数値として渡す場合は{}を使う */}
            <MyHello myName={123} />
            {/* {}構文を介して、配列、関数、オブジェクトのような型を渡せる */}
            <MyHello myName={['山田', '鈴木', '佐藤']} />
            <MyHelloRewritten />

            {/* イベントハンドラーの例 */}
            <EventBasic type="date" />
            <EventBasic type="time" />
            <EventBasic type="default" />

            {/* stateの基本例 */}
            <StateBasic init={0} />

            {/* 条件分岐と繰り返しの例 */}
            <ForList src={books} />
            {/* リスト項目を異なるコンポーネントに切り出す */}
            <ForNest src={books} />
            <p>--------</p>
            {/* フィルタリングの例 */}
            <ForFilter src={books} />
            <p>--------</p>
            {/* ソートの例 */}
            <ForSort src={books} />

            {/* チャプター３の描画 */}
            <Chapter3 />

            {/* チャプター4の描画 */}
            <Chapter4 />

        </div>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
