const p1 = {
    score: 0, 
    button: document.querySelector('#player1Btn'),
    txt: document.querySelector('#p1txt')
}
const p2 = {
    score: 0, 
    button: document.querySelector('#player2Btn'),
    txt: document.querySelector('#p2txt')
}

const select = document.querySelector('select');
const resetBtn = document.querySelector('#resetBtn');

function keepScore(player, opponent) {
    let winningScore = select.selectedIndex;
    player.score += 1;
    player.txt.innerText = player.score;

    if(player.score >= winningScore){
     
        player.txt.classList.add('has-text-primary'); 
        opponent.txt.classList.add('has-text-danger');

        opponent.button.setAttribute('disabled', true);
        player.button.setAttribute('disabled', true); 
    }
    
}

p1.button.addEventListener('click', function(){
    keepScore(p1, p2);
});

p2.button.addEventListener('click', function(){
    keepScore(p2, p1);
    
});

resetBtn.addEventListener('click', function(){
    for(let p of [p1, p2]){
        p.score = 0;
        p.txt.innerText = p.score;
        p.txt.classList.remove("has-text-primary","has-text-danger");
        p.button.disabled = false;
    }
    
});