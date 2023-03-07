import { Artist } from "../types/types";
import SearchedArtist from "./SearchedArtist";

interface IArtistsSection {
    data?: Artist[];
    text: string;
}

function ArtistsSection(props: IArtistsSection) {
    const { data, text } = props;
    return (
        <div className="artists">
            <h2>{text}</h2>
            <div className="grid_square">
                {data?.map((item, index) => {
                    return <SearchedArtist key={index} artist={item} />;
                })}
            </div>
        </div>
    );
}

export default ArtistsSection;