const popularArtists = document.querySelector('.artists_grid')
const popularTracks = document.querySelector('.popular_tracks_grid')

const apiKey = 'c2ceda00f47600e2ef97b81e48611d8f';
const startHttp = 'http://ws.audioscrobbler.com/2.0/'

start();

/**
 * Входная функция для загрузки всех данных и отображения их
 */
async function start(){
    const data = await getTopData();
    fillHotArtists(data.hotArtists, data.artistTopTags);
    fillHotTracks(data.hotTracks, data.trackTopTags);
}

async function getData(method, artist, track, limit = "12"){ 
    const data = await fetch(`${startHttp}?method=${method}&api_key=${apiKey}&artist=${artist}&track=${track}&autocorrect[1]&format=json&limit=${limit}`);

    if(data.ok == false){
        throw new Error('Error: ' +  data.status);
    }

    return data.json();
}

/**
 * Получение всех данных
 */
async function getTopData(){
    const data = {
        hotArtists: undefined,
        hotTracks: undefined,
        artistTopTags: undefined,
        trackTopTags: undefined
    }

    await Promise.all([getData("chart.getTopArtists"), getData("chart.getTopTracks", undefined, undefined, 9)]).then(
        ([data1, data2]) => {
            data.hotArtists = data1;
            data.hotTracks = data2;
        }
    )

    promiseArtists = data.hotArtists.artists.artist.map((artist) => getData("artist.gettoptags", artist.name, undefined, 3));
    promiseTracks = data.hotTracks.tracks.track.map((track) => getData("track.gettoptags", track.artist.name, track.name, 3));

    await Promise.all([...promiseArtists, ...promiseTracks]).then(
        (data1 = []) => {
            data.artistTopTags = data1.slice(0, promiseArtists.length);
            data.trackTopTags = data1.slice(promiseTracks.length, promiseArtists.length + promiseTracks.length);
        }
    )

    return data;
}

/**
 * Заполнение информации о топе артистов
 */
function fillHotArtists(hotArtists, tags){
    for(let i = 0; i< hotArtists.artists.artist.length; i++){
        showArtistInfo(hotArtists.artists.artist[i], tags[i])
    }
}

/**
 * Заполнение информации о топе треков
 */
function fillHotTracks(hotTracks, tags){
    for(let i = 0; i< hotTracks.tracks.track.length; i++){
        showTrackInfo(hotTracks.tracks.track[i], tags[i])
    }
}

/** 
 * отображение артиста
 */
function showArtistInfo(artist, tags){
    try{
    fillArtistCard(
        artist.name,
        artist.url,
        artist?.image[3]["#text"] ?? "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
        tags.toptags.tag.slice(0, 3)
    )}
    catch(e){}
}

/**
 * отображение трека
 */
function showTrackInfo(track, tags){
    try{
    fillTrackCard(
        track.name,
        track.url,
        track.artist.name,
        track.artist.url,
        track?.image[2]["#text"] ?? "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
        tags.toptags.tag.slice(0, 3)
    )}
    catch(e){}
}