import { Track } from "../../types/types";
import HotTrackItem from "./HotTrackItem";

interface IPopularTracksSection {
    data?: Track[];
}

function PopularTracksSection(props: IPopularTracksSection) {
    const { data } = props;
    return (
        <div>
            <h2 className="music_section_underline">Popular tracks</h2>
            <div className="popular_tracks_grid">
                {data?.map((item, index) => {
                    return <HotTrackItem key={index} track={item} />;
                })}
            </div>
        </div>
    );
}

export default PopularTracksSection;