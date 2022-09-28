
let input = document.getElementById("artist-search")
let form = document.querySelector('form')
let searchResults = document.getElementById('search-results')

form.addEventListener('submit', (event) => {
    let search = input.value;
    let url = 'https://proxy-itunes-api.glitch.me/search?musicArtist'
    event.preventDefault();
    
    
    fetch(url)
        .then(function(response){
            return response.json()
        })

        .then(function(music) {
            buildResults(music.results);
        })

})

function buildResults(itunesArray){
    for (let itunes of itunesArray) {
        let resultsDiv= document.createElement("div");
        let picture = document.createElement("img");
        let artistName = document.createElement("h6");
        let trackName = document.createElement("h6");
        let audio = document.getElementById("audio-player")
        resultsDiv.classList.add("results")

    }
}




