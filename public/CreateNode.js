/**
 * добавление карточки артиста в список популярных артистов
 */
function fillArtistCard(name, nameUrl, imgUrl, genres){
    let card = document.createElement("div");
    card.classList.add("artist_info")

    let imgLink = document.createElement("a");
    imgLink.href = nameUrl;

    let img = document.createElement("img");
    img.src = imgUrl;
    img.className = "artist_photo"

    imgLink.appendChild(img);

    card.appendChild(imgLink);

    let nameLink = document.createElement("a");
    nameLink.href = nameUrl;
    nameLink.textContent = name;
    nameLink.className = "artist_name";
    nameLink.classList.add("none-decoration")

    card.appendChild(nameLink);

    let genreList = document.createElement("ul");
    genreList.className = "genres";

    genres.forEach(element => {
        let listLink = document.createElement("a");
        listLink.href = element.url;
        let listItem = document.createElement("li");
        listLink.classList.add("genre");
        listLink.classList.add("none-decoration");

        listItem.className = "genre";
        listItem.textContent = element.name + " ";

        listLink.appendChild(listItem)
        genreList.appendChild(listLink)
    });

    card.appendChild(genreList);

    popularArtists.append(card);
}

/**
 * добавление карточки трека в список популярных треков
 */
function fillTrackCard(name, trackUrl, artistName, artistUrl, imgUrl, genres){
    let card = document.createElement("div");
    card.classList.add("ptrack");

    let imgLink = document.createElement("a");
    imgLink.href = trackUrl;

    let img = document.createElement("img");
    img.src = imgUrl;
    img.className = "cover";

    imgLink.appendChild(img);

    card.appendChild(imgLink);

    let trackInfo = document.createElement("div");
    trackInfo.className = "track_info";

    let nameLink = document.createElement("a");
    nameLink.href = imgUrl;
    nameLink.text = name;
    nameLink.className = "track_title";
    nameLink.classList.add("none-decoration");

    trackInfo.appendChild(nameLink);

    let artistLink = document.createElement("a");
    artistLink.href = artistUrl;
    artistLink.textContent = artistName;

    let genreList = document.createElement("ul");
    genreList.className = "genres";
    genreList.classList.add("margin_top10");

    genres.forEach(element => {
        let listLink = document.createElement("a");
        listLink.href = element.url;
        let listItem = document.createElement("li");
        listLink.classList.add("genre");
        listLink.classList.add("none-decoration");

        listItem.className = "genre";
        listItem.textContent = element.name + " ";

        listLink.appendChild(listItem)
        genreList.appendChild(listLink)
    });

    trackInfo.appendChild(genreList);
    card.appendChild(trackInfo);

    popularTracks.append(card);
}

/**
 * добавление карточки артиста в список найденных артистов
 */
function createArtistCard(name, img, url, listeners){
    if (img == "")
        img = "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png";
    let template = `
    <div class="square" style="background-image: url(&quot;${img}&quot;);">
        <div class="square_info">
            <a href="${url}" class="info_text none-decoration">${name}</a>
            <p class="square_sec_info">${listeners} listeners</p>
        </div>
    </div>
    `
    artistGrid.insertAdjacentHTML("beforeend", template);
}

/**
 * добавление альбома в список найденных альбомов
 */
function createAlbumCard(name, img, url, artist, artistUrl){
    if (img == "")
        img = "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png";
    let template = `
    <div class="square" style="background-image: url(&quot;${img}&quot;);">
        <div class="square_info">
            <a href="${url}" class="info_text none-decoration">${name}</a>
            <p><a href="${artistUrl}" class="square_sec_info none-decoration">${artist}</a></p>
        </div>
    </div>`

    albumsGrid.insertAdjacentHTML("beforeend", template);
}

/**
 * добавление трека в список найденных треков
 */
function createTrackCard(name, url, img, artist, artistUrl){
    if (img == "")
        img = "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png";
    let template = `
    <div class="track">
        <div class="track_play_btn"></div>
        <div class="track_image" style="background-image: url(&quot;${img}&quot;);"></div>
        <div class="track_like_btn"></div>
        <div class="track_name"><a href="${url}" class="none-decoration"><h2>${name}</h2></a></div>
        <div class="artist"><a href="${artistUrl}" class="none-decoration">${artist}</a></div>
        <div class="duration"></div>
    </div>
    `

    tracksGrid.insertAdjacentHTML("beforeend", template);
}