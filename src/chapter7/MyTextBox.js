import { forwardRef, useImperativeHandle, useRef } from "react";

const MyTextBox = forwardRef(({ label }, ref) => {
    // テキストボックスへの参照を準備
    const input = useRef(null);

    // 親コンポーネントに対して公開するオブジェクトを生成
    useImperativeHandle(ref, () => {
        return {
            focus() {
                input.current.focus();
            },
        };
    }, []);

    return (
        <label>
            {label}:
            <input type="text" size="15" ref={input} />
        </label>
    );
});

export default MyTextBox;