function openPlayerConfig(event) {
    Editplayer=+event.target.dataset.playerid;
    playerConfigOverlay.style.display='block';
    backdropElement.style.display='block'
}

function closePlayerConfig() {
    playerConfigOverlay.style.display='none';
    backdropElement.style.display='none'
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent='';
    formElement.firstElementChild.lastElementChild.value='';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData=new FormData(event.target);
    const enteredPlayername=formData.get('username').trim();

    if(!enteredPlayername) {
        event.target.firstElementChild.classList.add('error')
        errorOutputElement.textContent='Please enter a valid name!';
        return;
    }

    const updatedPlayerDataElement=document.getElementById('player-' + Editplayer + '-data');
    updatedPlayerDataElement.children[1].textContent=enteredPlayername;

    players[Editplayer-1].name=enteredPlayername;

    closePlayerConfig();

}