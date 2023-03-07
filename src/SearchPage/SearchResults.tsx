import { fetchedSearchData } from "../types/types";
import AlbumsSection from "./AlbumSection";
import ArtistsSection from "./ArtistsSection";
import TracksSection from "./TracksSection";

interface ISearchResults {
    data?: fetchedSearchData;
}

function SearchResults(props: ISearchResults) {
    return (
        <div className="search_results">
            <ArtistsSection text="Artists" data={props.data?.searchArtists} />

            <AlbumsSection text="Albums" data={props.data?.searchAlbums} />

            <TracksSection text="Tracks" data={props.data?.searchTracks} />
        </div>
    )
}

export default SearchResults;