import './EventPropagation.css'

function EventPropagation() {
    const handleParent = () => alert('#parent run...')
    const handleMy = () => alert('#my run...')
    const handleChild = () => alert('#child run...')

    return (
        <div id="parent" onClick={handleParent}>
            親要素
            <div id="my" onClick={handleMy}>
                現在要素
                <a id="child" href="https://wings.msn.to" onClick={handleChild}>
                    子要素
                </a>
            </div>
        </div>
    )
}

// キャプチャフェーズでイベントを処理する
function EventPropagationBubCapture() {
    const handleParent = () => alert('#parent run...')
    const handleMy = () => alert('#my run...')
    const handleChild = () => alert('#child run...')

    return (
        <div id="parent" onClickCapture={handleParent}>
            親要素
            <div id="my" onClickCapture={handleMy}>
                現在要素
                <a id="child" href="https://wings.msn.to" onClickCapture={handleChild}>
                    子要素
                </a>
            </div>
        </div>
    )
}

function EventPropagationControl() {
    const handleParent = () => alert('#parent run...')
    const handleMy = () => alert('#my run...')
    const handleChild = e => {
        e.stopPropagation()
        alert('#child run...')
    }

    return (
        <div id="parent" onClick={handleParent}>
            親要素
            <div id="my" onClick={handleMy}>
                現在要素
                <a id="child" href="https://wings.msn.to" onClick={handleChild}>
                    子要素
                </a>
            </div>
        </div>
    )
}

function EventPropagationCancel() {
    const handleParent = () => alert('#parent run...')
    const handleMy = () => alert('#my run...')
    const handleChild = e => {
        e.preventDefault()
        alert('#child run...')
    }

    return (
        <div id="parent" onClick={handleParent}>
            親要素
            <div id="my" onClick={handleMy}>
                現在要素
                <a id="child" href="https://wings.msn.to" onClick={handleChild}>
                    子要素
                </a>
            </div>
        </div>
    )
}

export { EventPropagation, EventPropagationBubCapture, EventPropagationControl, EventPropagationCancel }