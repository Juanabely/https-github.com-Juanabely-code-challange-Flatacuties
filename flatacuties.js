window.onload = function() {
    let result = 0
    const characterBar = document.querySelector('.character-bar');
    const characterImage = document.querySelector('.image');
    const characterName = document.querySelector('.name');
    const votesForm = document.querySelector('.votes-form');
    let votesInput = document.querySelector('.js-votes');
    const api = "http://localhost:3000/characters"
    
    fetch(api)
    .then(response => response.json())
    .then(data => {
        data.forEach(character => {

            const gridContainer = document.createElement('div');
gridContainer.style.display = '';
gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
gridContainer.style.columnGap = '10px';
gridContainer.style.rowGap = '10px';
gridContainer.style.alignItems = 'center';
            const nameElement = document.createElement(`button`);
nameElement.style.border = 'none';
nameElement.style.padding = '15px 20px';
nameElement.style.display = '';
nameElement.style.gridTemplateColumns = '100px 150px 100px';
nameElement.style.columnGap = '10px';
nameElement.style.rowGap = '10px';
nameElement.style.alignItems = 'center';
nameElement.style.marginTop ='5px'

        nameElement.textContent = character.name;

        const voteButton = document.createElement('button');
voteButton.style.backgroundColor = 'green';
voteButton.style.fontSize ='15px'
voteButton.style.border = 'none';
voteButton.style.padding = '15px 15px';
voteButton.style.display = 'grid';
voteButton.style.gridTemplateColumns = '15px 15px 100px';
voteButton.style.columnGap = '10px';
voteButton.style.rowGap = '10px';
voteButton.style.alignItems = 'center';
voteButton.style.marginBottom = '10px'
    voteButton.textContent = 'Vote';

    voteButton.addEventListener('click', () => {
    // Handle vote button click here
    character.votes++
votesInput.innerHTML = `${character.name} : ${character.votes}`
    console.log(votesInput)
    
});

    const characterDiv = document.createElement('div');
    characterDiv.appendChild(nameElement);
    characterDiv.appendChild(voteButton);

    /*nameElement.addEventListener('click', () => {
    characterImage.src = character.image;
    characterImage.alt = character.name;
    characterName.textContent = character.name;
});
gridContainer.appendChild(characterDiv); 


characterBar.appendChild(gridContainer);*/




        nameElement.addEventListener('click', () => {
            characterImage.src = character.image;
            characterImage.alt = character.name;
            characterName.textContent = character.name;
            
        });
        
        gridContainer.appendChild(characterDiv);
        characterBar.appendChild(gridContainer);
        });
    })

    document.querySelector('.reset').addEventListener('click', () =>{
    if (character.name > 0){
        votesInput.innerHTML = `${character.name} : ${character.votes * 0}`
    console.log(votesInput)
    }
    })
    
    //votesForm.addEventListener('submit', function(event) {
    //event.preventDefault(); 

    //const characterVotes = document.createElement('p');
    //const characterVotesValue = parseInt(votesInput.value);
    //const characterVoteCount = characterVotesValue || 0;

   // if (characterVotesValue) {
        //characterVotes.textContent = `Total Votes: ${characterVotesValue}`;
        //characterBar.appendChild(characterVotes);
    //}

   // votesInput.value = '';
    //});
};