export default function StyledPanel({ children }) {
    const title = children.find((item) => item.key === "title");
    const body = children.find((item) => item.key === "body");
    return (
        <div
            style={{
                margin: 50,
                padding: 20,
                border: '1px solid #a000',
                width: 'fit-content',
                boxShadow: '10px 5px 5px #999',
                backgroundColor: '#fff'
            }}
        >
            {title}
            {body}
        </div>
    );
}