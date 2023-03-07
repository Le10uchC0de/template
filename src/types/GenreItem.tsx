interface IGenreItem {
    text: string;
    url: string;
}

function GenreItem(props: IGenreItem) {
    const { text, url } = props;
    return (
        <li className="genre">
            <a href={url} className="genre none-decoration">
                {text}
            </a>
        </li>
    );
}

export default GenreItem;