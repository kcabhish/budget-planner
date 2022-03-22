import './Cards.scss';
const Cards = (props) => {
    return (
        <div className={`cards ${props.className}`}>
            {props.children}
        </div>
    )
}
export default Cards;