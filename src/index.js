//Importando funçõas:
import{nivelXP, print} from './funcoes.js';
//importar readline-sync para interação
import readline from 'readline-sync';


const nomeHeroi = readline.question('Digite o nome do herói: '); // Entrada de dados.
const quantidadeXp = readline.question('Digite a quantidade XP do herói: '); // Entrada de dados.
console.log(`Seja Bem-vindo ${nomeHeroi} seu XP atual é de ${quantidadeXp}`);

// Chamado para função nível através do XP do herói
let nivel = nivelXP(quantidadeXp);

// Chamando a função print (Imprimir)
print(nomeHeroi, nivel);