const VALOR_ATTACK = 10;
const VALOR_ATTACK_MONSTRO = 14;
const VALOR_STRONG_ATTACK = 30;
const VALOR_RECUPERA = 20;
let entradas = [];
let maxVida;

function lifeInput(){
    let vida = prompt('Digite sua vida maxima: ');
    if(isNaN(vida)){
        vida = 100;
        console.log('Default maxVida')
    }
    return parseInt(vida);

}
    try{
        maxVida = lifeInput()
        }
    catch(error){
        console.log('Invalido')
    }

let valorActualMonstro = maxVida;
let valorActualPlayer = maxVida;



adjustHealthBars(maxVida);
//  function attackHandler (){
//      const perda = dealMonsterDamage(VALOR_ATTACK);
//      valorActualMonstro -= perda;

//      const perdaDoJogador = dealPlayerDamage(VALOR_ATTACK_MONSTRO);
//      valorActualPlayer -= perdaDoJogador;

//      if(valorActualMonstro <= 0 && valorActualPlayer > 0){
//          alert('Venceu');
//      } else if(valorActualPlayer <= 0 && valorActualMonstro > 0){
//          alert('Perdeu');
//      } else if (valorActualPlayer <= 0 && valorActualMonstro <= 0){
//          alert('Empate');
//      }
//  }

function terminarRound(){
    const perdaDoJogador = dealPlayerDamage(VALOR_ATTACK_MONSTRO);
    valorActualPlayer -= perdaDoJogador;

    if(valorActualMonstro <= 0 && valorActualPlayer > 0){
                 alert('Venceu');
             } else if(valorActualPlayer <= 0 && valorActualMonstro > 0){
                 alert('Perdeu');
             } else if (valorActualPlayer <= 0 && valorActualMonstro <= 0){
                 alert('Empate');
             }
}

function attackMonster(mode) {
    let perdaMaxima;
    if(mode === 'ATTACK'){
        perdaMaxima = VALOR_ATTACK;
    } else if(mode === 'STRONG_ATTACK'){
        perdaMaxima = VALOR_STRONG_ATTACK;
    }
    const perda = dealMonsterDamage(perdaMaxima);
    valorActualMonstro -= perda;
    terminarRound();
}


function attackHandler(){
    attackMonster('ATTACK');

    entradaRegisto={
        evento : 'ATTACK',
        valor:VALOR_ATTACK,
        alvo:'Monster',
        valorFinalVidaMonstro:valorActualMonstro,
        valorFinalVidaPlayer:valorActualPlayer
    }
    entradas.push(entradaRegisto);
}

function strongAttackHandler(){
    attackMonster('STRONG_ATTACK')

    entradaRegisto2={
        evento : 'STRONG_ATTACK',
        valor:VALOR_ATTACK,
        alvo:'Monster',
        valorFinalVidaMonstro:valorActualMonstro,
        valorFinalVidaPlayer:valorActualPlayer
    }
    entradas.push(entradaRegisto2);
}

function healHandler(){
    increasePlayerHealth(VALOR_RECUPERA);
    valorActualPlayer += VALOR_RECUPERA;
    if(valorActualPlayer>=maxVida){
        alert('Já não pode fazer heal')
    }
    // terminarRound();

    entradaRegisto3={
        evento : 'HEAL',
        valor:VALOR_ATTACK,
        alvo:'Monster',
        valorFinalVidaMonstro:valorActualMonstro,
        valorFinalVidaPlayer:valorActualPlayer
    }
    entradas.push(entradaRegisto3);
}

function showLog(){
    for(const i of entradas){
        console.log(i);
    }
}

 attackBtn.addEventListener('click', attackHandler);
 strongAttackBtn.addEventListener('click',strongAttackHandler);
 healBtn.addEventListener('click',healHandler);
 logBtn.addEventListener('click',showLog);

