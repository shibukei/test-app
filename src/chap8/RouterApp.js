import { Link, Outlet } from 'react-router-dom';

export default function RouterApp() {
    return (
        <>
            <ul>
                {/* ルーティング対応のリンクを生成 */}
                <li><Link to="/">トップ</Link></li>
                <li><Link to="/article">公開設定</Link></li>
                <li><Link to="/about">このサイトについて</Link></li>
            </ul>
            <hr />
            {/* リンク先の表示領域を確保 */}
            <Outlet />
        </>
    );
}