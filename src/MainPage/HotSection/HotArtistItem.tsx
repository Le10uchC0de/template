import { Artist, Tag } from "../../types/types";
import GenreItem from "../../types/GenreItem";

interface IHotArtistItem {
    artist: Artist;
}

function HotArtistItem(props: IHotArtistItem) {
    const { artist } = props;
    return (
        <div className="artist_info">
            <a href={artist.url}>
                <img
                    className="artist_photo"
                    src={
                        artist.images![3]["#text"] ??
                        "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
                    }
                />
            </a>
            <a className="artist_name none-decoration" href={artist.url}>
                {artist.name}
            </a>
            <ul className="genres">
                {artist.tags!.map((item, index) => {
                    return <GenreItem key={index} text={item.name} url={item.url} />;
                })}
            </ul>
        </div>
    );
}

export default HotArtistItem;