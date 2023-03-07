import { Album } from "../types/types";
import SearchedAlbum from "./SearchedAlbum";

interface IAlbumsSection {
    data?: Album[];
    text: string;
}

function AlbumsSection(props: IAlbumsSection) {
    const { data, text } = props;
    return (
        <div className="albums">
            <h2>{text}</h2>
            <div className="grid_square">
                {data?.map((item, index) => {
                    return <SearchedAlbum key={index} album={item} />;
                })}
            </div>
        </div>
    );
}

export default AlbumsSection;