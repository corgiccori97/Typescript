function add(a:number, b:number) {
    return a + b;
}

const sub = (a:number, b:number) => a - b

// call signature 만들기
type Add = (a:number, b:number) => number
const simpleAdd:Add = (a, b) => a + b
// const simpleAdd:Add = (a, b) => {a + b} 에러. 애로우함수에서 {}를 사용하면 안의 값은 return값이 아니라 함수 내부 내용으로 처리되므로 void로 처리됨. 
const test2:Add = (x, y) => x + y