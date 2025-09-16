import { useState } from 'react';

export default function FormList() {
    // Stateを初期化
    const [form, setForm] = useState({
        animal: []
    });

    // リストボックスの変更時に入力値をStateに反映
    const handleFormList = e => {
        console.log("onChange実行");
        // 選択値を格納するための配列
        const data = [];

        // <option>要素を順に走査し、選択状態にある値を配列に追加
        const opts = e.target.options;
        console.log(opts);

        for (const opt of opts) {
            if (opt.selected) {
                data.push(opt.value);
            }
        }

        console.log(data);

        // 最終的な結果をStateに反映
        setForm({
            ...form,
            [e.target.name]: data
        });
    }

    // [送信] ボタンクリックで入力値をログ出力
    const show = () => {
        console.log(`好きな動物：${form.animal}`);
    };

    return (
        <form>
            <label htmlFor='animal'>好きな動物：</label><br />
            <select
                id='animal'
                name='animal'
                value={form.animal}
                size="4" multiple={true}
                onChange={handleFormList}
            >
                <option value="dog">イヌ</option>
                <option value="cat">ネコ</option>
                <option value="hamster">ハムスター</option>
                <option value="rabbit">ウサギ</option>
            </select>
            <button type="button" onClick={show}>
                送信
            </button>
        </form>
    )
}