// src\data\FeedbackMessagesByTopic.ts
import { FeedbackMessages } from './types';

export const feedbackMessagesByTopic: Record<string, FeedbackMessages> = {
  'films-et-series': {
    perfect: "Bravissimo ! T'es pas si nul que ça au final !",
    high: 'Peut mieux faire !',
    medium: 'Pffffff !',
    low: "A deux doigts d'être un gros caca, tu sais ce qu'il te reste à faire...",
    fail: 'GROS CACA ! VA TE CULTIVER !',
  },
  musique: {
    perfect: "Ok ok, j'avoue, tu gères ! ",
    high: "T'es pas loin du podium !",
    medium: "J'suis sûre que tu peux faire mieux que ça, allez !",
    low: "Tu l'as fait exprès, avoue !",
    fail: "Est-ce que ça t'arrive d'écouter de la musique ?!",
  },
  'harry-potter': {
    perfect: "Ok, j'avoue chapeau !",
    high: 'Pas trop mal...!',
    medium: 'Va les regarder, tout de suite !',
    low: 'Sérieux ? Est-ce que tu les as regardé au moins ?!',
    fail: 'SORS DE TA GROTTE !',
  },
  'jeux-videos': {
    perfect: "Ok, t'es un giga boss ! Bravo !",
    high: 'On approche de la perfection !',
    medium: 'Pas mal mais tu peux mieux faire !',
    low: "Fais un effort, s'il te plaît !",
    fail: "Tu sais ce que c'est au moins un jeu vidéo ?!",
  },
  citations: {
    perfect: "Ouah, bravo, j'avoue t'es un super giga boss !",
    high: 'Ok, pas mal du tout !',
    medium: "C'est déjà bien mais tu peux faire mieux !",
    low: "Allez fais un effort, la lecture c'est cool !",
    fail: "Est-ce que tu sais ce que c'est une citation au moins ?!",
  },
  marvel: {
    perfect: 'Alors là, je suis bluffée, bravo !',
    high: "Mouais, ok, c'est déjà mieux !",
    medium: "T'as même pas vu tous les films, avoue !",
    low: 'Tu aimes Marvel ou pas ?!',
    fail: 'Tu connais Marvel ou pas ?!',
  },
  disney: {
    perfect: 'Ok, ok, bien joué mais te la pète pas trop non plus !',
    high: "Mouais, c'est pas mal !",
    medium: 'DES CLASSIQUES ! CROTTE !',
    low: 'CE SONT DES CLASSIQUES !',
    fail: "Je ne sais pas quoi dire... C'EST SCANDALEUX !",
  },
};
