import { useState } from 'react'

export default function EventMouse({ beforeScr, afterScr, alt }) {
    // 現在表示している画像
    const [current, setCurrent] = useState(beforeScr)
    // mouseover/mouseleaveイベントハンドラーを準備
    const handleEnter = () => setCurrent(afterScr)
    const handleLeave = () => setCurrent(beforeScr)
    return (
        <img src={current} alt={alt}
            onMouseEnter={handleEnter} onMouseLeave={handleLeave} />
    )
}

