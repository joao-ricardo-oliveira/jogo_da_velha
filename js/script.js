var contador = 0;
var match = false;

onload=inicia;

function inicia() {
    for (let i=1; i<=3; i++) {
        for (let j=1; j<=3; j++) {
            let celula = document.getElementById(String(i) + String(j));
            celula.addEventListener('click',trataClick);
        }
    }    
}

function trataClick(evento) {
    if (evento.target.src.includes("Vazio") == false) {
        alert("Espaço preenchido. Escolha outro espaço.")
    }
    else {
        if (contador % 2 == 0) {
            evento.target.src = "./images/Circle.png";
        }
        else {
            evento.target.src = "./images/Cross.png";
        }    
        verificaFim();
        if (match == true) {
            const traco = document.getElementById(verificaFim());
            setTimeout(() => {
                traco.style.clipPath = "inset(0 0 0 0)";        
            },100);
            setTimeout(() => {
                alert('Fim de Jogo!')
            }, 3000);    
        }
        contador++;
    }    
}

function verificaFim() {
    //Verifica se o jogo foi finalizado em alguma linha
    for (let i=1; i<=3; i++) {
        var celula1 = document.getElementById(i + "1").src;
        var celula2 = document.getElementById(i + "2").src;
        var celula3 = document.getElementById(i + "3").src;
        if (celula1.includes('Vazio') == false && celula2.includes('Vazio') == false && celula3.includes('Vazio') == false && celula1 == celula2 && celula1 == celula3) {
            match = true;
            return "linha" + i;
        }
    }

    //Verifica se o jogo foi finalizado em alguma coluna
    for (let i=1; i<=3; i++) {
        var celula1 = document.getElementById("1" + i).src;
        var celula2 = document.getElementById("2" + i).src;
        var celula3 = document.getElementById("3" + i).src;
        if (celula1.includes('Vazio') == false && celula2.includes('Vazio') == false && celula3.includes('Vazio') == false && celula1 == celula2 && celula1 == celula3) {
            match = true;
            return "coluna" + i;
        }
    }

    //Verifica se o jogo foi finalizado na diagonal principal
    var celula1 = document.getElementById("11").src;
    var celula2 = document.getElementById("22").src;
    var celula3 = document.getElementById("33").src;
    if (celula1.includes('Vazio') == false && celula2.includes('Vazio') == false && celula3.includes('Vazio') == false && celula1 == celula2 && celula1 == celula3) {
        match = true;
        return "diagonalPrincipal";
    }

    //Verifica se o jogo foi finalizado na diagonal secundária
    var celula1 = document.getElementById("13").src;
    var celula2 = document.getElementById("22").src;
    var celula3 = document.getElementById("31").src;
    if (celula1.includes('Vazio') == false && celula2.includes('Vazio') == false && celula3.includes('Vazio') == false && celula1 == celula2 && celula1 == celula3) {
        match = true;
        return "diagonalSecundaria";
    }    
    
}