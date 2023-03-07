import { Artist } from "../types/types";

interface ISearchedArtist {
    artist: Artist;
}

function SearchedArtist(props: ISearchedArtist) {
    const { artist } = props;
    return (
        <div className="square">
            <img
                className="square_photo"
                src={
                    artist.images![3]["#text"] == ""
                        ? "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
                        : artist.images![3]["#text"]
                }
            />
            <div className="square_info">
                <a href={artist.url} className="info_text none-decoration">
                    {artist.name}
                </a>
                <p className="square_sec_info">
                    {artist.listeners} listeners
                </p>
            </div>
        </div>
    );
}

export default SearchedArtist;