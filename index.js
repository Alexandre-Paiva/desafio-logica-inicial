//Importando funçõas:
import{nivelXP, print} from './funcoes.js';

// - Variáveis
let nomeHeroi = "Naruto Uzumaki";
let quantidadeXp = 100;

// Função usada para definir o nível através do XP do herói
let nivel = nivelXP(quantidadeXp);

// Chamando a função print (Imprimir)
print(nomeHeroi, nivel);