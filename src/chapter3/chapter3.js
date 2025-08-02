import Section2 from "./sec2/sec2.js"
import Section3 from "./sec3/sec3.js"

export default function Chapter3() {
    return (
        <>
            <h1>Chapter3 コンポーネント開発</h1>
            <h2>Section2 条件分岐と繰り返し処理</h2>
            <Section2 />
            <h2>Section3 Props/Stateの理解を深める</h2>
            <Section3 />
        </>
    )
}