export default function StateCounter({ step, onUpdate }) {
    // ボタンクリックで親State (count) にstep値だけ加算
    const handleClick = () => onUpdate(step);
    return (
        <button className="" onClick={handleClick}>
            <span>{step}</span>
        </button>
    )
}