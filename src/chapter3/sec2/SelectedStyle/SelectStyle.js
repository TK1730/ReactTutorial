import './SelectStyle.css'
import cn from 'classnames'

export default function SelectStyle({ mood }) {
    return (
        // mode属性に応じてスタイルクラスを切り替え
        <div className={cn(
            'box',
            [
                'panel',
                {
                    light: mood === 'light',
                    dark: mood === 'dark'
                }
            ]
        )}>
            こんにちは、世界!
        </div>
    )
}