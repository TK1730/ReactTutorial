import { Suspense } from "react"
import ThrowResult from "./ThrowResult"

export default function SuspenseResult() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ThrowResult />
        </Suspense>
    )
}