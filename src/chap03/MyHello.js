// PropTypesをインポート
import PropTypes from 'prop-types';

function MyHello(props) {
    return (
        <div>
            こんにちは、{props.name}さん! {props.numbers}
        </div>
    );
}

// 型情報を宣言
MyHello.propTypes = {
    name: PropTypes.string.isRequired,
    numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MyHello;