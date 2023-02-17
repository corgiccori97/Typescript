type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    // 주어진 단어가 사전에 없다면(등록되지 않았다면)
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();
dict.add(kimchi);
