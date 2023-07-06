import './Card.css';

//using 'Card' basically to recycle styles in common (ExpenseRender's & ExpenseItem's)
function Card(props) {
    const classes = 'card ' + props.className; //merging base css (Card) to its childrens
    
    return (
        <div className={classes}>
            {/* 'props.children' is inherent of props, used as a 'Wrapper' component */}
            {props.children} 
        </div>

    );
}

export default Card;