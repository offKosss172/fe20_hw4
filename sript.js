alert('hello')

let allCharacters = []; // Объявляем переменную allCharacters перед обоими fetch запросами

function showMeStarWars() {
  fetch("https://ajax.test-danit.com/api/swapi/films", requestOptions)
    .then(response => response.json())
    .then(result => {
      const showCard = document.querySelector(".showCard");

      result.forEach((film, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const episodeId = document.createElement("h2");
        episodeId.classList.add("desc-episodeId");
        episodeId.innerText = `Episode ${film.episodeId}`;

        const name = document.createElement("h2");
        name.classList.add("desc-name");
        name.innerText = film.name;

        const openingCrawl = document.createElement("p");
        openingCrawl.classList.add("desc-opening");
        openingCrawl.innerText = film.openingCrawl;

        const actors = document.createElement("p");
        actors.classList.add("desc-actors");
        actors.innerText = allCharacters[index].characters.join(", "); // Отображаем имена персонажей

        card.appendChild(episodeId);
        card.appendChild(name);
        card.appendChild(openingCrawl);
        card.appendChild(actors);

        showCard.appendChild(card);
      });
    })
    .catch(error => console.log('error', error));
}

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://ajax.test-danit.com/api/swapi/films", requestOptions)
  .then(response => response.json())
  .then(async result => {
    for (const film of result) {
      const charactersPromises = film.characters.map(characterUrl => 
        fetch(characterUrl, requestOptions)
          .then(response => response.json())
      );

      const charactersData = await Promise.all(charactersPromises);
      const characterNames = charactersData.map(character => character.name);
      
      allCharacters.push({
        filmName: film.name,
        characters: characterNames
      });
    }

    console.log(allCharacters);
    
    showMeStarWars(); // Вызываем функцию после загрузки данных
  })
  .catch(error => console.log('Ошибка при получении списка фильмов', error));
