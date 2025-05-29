// src\data\FeedbackMessagesByTopic.ts
import { FeedbackMessages } from './types';

export const feedbackMessagesByTopic: Record<string, FeedbackMessages> = {
  'films-et-series': {
    perfect: "Ok, j'avoue, t'es un super giga boss !",
    high: "Ok, c'est pas mal !",
    medium: "C'est déjà bien mais tu peux faire mieux !",
    low: "Fais un effort, s'il te plaît !",
    fail: 'Tu connais ces films ou series ?!',
  },
  musique: {
    perfect: "Ok, j'avoue, t'es un super giga boss !",
    high: "Ok, c'est pas mal !",
    medium: "C'est déjà bien mais tu peux faire mieux !",
    low: "Fais un effort, s'il te plaît !",
    fail: 'Tu connais ces musiques ?!',
  },
  'harry-potter': {
    perfect: "Ok, j'avoue, t'es un super giga boss !",
    high: "Ok, c'est pas mal !",
    medium: "C'est déjà bien mais tu peux faire mieux !",
    low: "Fais un effort, s'il te plaît !",
    fail: 'Tu connais Harry Potter ?!',
  },
  'jeux-videos': {
    perfect: "Ok, j'avoue, t'es un super giga boss !",
    high: "Ok, c'est pas mal !",
    medium: "C'est déjà bien mais tu peux faire mieux !",
    low: "Fais un effort, s'il te plaît !",
    fail: 'Tu connais ces jeux vidéo ?!',
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
    medium: "C'est déjà bien mais tu peux faire mieux !",
    low: "C'est pas mal, mais tu peux faire mieux !",
    fail: 'Tu connais les films de Marvel ?!',
  },
  disney: {
    perfect: 'Alors là, je suis bluffée, bravo !',
    high: "Mouais, ok, c'est déjà mieux !",
    medium: "C'est déjà bien mais tu peux faire mieux !",
    low: "C'est pas mal, mais tu peux faire mieux !",
    fail: 'Tu connais les films de Disney ?!',
  },
  histoire: {
    perfect: "Incroyable, tu maîtrises parfaitement l'histoire !",
    high: 'Bravo, tes connaissances sont solides !',
    medium:
      'Pas mal, mais un petit rafraîchissement d’Histoire ne ferait pas de mal !',
    low: 'Il faudrait réviser un peu plus !',
    fail: "On dirait que l'Histoire n'est pas ton fort ?!",
  },
};
