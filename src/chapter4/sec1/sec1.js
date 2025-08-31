import StateForm from "./StateForm"
import StateFormUC from "./StateFormUC"
import FormTextarea from "./FormTextarea"
import FormSelect from "./FormSelect"

export default function sec1() {
    return (
        <div>
            <h3>4-1-1 フォーム管理の基本</h3>
            <p>テキストボックスに入力された情報に応じて、挨拶メッセージを生成する</p>
            <StateForm />
            
            <h3>4-1-2 注意:changeイベントの発生タイミング</h3>
            <p>JavaScriptのchangeイベントは、フォームの要素が変更されてフォーカスを外した後に発生する。</p>
            <p>Reactのchangeイベントは、JavaScriptのinputイベントと紐づいているため、フォームの要素が変更されるたびに発生する。</p>
            <p>ReactにJavaScriptのchangeイベントは存在しないため、addEventListenerメソッドを呼び出す必要がある。</p>

            <h3>4-1-3 非制御コンポーネントによるフォーム管理</h3>
            <p>Stateで入力値を管理するコンポーネントに対して、入力値をStateで管理しないコンポーネントのことを非制御コンポーネントという。</p>
            <p>制御コンポーネントでは、入力値が変わるごとに再描画が発生、コードが冗長になりがち、などのデメリットがある。</p>
            <p>非制御コンポーネントでは、入力値の管理をDOMに任せるため、再描画が発生せず、アクセスが簡単などのメリットがある。</p>
            <p>メリット、デメリットがあるため、状況に応じて使い分ける必要がある。</p>
            <StateFormUC />

            <h3>4-1-4 入力要素に応じたフォームの実装例</h3>
            <h4>テキストエリア</h4>
            <p>textareaタグの要素はvalue属性で指定する。</p>
            <FormTextarea />

            <h4>選択ボックス</h4>
            <p>selectタグの要素はvalue属性で指定する。</p>
            <FormSelect />

            <h4>リストボックス</h4>
            <p>複数選択可能なリストボックスも</p>
        </div>
    )
}