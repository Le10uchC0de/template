"use strict";

/**
 * добавление карточки артиста в список популярных артистов
 */
function fillArtistCard(name, nameUrl, imgUrl, genres) {
  var card = document.createElement("div");
  card.classList.add("artist_info");
  var imgLink = document.createElement("a");
  imgLink.href = nameUrl;
  var img = document.createElement("img");
  img.src = imgUrl;
  img.className = "artist_photo";
  imgLink.appendChild(img);
  card.appendChild(imgLink);
  var nameLink = document.createElement("a");
  nameLink.href = nameUrl;
  nameLink.textContent = name;
  nameLink.className = "artist_name";
  nameLink.classList.add("none-decoration");
  card.appendChild(nameLink);
  var genreList = document.createElement("ul");
  genreList.className = "genres";
  genres.forEach(function (element) {
    var listLink = document.createElement("a");
    listLink.href = element.url;
    var listItem = document.createElement("li");
    listLink.classList.add("genre");
    listLink.classList.add("none-decoration");
    listItem.className = "genre";
    listItem.textContent = element.name + " ";
    listLink.appendChild(listItem);
    genreList.appendChild(listLink);
  });
  card.appendChild(genreList);
  popularArtists.append(card);
}
/**
 * добавление карточки трека в список популярных треков
 */


function fillTrackCard(name, trackUrl, artistName, artistUrl, imgUrl, genres) {
  var card = document.createElement("div");
  card.classList.add("ptrack");
  var imgLink = document.createElement("a");
  imgLink.href = trackUrl;
  var img = document.createElement("img");
  img.src = imgUrl;
  img.className = "cover";
  imgLink.appendChild(img);
  card.appendChild(imgLink);
  var trackInfo = document.createElement("div");
  trackInfo.className = "track_info";
  var nameLink = document.createElement("a");
  nameLink.href = imgUrl;
  nameLink.text = name;
  nameLink.className = "track_title";
  nameLink.classList.add("none-decoration");
  trackInfo.appendChild(nameLink);
  var artistLink = document.createElement("a");
  artistLink.href = artistUrl;
  artistLink.textContent = artistName;
  var genreList = document.createElement("ul");
  genreList.className = "genres";
  genreList.classList.add("margin_top10");
  genres.forEach(function (element) {
    var listLink = document.createElement("a");
    listLink.href = element.url;
    var listItem = document.createElement("li");
    listLink.classList.add("genre");
    listLink.classList.add("none-decoration");
    listItem.className = "genre";
    listItem.textContent = element.name + " ";
    listLink.appendChild(listItem);
    genreList.appendChild(listLink);
  });
  trackInfo.appendChild(genreList);
  card.appendChild(trackInfo);
  popularTracks.append(card);
}
/**
 * добавление карточки артиста в список найденных артистов
 */


function createArtistCard(name, img, url, listeners) {
  if (img == "") img = "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png";
  var template = "\n    <div class=\"square\" style=\"background-image: url(&quot;".concat(img, "&quot;);\">\n        <div class=\"square_info\">\n            <a href=\"").concat(url, "\" class=\"info_text none-decoration\">").concat(name, "</a>\n            <p class=\"square_sec_info\">").concat(listeners, " listeners</p>\n        </div>\n    </div>\n    ");
  artistGrid.insertAdjacentHTML("beforeend", template);
}
/**
 * добавление альбома в список найденных альбомов
 */


function createAlbumCard(name, img, url, artist, artistUrl) {
  if (img == "") img = "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png";
  var template = "\n    <div class=\"square\" style=\"background-image: url(&quot;".concat(img, "&quot;);\">\n        <div class=\"square_info\">\n            <a href=\"").concat(url, "\" class=\"info_text none-decoration\">").concat(name, "</a>\n            <p><a href=\"").concat(artistUrl, "\" class=\"square_sec_info none-decoration\">").concat(artist, "</a></p>\n        </div>\n    </div>");
  albumsGrid.insertAdjacentHTML("beforeend", template);
}
/**
 * добавление трека в список найденных треков
 */


function createTrackCard(name, url, img, artist, artistUrl) {
  if (img == "") img = "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png";
  var template = "\n    <div class=\"track\">\n        <div class=\"track_play_btn\"></div>\n        <div class=\"track_image\" style=\"background-image: url(&quot;".concat(img, "&quot;);\"></div>\n        <div class=\"track_like_btn\"></div>\n        <div class=\"track_name\"><a href=\"").concat(url, "\" class=\"none-decoration\"><h2>").concat(name, "</h2></a></div>\n        <div class=\"artist\"><a href=\"").concat(artistUrl, "\" class=\"none-decoration\">").concat(artist, "</a></div>\n        <div class=\"duration\"></div>\n    </div>\n    ");
  tracksGrid.insertAdjacentHTML("beforeend", template);
}
//# sourceMappingURL=CreateNode.dev.js.map
