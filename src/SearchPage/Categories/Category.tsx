interface ICategory {
    text: string;
}
function Category(props: ICategory) {
    const classes = `none-decoration search_nav_item`;
    return (
        <a href="#" className={classes}>
            {props.text}
        </a>
    );
}

export default Category;