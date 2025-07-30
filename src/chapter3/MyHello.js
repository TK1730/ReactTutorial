import React from "react"

function MyHello(props) {
    return (
        <div>こんにちは、{props.myName}さん!</div>
    )
}
// 引数をpropsとして受け取るのではなく、分割代入で受け取る方法もある
// デフォルト値を設定することもできる
function MyHelloRewritten({ myName = '権兵衛' }) {
    return (
        <div>こんにちは、{myName}さん!</div>
    )
}

// 名前付きエクスポート（推奨）
export { MyHello, MyHelloRewritten };
