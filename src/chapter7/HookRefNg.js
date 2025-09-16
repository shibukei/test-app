import { useState } from "react";

export default function HookRefNg() {
    // タイマーのオンオフを管理するための変数
    let id = null;
    const [count, setCount] = useState(0);

    // [開始] ボタンでタイマーを生成
    const handleStart = () => {
        // タイマー稼働中の場合は何もしない（二度押し対策）
        if (id === null) {
            id = setInterval(() => {
                setCount(c => c + 1);
            }, 1000);
        }
    };

    // [終了] ボタンでタイマーを破棄
    const handleEnd = () => {
        clearInterval(id);
        id = null;
    };

    return (
        <>
            <button onClick={handleStart}>開始</button>
            <button onClick={handleEnd}>終了</button>
            <p>{count}秒経過</p>
        </>
    )
}
