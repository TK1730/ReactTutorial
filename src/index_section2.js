import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// setInterval(() => {
//   root.render(
//     // 1つの要素しかrenderできない. div, React.Fragment, <>を使って複数の要素をまとめる必要がある
//     <di>
//       <p>現在時刻：{(new Date()).toLocaleString()}</p>
//     </di>
//   )
// }, 1000)

// 2-3-3
// JSXではなく、ただの文字列リテラル
const content = `<h3>WINGSプロジェクト</h3>`
const dest = 'https://ja.react.dev/'
const attrs = {
  href: 'https://wings.msn.to/',
  download: false,
  target: ('_blank'),
  rel: 'help'
}
root.render(
  <>
    <p>{content} </p> {/*タグは文字列として扱われるため、HTMLタグは解釈されない */}
    {/* タグを解釈して表示する場合は、dangerouslySetInnerHTMLを使う
        以下の書き方は脆弱性を生む */}
    <p dangerouslySetInnerHTML={{ __html: content }}></p>

    {/* 実態参照の埋め込み */}
    <div>{'Tom &amp; Jerry'}</div>
    <div>{'Tom & Jerry'}</div>
    <div>{'Tom \u0026 Jerry'}</div>
    <div>{`Tom ${String.fromCodePoint(38)} Jerry`}</div>
    <div dangerouslySetInnerHTML={{ __html: 'Tom &amp; Jerry' }} />

    {/* ブール値、undefined、nullは無視される */}
    <ul>
      <li>{true}</li>
      <li>{false}</li>
      <li>{undefined}</li>
      <li>{null}</li>
      <li>{0}</li>
    </ul>
    {/* 非表示の方を表示する */}
    <ul>
      <li>{String(true)}</li>
      <li>{String(false)}</li>
      <li>{String(undefined)}</li>
      <li>{String(null)}</li>
      <li>{String(0)}</li>
    </ul>

    {/* 2-3-3 {・・・}構文で属性値を設定する */}
    <a href={dest}>React本家のサイト<br /></a>
    {/* 属性値をクォートで括らない 文字列として認識される */}
    <a href="{dest}">React本家のサイト<br /></a>
    <a href="{dest}/docs">React本家のサイト<br /></a>
    {/* destに文字列を追加したい場合 */}
    <a href={`${dest}/docs`}>React本家のサイト<br /></a>

    {/* 複数の属性をまとめて設定する */}
    <a {...attrs}>WINGSプロジェクト</a>
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
