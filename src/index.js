//Importando funçõas:
import{main} from './funcoes.js';
//importar readline-sync para interação
import readline from 'readline-sync';
let i = 1;
const nomeHeroi = readline.question('Digite o nome do heroi: '); // Entrada de dados.
console.log(`Seja Bem-vindo ${nomeHeroi}`);
const quantidadeXp = readline.question('Digite a quantidade XP do heroi: '); // Entrada de dados.
console.log("========================================================================\n");
    do {
        i++; 
        if(i === 2 ) {
        // Chamado para função nível através do XP do herói
            console.log(`${nomeHeroi} você venceu uma legiao de mostros e recebeu +500 XP`);
            } else if (i === 3 ) {
            // Chamado para função nível através do XP do herói
            console.log(`${nomeHeroi} você venceu o vilão e recebeu +250 XP`);
            } else if (i === 4 ) {
            // Chamado para função nível através do XP do herói
            console.log(`${nomeHeroi} você venceu o vilão e recebeu +250 XP`);
            };
            let xP = parseInt(quantidadeXp) + (i * 250); 
            // Chamando a função main (principal)
            main(nomeHeroi, xP);
        console.log("========================================================================\n");
        } while(i <= 4) {
        
        console.log(`Parabéns ${nomeHeroi}, você é o nosso herói !!  `)   
        console.log("================================= THE END ================================\n");

        };