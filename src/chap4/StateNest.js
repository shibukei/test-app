import { useImmer } from 'use-immer';

export default function StateNest() {
    // 入れ子の配列をStateとして宣言
    const [form, setFrom] = useImmer({
        name: '山田太郎',
        address: {
            prefecture: '広島県',
            city: '棒原町',
        }
    });

    const handleFormNest = (e) => {
        const ns = e.target.name.split(".");
        console.log(ns);
        
        if (ns.length === 1) {
            setFrom((form) => {
                form[ns[0]] = e.target.value;
            });
        } else {
            setFrom((form) => {
                form[ns[0]][ns[1]] = e.target.value;
            });
        }
    };

    // [送信] ボタンのクリックでフォーム情報をログに出力
    const show = () => {
        console.log(`${form.name} (${form.address.prefecture}・${form.address.city}) `);
    };

    return (
        <form>
            <div>
                <label htmlFor='name'>名前：</label>
                <input
                    id='name'
                    name='name'
                    type='text'
                    onChange={handleFormNest}
                    value={form.name}
                />
            </div>
            <div>
                <label htmlFor='prefecture'>住所（都道府県）：</label>
                <input
                    id='prefecture'
                    name='address.prefecture'
                    type='text'
                    onChange={handleFormNest}
                    value={form.address.prefecture}
                />
            </div>
            <div>
                <label htmlFor='city'>住所（市町村）：</label>
                <input
                    id='city'
                    name='address.city'
                    type='text'
                    onChange={handleFormNest}
                    value={form.address.city}
                />
            </div>
            <div>
                <button type='button' onClick={show}>
                    送信
                </button>
            </div>
        </form>
    )
}