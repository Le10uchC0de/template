import { Track } from "../../types/types";
import GenreItem from "../../types/GenreItem";

interface IHotTrackItem {
    track: Track;
}

function HotTrackItem(props: IHotTrackItem) {
    const { track } = props;
    return (
        <div className="ptrack">
            <a href={track.url}>
                <img
                    className="cover"
                    src={
                        track.images![3]["#text"] ??
                        "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
                    }
                />
            </a>
            <div className="track_info">
                <a href={track.url} className="track_title none-decoration">
                    {track.name}
                </a>
                <a href={track.artist.url} className="artist_track none-decoration margin_top10">
                    {track.artist.name}
                </a>
                <ul className="genres margin_top10">
                    {track.tags!.map((item, index) => {
                        return <GenreItem key={index} text={item.name} url={item.url} />;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default HotTrackItem;