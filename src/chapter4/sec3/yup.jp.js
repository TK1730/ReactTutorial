import * as yup from 'yup'

// エラーメッセージ情報を宣言
const jpLocale = {
    mixed: {
        required: parame => '${parame.label}は必須です。',
        oneOf: parame => '${parame.label}は${parame.values}のいずれかでなければなりません。'
    },
    string: {
        length: parame => '${parame.label}は${parame.length}文字ちょうどでなければなりません。',
        min: parame => '${parame.label}は${parame.min}文字以上でなければなりません。',
        max: parame => '${parame.label}は${parame.max}文字以下でなければなりません。',
        matches: parame => '${parame.label}は「${parame.regex}」形式に一致していなければなりません。',
        email: parame => '${parame.label}はメールアドレス形式でなければなりません。',
        url: parame => '${parame.label}はURL形式でなければなりません。',
    },
    number: {
        min: parame => '${parame.label}は${parame.min}以上でなければなりません。',
        max: parame => '${parame.label}は${parame.max}以下でなければなりません。',
        lessThan: parame => '${parame.label}は${parame.less}未満でなければなりません。',
        moreThan: parame => '${parame.label}は${parame.more}より大きくなければなりません。',
        positive: parame => '${parame.label}は正の数でなければなりません。',
        negative: parame => '${parame.label}は負の数でなければなりません。',
        integer: parame => '${parame.label}は整数でなければなりません。',
    },
    date: {
        min: parame => '${parame.label}は${parame.min}以降の日付でなければなりません。',
        max: parame => '${parame.label}は${parame.max}以前の日付でなければなりません。',
    },
}

// メッセージ情報を設定
yup.setLocale(jpLocale)

export default yup