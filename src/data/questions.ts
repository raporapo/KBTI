interface Question {
  id: number;
  question_sentence: string;
  evaluation: number[][];
}

export const questions: Question[] = [
  {
    id: 0,
    question_sentence: "キーボードを使っていると肩が凝る",
    evaluation: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [8, 7, 6, 5, 4, 3, 2, 1],
    ],
  },
  {
    id: 1,
    question_sentence: "キーボードを見なければ文字が打てない",
    evaluation: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [8, 7, 6, 5, 4, 3, 2, 1],
    ],
  },
  {
    id: 2,
    question_sentence: "キーボードは文字が打てれば十分だ",
    evaluation: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [8, 7, 6, 5, 4, 3, 2, 1],
    ],
  },
  ,
  {
    id: 3,
    question_sentence: "キーボードを見なければ文字が打てない",
    evaluation: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [8, 7, 6, 5, 4, 3, 2, 1],
    ],
  },
  {
    id: 4,
    question_sentence: "キーボードは文字が打てれば十分だ",
    evaluation: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [8, 7, 6, 5, 4, 3, 2, 1],
    ],
  },
  ,
  {
    id: 5,
    question_sentence: "キーボードを見なければ文字が打てない",
    evaluation: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [8, 7, 6, 5, 4, 3, 2, 1],
    ],
  },
  {
    id: 6,
    question_sentence: "キーボードは文字が打てれば十分だ",
    evaluation: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [8, 7, 6, 5, 4, 3, 2, 1],
    ],
  },
];
