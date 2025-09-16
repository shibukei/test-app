import { useState } from "react";
import "./StateTodo.css";

// Todo項目idの最大値（登録都度にインクリメント）
let maxId = 0;

export default function StateTodo() {
    // 入力値 (title) , Todoリスト (todo) をStateで管理
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useState([]);
    // 降順/昇順の状態管理
    const [desc, setDesc] = useState(true);

    // テキストボックスへの入力をStateに反映
    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    // 追加ボタンクリック時のハンドラー
    const handleClick = () => {
        // 新規のTodoを追加
        setTodo([
            ...todo, // 既存のtodoリストを展開
            {
                id: ++maxId,            // id値
                title,                  // Todo本体
                created: new Date(),    // 作成日時
                isDone: false,          // 実行済か？
            },
        ]);
    };

    // [済] ボタンでTodo項目を完了状態に
    const handleDone = e => {
        // todo配列を操作し、id値が等しいものを検索
        setTodo(
            todo.map(item => {
                // クリックされたボタンのdata-id属性と一致するアイテムを探す
                if (item.id === Number(e.target.dataset.id)) {
                    return {
                        ...item, // 既存のプロパティを展開
                        isDone: true, // isDoneだけを更新
                    };
                } else {
                    return item; // それ以外のアイテムはそのまま
                }
            })
        );
    };

    const handleRemove = e => {
        // todo配列を走査し、idが新しいものを検索
        setTodo(
            todo.filter(item => {
                // クリックされたボタンのdata-id属性と一致しないアイテムだけを抽出
                return item.id !== Number(e.target.dataset.id);
            })
        );
    };

    const handleSort = e => {
        // イミュータブルな配列のコピー作成
        const sorted = [...todo];

        // 作成日時でソート
        sorted.sort((m, n) => {
            // desc値に応じて昇順/降順を決定
            if (desc) {
                // 降順：新しい順 (n - m)
                return n.created.getTime() - m.created.getTime();
            } else {
                // 昇順：古い順 (m - n)
                return m.created.getTime() - n.created.getTime();
            }
        });

        // ソート方向を反転
        setDesc((d) => !d);

        // ソート済のリストを再セット
        setTodo(sorted);
    };

    return (
        <div>
            <label>
                やること：
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
            </label>
            <button type="button" onClick={handleClick}>
                追加
            </button>
            <button type="button" onClick={handleSort}>
                ソート ({desc ? '↑' : '↓'})
            </button>
            <hr />
            <ul>
                {todo.map(item => (
                    <li
                        key={item.id}
                        className={item.isDone ? 'done' : ''} // 完了状態でクラスを切り替え
                    >
                        {item.title}
                        <button
                            type="button"
                            onClick={handleDone}
                            data-id={item.id} // ボタンにTodoのIDを紐付け
                        >
                            済
                        </button>
                        <button
                            type="button"
                            onClick={handleRemove}
                            data-id={item.id} // ボタンにTodoのIDを紐付け
                        >
                            削除
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}