const names: readonly string[] = ["a", "b"]
// names.push("c") 에러

// 튜플
const player: readonly [string, number, boolean] = ["nico", 1, true]
// player[0]=1 에러 typescript는 player의 첫 번째 요소는 string이라고 이해하기 때문에
// player[0] = "sanghee" 에러 readonly 

// any - 타입스크립트의 보호장치를 비활성화시킴
const a : any[] = [1, 2, 3, 4]
const b : any = true

a + b