import { useState, useRef } from "react";

export default function HookRef() {
    // タイマーのオンオフを管理するための変数
    let id = useRef(null);
    const [count, setCount] = useState(0);

    // [開始] ボタンでタイマーを生成
    const handleStart = () => {
        // タイマー稼働中の場合は何もしない（二度押し対策）
        if (id.current === null) {
            id.current = setInterval(() => {
                setCount(c => c + 1);
            }, 1000);
        }
    };

    // [終了] ボタンでタイマーを破棄
    const handleEnd = () => {
        clearInterval(id.current);
        id.current = null;
    };

    return (
        <>
            <button onClick={handleStart}>開始</button>
            <button onClick={handleEnd}>終了</button>
            <p>{count}秒経過</p>
        </>
    )
}