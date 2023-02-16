type SuperPrint = {
    <T>(arr: T[]): T
}
const superPrint:SuperPrint = (arr) => arr[0]

// 1~4줄까지랑 같은 것
// function superPrint<T>(a: T[]) {
//     return a[0]
// }

const polya = superPrint([1, 2, 3, 4])
const polyb = superPrint([true, false, true])
const polyc = superPrint(["a", "b", "c", "d"])
const polyd = superPrint([1, 2, "a", true])

// generic 사용법 2
type Person<E> = {
    name:string
    extraInfo:E
}

type NicoleExtra = {
    essential:boolean
}

type NicolePerson = Person<NicoleExtra>

const nicole: NicolePerson = {
    name:"nicole",
    extraInfo: {
        essential: true
    }
}

console.log(nicole)
