import FormBasic from './FormBasic.js'
import FormYup from './FormYup.js'

export default function Sec3() {
    return (
        <div>
            <h3>4-3-1 React Hook Formの基本</h3>
            <p>React Hook Formの使い方をみていきましょう</p>
            <FormBasic />
            <h3>4-2-4 検証ライブラリと連携する</h3>
            <p>React Hook Formは、ZodやYupなどのスキーマベースの検証ライブラリと連携することができます。
                これにより、複雑な検証ルールを簡潔に定義でき、コードの重複も減らせます。
            例えば、Yupライブラリを利用する場合は以下のようになります。</p>
            <FormYup />
        </div>
    )
}