alert('hello')

//первое задание
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://ajax.test-danit.com/api/swapi/films", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));



//второе задание 
fetch("https://ajax.test-danit.com/api/swapi/films", requestOptions)
  .then(response => response.json())
  .then(async result => {
    const allCharacters = [];

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
  })
  .catch(error => console.log('Ошибка при получении списка фильмов', error));
  



  function showMeStarWars() {
    alert("готово")
  }
  showMeStarWars()















  

    class showCard {
        constructor({episodeId, name, openingCrawl}) {
            this.episodeId = episodeId,
            this.name = name,
            this.openingCrawl = openingCrawl
        }
    
        render() {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.episodeId = this.episodeId;
    
            
            card.innerHTML = `

            <div class="card-body">
                <h6 class="title">номер епізоду:</h6>
                <p>${this.visitor}</p>
                <h6 class="title">назва:</h6>
                <p>${this.doctor}</p>
                <h6 class="title">опис епізода:</h6>
                <p>${this.doctor}</p>
            </div>
            `;
            document.querySelector('.visits').prepend(card);
        }
    } 