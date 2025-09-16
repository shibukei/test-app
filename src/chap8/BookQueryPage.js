import { useSearchParams } from "react-router-dom";

export default function BookQueryPage() {
    const [searchParams] = useSearchParams();
    const isbn = searchParams.get("isbn");

    return (
        <div>
            <h1>BookQueryPage</h1>
            <p>ISBNコード: 「{isbn}」のページです</p>
        </div>
    );
}