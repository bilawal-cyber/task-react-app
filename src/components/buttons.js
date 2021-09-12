import PropTypes from "prop-types"
const buttons = ({color ,text ,onClick}) => {
    return (
        <button style={{backgroundColor:color}} className="btn"
        onClick={onClick}
        >{text}</button>
    )
}

buttons.defaultProps={
    color : 'black'
}

buttons.propTypes={
    color: PropTypes.string,
    text : PropTypes.string,
    onClick : PropTypes.func.isRequired
}

export default buttons
