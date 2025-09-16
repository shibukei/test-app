import { useParams } from "react-router-dom";

export default function BookPage() {
    const { isbn } = useParams();
    return (
        <div>
            <h1>BookPage</h1>
            <p>ISBNコード: 「{isbn}」のページです</p>
        </div>
    );
}