import { Track } from "../types/types";
import SearchedTrack from "./SearchedTrack";

interface ITracksSection {
    data?: Track[];
    text: string;
}

function TracksSection(props: ITracksSection) {
    const { data, text } = props;
    return (
        <div className="tracks">
            <h2>{text}</h2>
            <div className="search_tracks">
                {data?.map((item, index) => {
                    return <SearchedTrack key={index} track={item} />;
                })}
            </div>
        </div>
    );
}

export default TracksSection;