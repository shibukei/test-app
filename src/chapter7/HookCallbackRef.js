import { useState } from "react";

export default function HookCallbackRef() {
    const [show, setShow] = useState(false);
    // ボタンクリックで表示する/非表示を反転
    const handleClick = () => setShow(!show);

    const callbackRef = elem => elem?.focus();

    return (
        <>
            <div>
                <label htmlFor="name">名前：</label>
                <input id="email" type="text" />
            </div>
            <div>
                <label htmlFor="email">メールアドレス：</label>
                <input id="email" type="text" />
                <button onClick={handleClick}>拡張表示</button>
            </div>
            {/* State (show) 値に応じて [住所] 欄を表示 */}
            {show &&
                <div>
                    <label htmlFor="address">住所：</label>
                    <input id="address" type="text" ref={callbackRef} />
                </div>
            }
        </>
    );
}