interface Question {
  id: number;
  question_sentence: string;
  evaluation: number[][];
  advanced: number;
}

export const questions: Question[] = [
  {
    id: 0,
    question_sentence: "キーボードは文字が打てれば十分だ",
    evaluation: [
      [6, 0, 2, 1, 0, 0, 2, 0],
      [0, 0, 5, 0, 0, 0, 2, 0],
    ],
    advanced: 0,
  },
  {
    id: 1,
    question_sentence:
      "アルファベットや数字以外のキーで、使った覚えがないキーがほとんどだ",
    evaluation: [
      [0, 2, 0, 6, 0, 0, 0, 0],
      [4, 0, 6, 2, 0, 0, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 2,
    question_sentence:
      "キーボードを選ぶなら、見た目よりも心地よい打鍵音と打鍵感の方が大切だ",
    evaluation: [
      [1, 0, 0, 1, 5, 1, 0, 0],
      [0, 0, 0, 2, 0, 0, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 3,
    question_sentence: "キーボードを見なければ文字が打てない",
    evaluation: [
      [5, 0, 3, 0, 0, 0, 0, 0],
      [0, 6, 1, 3, 0, 0, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 4,
    question_sentence: "他人のキーボードの打鍵音が耳障りだ",
    evaluation: [
      [0, 0, 0, 0, 0, 7, 0, 0],
      [0, 0, 0, 0, 5, 2, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 5,
    question_sentence: "人が多いところでよく作業する",
    evaluation: [
      [0, 0, 0, 2, 0, 3, 6, 0],
      [0, 1, 0, 0, 0, 0, 0, 2],
    ],
    advanced: 0,
  },
  {
    id: 6,
    question_sentence: "特にキーボードにこだわりはない",
    evaluation: [
      [4, 0, 5, 0, 0, 1, 2, 0],
      [0, 3, 0, 2, 2, 0, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 7,
    question_sentence:
      "キーボードが充電切れで使えなくなる可能性を一切考えたくない",
    evaluation: [
      [0, 0, 0, 0, 0, 0, 6, 0],
      [0, 1, 0, 0, 0, 0, 0, 4],
    ],
    advanced: 0,
  },
  {
    id: 8,
    question_sentence: "机の上は綺麗に整頓されている",
    evaluation: [
      [2, 0, 0, 2, 0, 0, 0, 4],
      [0, 0, 1, 0, 0, 0, 3, 0],
    ],
    advanced: 0,
  },
  {
    id: 9,
    question_sentence:
      "最新のスマホや高機能腕時計などの、いわゆるガジェットアイテムが好きだ",
    evaluation: [
      [1, 3, 0, 4, 2, 0, 0, 0],
      [2, 0, 0, 0, 0, 1, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 10,
    question_sentence: "キーボードを打つ音がうるさいと言われたことがある",
    evaluation: [
      [0, 0, 0, 0, 0, 6, 0, 0],
      [0, 1, 0, 0, 2, 0, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 11,
    question_sentence:
      "小型化のために特殊機能付きのキーが取り除かれるのは、いつかそのキーを使うかもしれないから嫌だ",
    evaluation: [
      [4, 0, 6, 0, 0, 0, 0, 0],
      [0, 0, 0, 4, 0, 0, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 12,
    question_sentence: "キーボードがよく邪魔になって鬱陶しい",
    evaluation: [
      [0, 5, 0, 6, 0, 0, 0, 2],
      [0, 0, 1, 0, 0, 0, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 13,
    question_sentence: "キーボードを持ち運んで使いたい",
    evaluation: [
      [0, 3, 0, 4, 0, 0, 0, 6],
      [0, 0, 0, 0, 0, 0, 3, 0],
    ],
    advanced: 0,
  },
  {
    id: 14,
    question_sentence: "よくパソコンでゲームをする",
    evaluation: [
      [0, 2, 5, 2, 0, 0, 5, 0],
      [0, 0, 0, 0, 0, 0, 0, 2],
    ],
    advanced: 0,
  },
  {
    id: 15,
    question_sentence: "キーボードで文字を打つ作業が多い",
    evaluation: [
      [0, 4, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 0],
    ],
    advanced: 0,
  },
  {
    id: 16,
    question_sentence:
      "キーを押した時にカチカチまたはコトコトと鳴る方がかっこいい",
    evaluation: [
      [2, 0, 0, 3, 6, 0, 0, 0],
      [0, 2, 0, 0, 0, 5, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 17,
    question_sentence: "同じショートカットを、数え切れないくらい使う",
    evaluation: [
      [2, 0, 0, 3, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    advanced: 1,
  },
  {
    id: 18,
    question_sentence: "絵を描いたり、音量を操作することが多い",
    evaluation: [
      [0, 0, 0, 0, 0, 0, 0, 3],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    advanced: 2,
  },
  {
    id: 19,
    question_sentence: "ノートパソコンのキーボードは打ちづらい",
    evaluation: [
      [0, 4, 0, 4, 0, 0, 0, 1],
      [4, 0, 2, 0, 0, 0, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 20,
    question_sentence:
      "機能性が多少落ちたとしても、薄くて小型なキーボードを目指す",
    evaluation: [
      [0, 3, 0, 6, 0, 0, 0, 3],
      [3, 0, 4, 0, 0, 0, 2, 0],
    ],
    advanced: 0,
  },
  {
    id: 21,
    question_sentence: "音があると集中できない",
    evaluation: [
      [0, 0, 0, 0, 0, 5, 0, 0],
      [0, 0, 0, 0, 3, 0, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 22,
    question_sentence: "キーボード入力の遅延の無さや安定性が求められる",
    evaluation: [
      [0, 0, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 0, 0, 0, 3],
    ],
    advanced: 0,
  },
  {
    id: 23,
    question_sentence: "パソコン2台以上で同じキーボードを使いたい",
    evaluation: [
      [0, 0, 0, 0, 0, 0, 0, 6],
      [0, 0, 0, 0, 0, 0, 2, 0],
    ],
    advanced: 0,
  },
  {
    id: 24,
    question_sentence: "キーボードとマウスを交互に操作する作業が多い",
    evaluation: [
      [0, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    advanced: 4,
  },
  {
    id: 25,
    question_sentence: "パソコン作業で肩こりが気になる",
    evaluation: [
      [0, 7, 0, 0, 0, 0, 0, 0],
      [3, 0, 0, 0, 0, 0, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 26,
    question_sentence: "テンキーはいらない",
    evaluation: [
      [0, 0, 0, 6, 0, 0, 0, 0],
      [6, 0, 6, 0, 0, 0, 0, 0],
    ],
    advanced: 0,
  },
  {
    id: 27,
    question_sentence: "キーボードを作ってみたい",
    evaluation: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    advanced: 4,
  },
];
