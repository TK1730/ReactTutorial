import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import yup from './yup.jp.js'

// 汎用的な検証ルールを追加
yup.addMethod(yup.string, 'ng', function() {
    return this.test('ng',
        ({ label }) => `${label}にNGワードが含まれています。`,
        value => {
            // 不適切ワードを準備
            const ngs = ["暴力", "死", "グロ"]
            // 入力文字列に不適切ワードが含まれているかを判定
            for (const ng of ngs) {
                if (value.includes(ng)) {
                    return false
                }
            }
            return true
        }
    )
})

// 検証ルールを準備
const schema = yup.object({
    name: yup
        .string()
        .label('名前')
        .transform((value, originalValue) => value.normalize('NFKC'))
        .required('${label}は必須入力です。')
        .max(20),
    gender: yup
        .string()
        .label('性別')
        .required(),
    email: yup
        .string()
        .label('メールアドレス')
        .required('${label}は必須入力です。')
        .email(),
    memo: yup
        .string()
        .label('備考')
        .required()
        .min(10)
        .ng(),
    
})

export default function FormYup() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "無名",
            email: "example@example.com",
            gender: "男性",
            memo: "特になし"
        },
        // Yupに検証を委ねる
        resolver: yupResolver(schema)
    })

    // サブミット時の処理
    const onsubmit = (data) => console.log(data)
    const onerror = (error) => console.log(error)

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <label htmlFor="name">名前</label>
                <input id="name" type="text" {...register("name")} />
                <div>{errors.name && <p>{errors.name.message}</p>}</div>
            </div>
            <div>
                <label htmlFor="gender">性別</label>
                <input type="radio" value="male" {...register("gender")} />男性
                <input type="radio" value="female" {...register("gender")} />女性
                <div>{errors.gender && <p>{errors.gender.message}</p>}</div>
            </div>
            <div>
                <label htmlFor="email">メールアドレス</label><br />
                <input id="email" type="email" {...register("email")} />
                <div>{errors.email && <p>{errors.email.message}</p>}</div>
            </div>
            <div>
                <label htmlFor="memo">備考</label><br />
                <textarea id="memo" {...register("memo")}></textarea>
                <div>{errors.memo && <p>{errors.memo.message}</p>}</div>
            </div>
            <div>
                <button type="submit">送信</button>
            </div>
        </form>
    )

}