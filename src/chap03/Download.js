import dl_icon from '../imege/dl.png';

export default function Download({ src }) {
    if (!src || !src.isbn) return null; // srcやisbnがなければ何も表示しない
    return (
        <a href={`https://wings.msn.to/index.php/-/A-07/${src.isbn}`}>
            <img src={dl_icon} alt='Sample Download' width={20} height={20} />
        </a>
    );
}