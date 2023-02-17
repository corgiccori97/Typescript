// Last 이 함수는 배열의 마지막 요소를 반환해야 합니다.

type Last = <T>(items: T[]) => T;

const last: Last = (items) => items[items.length - 1];

const lastItem = last([1, 2, 3, 4, 5]);

console.log(`Last: ${lastItem}`);

// Prepend 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.

type Prepend = <T>(items: T[], item: T) => T[];

const prepend: Prepend = (items, item) =>  [item, ...items]

const items = [1, 2, 3, 4, 5];

const newItems = prepend(items,0);

console.log(`Prepend: ${newItems}`)

//  Mix 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.

type Mix = <T>(a: T[], b: T[]) => T[]

const mix: Mix = (firstArr, secondArr) => [...firstArr, ...secondArr];

const mixed = mix([1, 2, 3], [4, 5, 6]);

console.log(`Mix: ${mixed}`)

// Count 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.

type Count = <T>(items: T[]) => number;

const count: Count = (items) => items.length;

const counted = count([1, 2, 3, 4, 5]);

console.log(`Count :${counted}`);

// FindIndex 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.

type FindIndex = <T>(items: T[], item:T) => number | boolean;

const find: FindIndex = (items, item) => {
    const index = items.indexOf(item)
    return  index === -1 ? false : index;
}

const found = find([1, 2, 3, 4], 1);

console.log(`FindIndex (found): ${found}`);

const notFound = find([1, 2, 3, 4], 5);

console.log(`FindIndex (not found): ${notFound}`);

// Slice 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 
// 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다

type Slice = <T>(items: T[], start: number, end?:number) => T[]

const slice : Slice = (items, start, end) => items.slice(start, end);

const sliced = slice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6);

console.log(`Slice ${sliced}`);