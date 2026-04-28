export interface PossessiveTheory {
  title: string;
  description: string;
  items: {
    spanish: string;
    english: string;
    usage: string;
  }[];
}

export interface PossessiveQuestion {
  id: string;
  prompt: string;
  choices: string[];
  target: string;
  translation: string;
  type: 'adjective' | 'pronoun';
}

export const POSSESSIVE_THEORY: PossessiveTheory[] = [
  {
    title: 'Short Possessives (Adjectives)',
    description: 'Use before the noun (mi libro, tu casa). They agree in number with the noun.',
    items: [
      { spanish: 'mi / mis', english: 'my', usage: 'Used for "yo"' },
      { spanish: 'tu / tus', english: 'your', usage: 'Used for "tú"' },
      { spanish: 'su / sus', english: 'his/her/its/your (formal)', usage: 'Used for "él/ella/usted"' },
      { spanish: 'nuestro/a (os/as)', english: 'our', usage: 'Used for "nosotros"' },
      { spanish: 'vuestro/a (os/as)', english: 'your', usage: 'Used for "vosotros"' },
      { spanish: 'su / sus', english: 'their/your (plural formal)', usage: 'Used for "ellos/ellas/ustedes"' }
    ]
  },
  {
    title: 'Long Possessives (Pronouns)',
    description: 'Used after the noun or on their own (el libro mío). They agree in gender and number with the noun.',
    items: [
      { spanish: 'mío/a/os/as', english: 'mine', usage: 'yo' },
      { spanish: 'tuyo/a/os/as', english: 'yours', usage: 'tú' },
      { spanish: 'suyo/a/os/as', english: 'his/hers/yours', usage: 'él/ella/usted' },
      { spanish: 'nuestro/a/os/as', english: 'ours', usage: 'nosotros' },
      { spanish: 'vuestro/a/os/as', english: 'yours', usage: 'vosotros' },
      { spanish: 'suyo/a/os/as', english: 'theirs/yours', usage: 'ellos/ellas/ustedes' }
    ]
  }
];

export const POSSESSIVE_QUESTIONS: PossessiveQuestion[] = [
  { id: '1', prompt: '___ casa es muy grande.', choices: ['Mi', 'Mío', 'Mis'], target: 'Mi', translation: 'Իմ տունը շատ մեծ է:', type: 'adjective' },
  { id: '2', prompt: 'El libro es ___.', choices: ['mi', 'mío', 'mía'], target: 'mío', translation: 'Գիրքը իմն է:', type: 'pronoun' },
  { id: '3', prompt: '¿Dónde están ___ llaves?', choices: ['tu', 'tus', 'tuyo'], target: 'tus', translation: 'Որտե՞ղ են քո բանալիները:', type: 'adjective' },
  { id: '4', prompt: 'Esta pluma es ___.', choices: ['tuyo', 'tuyas', 'tuya'], target: 'tuya', translation: 'Այս գրիչը քոնն է:', type: 'pronoun' },
  { id: '5', prompt: '___ padre trabaja en un banco.', choices: ['Su', 'Suyo', 'Sus'], target: 'Su', translation: 'Նրա հայրը աշխատում է բանկում:', type: 'adjective' },
  { id: '6', prompt: 'Esa mochila es ___.', choices: ['suyo', 'suya', 'sus'], target: 'suya', translation: 'Այդ ուսապարկը նրանն է:', type: 'pronoun' },
  { id: '7', prompt: '___ amigos viven en Madrid.', choices: ['Nuestro', 'Nuestras', 'Nuestros'], target: 'Nuestros', translation: 'Մեր ընկերները ապրում են Մադրիդում:', type: 'adjective' },
  { id: '8', prompt: 'Los resultados son ___.', choices: ['nuestros', 'nuestro', 'nuestra'], target: 'nuestros', translation: 'Արդյունքները մերն են:', type: 'pronoun' },
  { id: '9', prompt: '¿Son ___ estos libros?', choices: ['vuestro', 'vuestros', 'vuestra'], target: 'vuestros', translation: 'Սրանք ձեր գրքե՞րն են:', type: 'adjective' },
  { id: '10', prompt: 'La victoria es ___.', choices: ['vuestro', 'vuestra', 'vuestras'], target: 'vuestra', translation: 'Հաղթանակը ձերն է (vosotros):', type: 'pronoun' },
  { id: '11', prompt: '___ padres son muy amables.', choices: ['Su', 'Sus', 'Suyo'], target: 'Sus', translation: 'Նրանց ծնողները շատ բարեհամբույր են:', type: 'adjective' },
  { id: '12', prompt: 'Esos perros son ___.', choices: ['suyo', 'suyos', 'suya'], target: 'suyos', translation: 'Այդ շները նրանցն են:', type: 'pronoun' },
  { id: '13', prompt: 'Este coche es ___.', choices: ['mío', 'mi', 'mía'], target: 'mío', translation: 'Այս մեքենան իմն է:', type: 'pronoun' },
  { id: '14', prompt: '___ hermana es doctora.', choices: ['Tu', 'Tus', 'Tuyo'], target: 'Tu', translation: 'Քո քույրը բժիշկ է:', type: 'adjective' },
  { id: '15', prompt: 'La última palabra es ___.', choices: ['suya', 'su', 'suyo'], target: 'suya', translation: 'Վերջին խոսքը նրանն է (ella):', type: 'pronoun' }
];
