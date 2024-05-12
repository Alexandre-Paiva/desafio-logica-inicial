//Importando funçõas:
import{print, nivelXP} from './funcoes.js';
//importar readline-sync para interação
import readline from 'readline-sync';
let i = 1;
let quantidadeXp;
const nomeHeroi = readline.question('Digite o nome do heroi: '); // Entrada de dados.
console.log("========================================================================\n");
        console.log(`Seja Bem-vindo ${nomeHeroi}`);
const quantidade = readline.question('Digite a quantidade XP do heroi: '); // Entrada de dados.
do {
     i++; 
    if(i === 2 ) {
    // Chamado para função nível através do XP do herói
        console.log(`${nomeHeroi} você venceu o vilão e recebeu +250 XP`);
        } else if (i === 3 ) {
        // Chamado para função nível através do XP do herói
        console.log(`${nomeHeroi} você venceu o vilão e recebeu +250 XP`);
        } else if (i === 4 ) {
        // Chamado para função nível através do XP do herói
        console.log(`${nomeHeroi} você venceu o vilão e recebeu +250 XP`);
        };
    quantidadeXp = parseInt(quantidade) + (i * 250); 
    let nivel = nivelXP(quantidadeXp);
    // Chamando a função print (Imprimir)
    print(nomeHeroi, nivel, quantidadeXp);
    console.log("========================================================================\n");
    } while(i <= 4) {
    
    console.log("================================= THE END ================================\n");

    }