import { Album } from "../types/types";

interface ISearchedAlbum {
    album: Album;
}

function SearchedAlbum(props: ISearchedAlbum) {
    const { album } = props;
    return (
        <div className="square">
            <img
                className="square_photo"
                src={
                    album.images![3]["#text"] == ""
                        ? "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
                        : album.images![3]["#text"]
                }
            />
            <div className="square_info">
                <a href={album.url} className="info_text none-decoration">
                    {album.name}
                </a>
                <p></p>
                <a
                    href={album.artist.url}
                    className="square_sec_info none-decoration"
                >
                    {album.artist.name}
                </a>
            </div>
        </div>
    );
}

export default SearchedAlbum;