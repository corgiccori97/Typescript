type Words = {
    [key:string]:string
}

class Dict {
    private words: Words;
    constructor () {
        this.words  = {};
    }

    add(word:Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
        console.log(this.words);
    }

    get(word:Word) {
        if (this.words[word.term]) {
            console.log(word.def);
        }
    }

    delete(word:Word) {
        if (this.words[word.term]) {
            delete this.words[word.term];
        }
    }

    update(word:Word) {
        this.words[word.term] = word.def;
    }

    showAll() {
        console.log(this.words);
    }

    count() {
        console.log(`사전에 등록된 단어 개수: ${Object.values(this.words).length}`);
    }

    upsert(word:Word) {
        if (this.words[word.term]) {
            this.words[word.term] = word.def;
        }
        else {
            this.words[word.term] = word.def;
        }
    }

    exists(word:Word) {
        if (this.words[word.term]) {
            console.log(`${word.term}가(이) 사전 내 존재합니다.`);
        }
    }

    bulkAdd(objs:Object[]) {
        objs.forEach((obj) => {
            let newWord = new Word(Object.values(obj)[0], Object.values(obj)[1]);
            this.add(newWord);
        });
    }

    bulkDelete(arrs:string[]) {
        arrs.forEach((arr) => {
            if (this.words[arr]) {
                delete this.words[arr];
            }
        });
    }
}

class Word {
    constructor(
        public term:string,
        public def :string
    ) {};
}

const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();
dict.add(kimchi);

const kimchi2 = new Word("kimchi2", "김치투");
dict.upsert(kimchi2);

dict.bulkAdd([{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]);

dict.bulkDelete(["김치", "아파트"]);

console.log(dict);