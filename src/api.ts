import {
    Artist,
    fetchedData,
    fetchedSearchData,
    Tag,
} from "./types/types";

const apiKey = 'c2ceda00f47600e2ef97b81e48611d8f';

async function getData(
    method: string,
    artist: string = "",
    track: string = "",
    limit = 12,
) {
    const response = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${apiKey}&artist=${artist}&track=${track}&autocorrect[1]&format=json&limit=${limit}`
    );
    const data = await response.json();
    return data;
}

/**
 * Функция для сбора всей инофрмации
 */
export async function getAllHotData() {
    const data: fetchedData = {
        hotArtists: [],
        hotTracks: [],
    };

    await Promise.all([
        getData("chart.gettopartists"),
        getData("chart.gettoptracks"),
    ]).then(([data1, data2]) => {
        data1.artists.artist.map((item: any) => {
            data.hotArtists.push({
                name: item.name,
                url: item.url,
                listeners: item.listeners,
                images: item.image,
            });
        });

        data2.tracks.track.map((item: any) => {
            data.hotTracks.push({
                name: item.name,
                url: item.url,
                artist: { name: item.artist.name, url: item.artist.url },
                images: item.image,
            });
        });
    });
    const promiseArtists = data.hotArtists.map((artist: Artist) =>
        getData("artist.gettoptags", artist.name)
    );

    const promiseTracks = data.hotTracks.map((track) =>
        getData("track.gettoptags", track.artist.name, track.name)
    );
    let tempStorageArtistTags: { toptags: { tag: Tag[] } }[] = [];
    let tempStorageTrackTags: { toptags: { tag: Tag[] } }[] = [];
    await Promise.all([...promiseArtists, ...promiseTracks]).then(
        (data1 = []) => {
            tempStorageArtistTags = data1.slice(0, promiseArtists.length);

            tempStorageTrackTags = data1.slice(
                promiseArtists.length,
                promiseArtists.length + promiseTracks.length
            );
        }
    );
    for (let i = 0; i < data.hotArtists.length; i++) {
        data.hotArtists[i].tags = tempStorageArtistTags[i].toptags.tag.slice(
            0,
            3
        );
    }

    for (let i = 0; i < data.hotTracks.length; i++) {
        try {
            data.hotTracks[i].tags = tempStorageTrackTags[i].toptags.tag.slice(
                0,
                3
            );
        } catch {
            data.hotTracks[i].tags = [];
        }
    }

    return data;
}

/**
 * Извлечение всей необходимой информации по поиску
 */
export async function getAllSearchData(searchText: string) {
    const data: fetchedSearchData = {
        searchArtists: [],
        searchAlbums: [],
        searchTracks: [],
    };

    await Promise.all([
        getSearchData("artist.search", "artist", searchText, 10),
        getSearchData("album.search", "album", searchText, 10),
        getSearchData("track.search", "track", searchText, 8),
    ]).then(([data1, data2, data3]) => {
        data1.results.artistmatches.artist.map((item: any) => {
            data.searchArtists.push({
                name: item.name,
                url: item.url,
                listeners: item.listeners,
                images: item.image,
            });
        });
        data2.results.albummatches.album.map((item: any) => {
            data.searchAlbums.push({
                name: item.name,
                url: item.url,
                artist: {
                    name: item.artist,
                    url: item.url.slice(0, item.url.lastIndexOf("/")),
                },
                images: item.image,
            });
        });
        data3.results.trackmatches.track.map((item: any) => {
            data.searchTracks.push({
                name: item.name,
                url: item.url,
                artist: {
                    name: item.artist,
                    url: item.url.slice(0, item.url.lastIndexOf("/") - 2),
                },
                images: item.image,
            });
        });
    });
    return data;
}
/**
 * Извлечение данных
 */
export async function getSearchData(
    method: string,
    category: string,
    searchText: string,
    amount = number,
) {
    const response = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=${method}&${category}=${searchText}&api_key=${apiKey}&limit=${amount}&format=json`
    );
    const data = await response.json().catch(() => {
        alert("Failed to parse data from server");
    });
    return data;
}