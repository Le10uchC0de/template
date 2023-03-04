const results = document.querySelector(".search_results");
const searchInput = document.querySelector(".search_input");
const grids = document.querySelectorAll(".grid_square");
const artistGrid = grids[0];
const albumsGrid = grids[1];
const tracksGrid = document.querySelector(".search_tracks");
const searchBtn = document.querySelector(".form_search_btn");
const resultHeader = document.querySelector("#search");
const clearBtn = document.querySelector(".clear_btn");
const categories = document.querySelector(".search_nav_list");
const artists = document.querySelector("#artists");
const albums = document.querySelector("#albums");
const tracks = document.querySelector("#tracks");

const apiKey = 'c2ceda00f47600e2ef97b81e48611d8f';
const startHttp = 'http://ws.audioscrobbler.com/2.0/'

start();

/**
 * входная функция
 */
async function start(category = "Top Results"){
    const searchText = (new URLSearchParams(location.search)).get("searchText") ?? "";
    if (searchText == ""){
        results.classList.add("hidden");
        categories.classList.add("none_display");
        return false;
    }
    resultHeader.textContent = `Search result for "${searchText}"`;
    searchInput.value = searchText;
    const data = await getAllData(searchText);
    showResult(category);
    fillArtistsResult(data.artists.results.artistmatches.artist);
    fillAlbumResult(data.albums.results.albummatches.album);
    fillTracksResult(data.tracks.results.trackmatches.track);
}

/**
 * Отображение результата в зависимости от категории
 */
function showResult(category){
    switch(category){
        case "Top Results":
            artists.classList.remove('none_display');
            albums.classList.remove('none_display');
            tracks.classList.remove('none_display');
            break;
        case "Artists":
            artists.classList.remove('none_display');
            albums.classList.add('none_display');
            tracks.classList.add('none_display');
            break;
        case "Albums":
            artists.classList.add('none_display');
            albums.classList.remove('none_display');
            tracks.classList.add('none_display');
            break;
        case "Tracks":
            artists.classList.add('none_display');
            albums.classList.add('none_display');
            tracks.classList.remove('none_display');
            break;
    }
}

/** 
 * получение данных
 * @param {*} method 
 * @param {*} category 
 * @param {*} searchText 
 * @param {*} limit 
 * @returns 
 */
async function getData(method, category, searchText, limit = "10"){ 
    const data = await fetch(`${startHttp}?method=${method}&${category}=${searchText}&api_key=${apiKey}&limit=${limit}&format=json`);

    if(data.ok == false){
        throw new Error('Error: ' +  data.status);
    }

    return data.json();
}

/** 
 * отслеживание нажатия enter при поиске
 */
searchInput.addEventListener("keydown", (key) => {
    if(key.code === "Enter"){
        const searchText = searchInput.value;
        window.location.href = `search.html?searchText=${searchText}`;
    }
});

/** 
 * отслеживание нажатия на кнопку поиска
 */
searchBtn.addEventListener("click", () => {
    const searchText = searchInput.value;
        window.location.href = `search.html?searchText=${searchText}`;
})

/**
 * отслеживание нажатия на кнопку очистики текста в строке поиска
 */
clearBtn.addEventListener("click", () => {
    searchInput.value = "";
})

/** 
 * отслеживание нажатия на категории
 */
categories.addEventListener("click", (event) => {
    if(event.target.nodeName == "A"){
        showResult(event.target.textContent);
    }
})

/** 
 * функция получения всех нужных данных
 */
async function getAllData(searchText){
    const data = {
        artists: undefined,
        albums: undefined,
        tracks: undefined
    }
    await Promise.all([
        getData("artist.search", "artist", searchText, 10), 
        getData("album.search", "album", searchText, 10), 
        getData("track.search", "track", searchText, 10)
    ]).then(
        ([data1, data2, data3]) => {
            data.artists = data1;
            data.albums = data2;
            data.tracks = data3;
        }
    )

    return data;
}

/**  
 * заполнение информации о найденных артистах
 * @param {*} artists 
 */
function fillArtistsResult(artists){
    for(let i = 0; i < artists.length; i++){
        showArtistResult(artists[i]);
    }
}

/**
 * отображение артиста 
 */
function showArtistResult(artist){
        createArtistCard(
            artist.name,
            artist.image[2]["#text"],
            artist.url,
            artist.listeners,
        );
}

/**
 * заполнение информации о найденных альбомах
 */
function fillAlbumResult(album){
    for(let i = 0; i < album.length; i++){
        showAlbumResult(album[i]);
    }
}

/**
 * отображение альбома
 */
function showAlbumResult(album){
    createAlbumCard(
        album.name,
        album.image[2]["#text"],
        album.url,
        album.artist,
        album.url.slice(0, album.url.lastIndexOf("/"))
    )
}

/**
 * заполнение информации о найденных треках
 */
function fillTracksResult(tracks){
    for(let i = 0; i < tracks.length; i++){
        showTracksResult(tracks[i]);
    }
}

/**
 * отображение трека
 */
function showTracksResult(track){
    createTrackCard(
        track.name,
        track.url,
        track.image[1]["#text"],
        track.artist,
        track.url.slice(0,track.url.lastIndexOf("/")-2)
    )
}