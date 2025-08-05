import books from "../books.js"
import StylePanel from "./StyledPanel.js"
import TitledPanel from "./TitledPanel.js"
import TitledPanelKey from "./6/TitledPanel.js"
import ListTemplate from "./8/ListTemplate.js"
import ListTemplateRenderProp from "./12/ListTemplate.js"
import { MyHello, MyHelloRewritten } from "../MyHello.js"
import MyHelloProptypes from "./14/MyHello.js"
import StateBasic from "./28/StateBasic.js"
import StateParent from "./29/StateParent.js"


const title = <h3>メンバー募集中！</h3>
const body = <p>ようこそ、WINGSプロジェクトへ!!</p>

export default function sec3() {
    return (
        <>
            <h3>3-3-1 コンポーネント配下のコンテンツをテンプレートに反映させる</h3>
            <StylePanel>
                <p>メンバー募集中</p>
                <p>ようこそ、WINGSプロジェクトへ!</p>
            </StylePanel>
            <p>標準的なHTML文字列ではなく、Reactコンポーネントを指定する</p>
            <StylePanel>
                <MyHello myName="鈴木" />
            </StylePanel>
            <h3>3-3-2 複数のchildrenを引き渡す</h3>
            <TitledPanel
                title={<h3>メンバー募集中！</h3>}
                body={<p>ようこそ、WINGSプロジェクトへ!!</p>}></TitledPanel>
            <p>より複雑なコンテンツを渡したいなら、属性値を変数に切り出しても大丈夫</p>
            <TitledPanel
                title={title}
                body={body}
            ></TitledPanel>
            <p>childrenから目的の要素を取り出す</p>
            <TitledPanelKey>
                <h3 key="title">メンバー募集中！</h3>
                <p key="body">ようこそ、WINGSプロジェクトへ!!</p>
            </TitledPanelKey>

            <h3>3-3-4 childrenに対してパラメーターを引き渡す</h3>
            <p>childrenが関数となっており、コンポーネントに関数を渡すことで呼び出している</p>
            <ListTemplate src={books}>
                {elem => (
                    <>
                        <dt>
                            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                                {elem.title} ({elem.price}円)
                            </a>
                        </dt>
                        <dd>{elem.summary}</dd>
                    </>
                )}
            </ListTemplate>
            <p>render propを使うと、childrenを関数として渡すことができる</p>
            <ListTemplateRenderProp src={books} render={elem => (
                <>
                    <dt>
                        <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                            {elem.title} ({elem.price}円)
                        </a>
                    </dt>
                    <dd>{elem.summary}</dd>
                </>
            )} />

            <h3>3-3-4 プロパティ型の検証(PropTypes)</h3>
            <MyHelloProptypes />

            <h3>3-3-5 State値更新のための2つの構文</h3>
            <StateBasic init={0} />

            <h3>3-3-6 子コンポーネントから親コンポーネントへの情報伝達</h3>
            <StateParent />
        </>
    )
}