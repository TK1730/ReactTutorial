import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../logo.svg'

const root = ReactDOM.createRoot(document.getElementById('root'));

// JSXのルール

/* 1つの要素しかrenderできない */
root.render(
    <div>
        <p>こんにちは、世界</p>
        <p>はじめまして、React!</p>
    </div>
)
root.render(
    <React.Fragment>
        <p>こんにちは、世界</p>
        <p>はじめまして、React!</p>
    </React.Fragment>
)
root.render(
    <>
        <p>こんにちは、世界</p>
        <p>はじめまして、React!</p>
    </>
)

/* 空要素は「~/>」で表現する */
const tag = <img src={logo} />

/* コメント構文　*/
const comment = (
    // コメント　(JSXの中ではJavaScriptのコメント)
    <ul>
        {/* 子要素のコメント */}
        子要素で//と/* */は使えない

        <li // タグ内でのコメント
        >React</li>
        <li /* これでもOK */ >Vue
        </li>
    </ul>
)

/* JSXにJavaScriptの式を埋め込む */
const name = '鈴木';
root.render(
    <>
        <p>こんにちは、{name}です。</p>
        <p>文字列はクォートで表す</p>
        {' これは文字列です。'}
    </>
)
