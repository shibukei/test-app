import { useRef } from "react";

export default function FormFile() {
    // ファイル入力ボックスへの参照
    const file = useRef(null);

    // [送信] ボタンクリックでファイル情報をログ出力
    function show() {
        // 選択されたファイルのFileListオブジェクトを取得
        const fs = file.current.files;

        console.log(fs);
        // 取得したファイル群を順に走査
        for(const f of fs) {
            console.log(`ファイル名：${f.name}`);
            console.log(`種類：${f.type}`);
            console.log(`サイズ：${Math.trunc(f.size / 1024)}KB`);
        }
    }

    return (
        <form>
            <input type="file" ref={file} multiple />
            <button type="button" onClick={show}>
                送信
            </button>
        </form>
    );
}