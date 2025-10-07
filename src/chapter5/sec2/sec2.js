<<<<<<< HEAD
export default function Sec2() {
    return (
        <div>
            <h3>5-2 コンポーネント開発でのスタイル定義</h3>
            <p>コンポーネント開発におけるスタイル定義については、style/className属性で指定する例を見てきた。</p>
            <p>しかし、それぞれの方法にも問題があります。まず、style属性(インライン属性)はJavaScriptのコードにスタイル定義が混在している
                ため、保守の観点から望ましくない。
            </p>
            <p>一方、className属性によってスタイル定義を切り離すことは可能ですが、CSSのクラス名がグローバルに作用するため、
                あるコンポーネントのスタイルが、他のコンポーネントに影響を与える可能性がある。
            </p>
            <p>一般的には、このような状態は望ましくなく、コンポーネントで閉じたスタイル定義が求められる。Reactでは、いわゆるローカルスタイルを
                定義するための様々なアプローチを提供しているので、本節でも代表的なものを見ていく。
            </p>
            <p>Styled JSX, Styled Components, Emotionが代表的なローカルスタイルの手法です。</p>
            
            <h4>5-2-1 JSX式にスタイルシートを埋め込む-Styled JSX</h4>
            
        </div>
=======
import StyledComp from "./StyledComp";
import { MyButton, MyStyledButton } from "./StyledComp2";
import StyledCommon from "./StyledCommon";
import StyledGlobal from "./StyledGlobal";
import StyledProps from "./StyledProps";

export default function Sec2() {
    return (
        <>
            <h3>5-2-2 標準タグを拡張してスタイル付きタグを定義する -Styled Components</h3>
            <p>Styled ComponentsはCSS-in-JSに分類されるライブラリ。使い勝手はStyled JSXとは異なる。<br />
                特定の要素に対してスタイルを適用するのでなく、既存の要素にスタイル付けしたコンポーネントを作成する。</p>
            <h4>Styled Componentsの基本</h4>
            <StyledComp />
            <h4>既存のコンポーネントにスタイル付けする</h4>
            <p>Styled Componentsでは、標準的なHTMLのタグだけでなく、既存のコンポーネントに対してもスタイル付けを行える。</p>
            <MyButton>ボタン</MyButton>
            <MyStyledButton>ボタン</MyStyledButton>

            <h4>スタイル定義を外部化する</h4>
            <p>複数のコンポーネントでスタイル定義を再利用したいならば、css関数で定義(群)を切り出すことも可能</p>
            <StyledCommon />

            <h4>グローバルなスタイルを定義する</h4>
            <p>Styled Componentsではローカルなスタイルを定義するのが基本。ただし、例外的にグローバルなスタイルを定義することも可能</p>
            <StyledGlobal />

            <h4>Props経由で動的なスタイルを設定する</h4>
            <p>styled.~の実態はコンポーネント。よって、これまで触れてきたコンポーネントと同じく、
                Propsを引き渡し、内容を動的に書き換えることもできる。
            </p>
            <StyledProps theme={{
                radius: false,
                color: 'dark'
            }} />
        </>
>>>>>>> 23fae417fc40c33a5d9b924c9e83bef288213c16
    )
}