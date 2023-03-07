const formulario = document.getElementById('formNun');
const MSGerrou = 'Refaça, faltou atenção!';
const MSGacerto = 'Muito bem, sua concentração está boa!'

function someBotao(){
    document.querySelector('.BotaoSN').style.display = "none";   
    document.querySelector('.MSGtela').style.display = "none";        
}

function valNum (Num01, Num02){
    const Numero01 = document.getElementById('Num01');
    const Numero02 = document.getElementById('Num02');   
    let primeiro = parseInt(Numero01.value);
    let segundo = parseInt(Numero02.value);     
    if (primeiro >= segundo) 
    {
        const conteinerMSG = document.querySelector('.MSGtela');              
        conteinerMSG.innerHTML = MSGerrou;      
        document.querySelector('.MSGtela').style.display = "block";          
        document.querySelector('.BotaoSN').style.display = "none";         
    } 
    else 
    {
        const conteinerMSG = document.querySelector('.MSGtela');         
        conteinerMSG.innerHTML = MSGacerto;
        document.querySelector('.MSGtela').style.display = "block";
        document.querySelector('.BotaoSN').style.display = "block";         
    }
}
