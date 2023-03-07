import { Track } from "../types/types";

interface ISearchedTrack {
    track: Track;
}

function SearchedTrack(props: ISearchedTrack) {
    const { track } = props;
    return (
        <div className="track">
            <div className="track_play_btn"></div>
            <div className="track_image">
                <img
                    className="square_track"
                    src={
                        track.images![3]["#text"] == ""
                            ? "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
                            : track.images![3]["#text"]
                    }
                    alt=""
                />
            </div>
            <div className="track_like_btn"></div>
            <div className="track_name">
                <a
                    href={track.url}
                    className="none-decoration"
                >
                    <h2 >{track.name}</h2>
                </a>
            </div>
            <div className="artist">
                <a
                    href={track.artist.url}
                    className="none-decoration"
                >
                    {track.artist.name}
                </a>
            </div>
            <div className="duration"></div>
        </div>
    );
}

export default SearchedTrack;