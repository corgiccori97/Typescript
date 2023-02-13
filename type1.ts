type Age = number;
type Name = string;

type Player = {
    // Alias
    name:Name,
    age?:Age
}

const nico : Player = {
    name:"nico"
}


const playerSanghee : {
    name:String,
    age?:Number
} = {
    name:"sanghee",
    age:27
}

// 인수타입:string
function playerMaker(name:string) : Player {
    return {
        name
    }
}

// 화살표 함수 사용할 때
const arrowPlayerMaker = (name:string) : Player => ({name})

const toong = playerMaker("yang")
toong.age = 12