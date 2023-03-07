import { Artist, Track } from "../../types/types";
import HotArtistItem from "./HotArtistItem";
import HotTrackItem from "../PopularTracks/HotTrackItem";

interface IHotRightNowSection {
    data?: Artist[];
}

function HotRightNowSection(props: IHotRightNowSection) {
    const { data } = props;
    return (
        <div>
            <div>
                <h2 className="music_section_underline">Hot right now</h2>
            </div>
            <div className="artists">
                <div className="artists_grid">
                    {data?.map((item, index) => {
                        return <HotArtistItem key={index} artist={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default HotRightNowSection;