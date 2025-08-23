import { useRef, useEffect } from 'react'
import './EventPassive.css'

export default function EventPassive() {
   const handleWheel = e => e.preventDefault()
   // <div>要素への参照を取得
   const divRef = useRef(null)
   useEffect(() => {
    // コンポーネント起動時にリスナーを設定
    const div = divRef.current
    div.addEventListener('wheel', handleWheel, { passive: false })
    return (() => {
        // コンポーネントは破棄時にリスナーを解除
        div.removeEventListener('wheel', handleWheel)
    })
   })
   
   return (
    <div ref={divRef} className="box">
        たとえばWheelイベントをハンドラーで…
    </div>
   )
}