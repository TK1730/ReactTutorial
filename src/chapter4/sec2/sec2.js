import React from "react";
import StateNest from "./StateNest";
import StateNestimmer from "./StateNestimmer";
import StateNestimmer2 from "./StateNestimmer2";
import StateTodo from "./StateTodo";

export default function Sec2() {
    return (
        <div>
            <h3>4-2-1 スプレッド構文の意味</h3>
            <p>「...」は、配列やオブジェクトの要素を展開するための構文である。更に、詳しく説明するとオブジェクトの複製を生成し、これを分解している。
                ただし、スプレッド構文は浅い分解であるため、入れ子のオブジェクトを分解することはできない。</p>
            <p>以下は、入れ子構造になったStateを更新する例である。</p>
            <StateNest />
            <p>入れ子のState値はコードが冗長し、可読性が低下するため多用しないことが賢明である。データベースの「テーブル正規化」と同じことを意識する必要がある。</p>

            <h3>4-2-2 Immerライブラリによる改善</h3>
            <p>State以外で利用しているデータ構造に合わせるためなど、何らかの理由でStateから階層を除けない場合がある。そのような場合には、Immerライブラリを利用することで、
                入れ子のオブジェクトをより直感的に更新できるようになる。
            </p>
            <StateNestimmer />

            <h4>ハンドラーを共通化する</h4>
            <p>階層単位でハンドラーを入れいていたが、共通化することでコードの重複を減らすことができる。name属性に階層に応じた名前にすることで、ハンドラー側で階層に応じた代入先を振り分けられる。</p>
            <StateNestimmer2 />

            <h3>4-2-3 配列の更新</h3>
            <p>配列型のStateについても、オブジェクト型と同じ理由で、直接更新することはできません。具体的には、配列操作に対して非破壊的なメソッドを選択する必要があります。</p>

            <h4>配列への追加-Todoの新規登録と配列の更新-Todoの済チェック</h4>
            <StateTodo />

        </div>
    )
}