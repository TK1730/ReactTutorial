import { Suspense, lazy } from "react"
import MyLoading from "./MyLoading"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// 複数のコンポーネントを遅延ロード
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')))
const LazyButton2 = lazy(() => sleep(3000).then(() => import('./LazyButton2')))

export default function LazyMulti() {
    return (
        <Suspense fallback={<MyLoading />}>
            <LazyButton />
            <LazyButton2 />
        </Suspense>
    )
}