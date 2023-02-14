type Config = {
    path:string,
    state:object
}

type Push = {
    (path:string):void
    (config:Config):void
}

const push:Push = (config) => {
    if (typeof config === 'string') console.log(config)
    else {
        console.log(config.path)
    }
}

// 파라미터의 수가 다를 때
type overAdd = {
    (a:number, b:number) : number
    (a:number, b:number, c:number) : number
}

// c는 옵션
const overadd:overAdd = (a, b, c?:number) => {
    if(c) return a + b + c
    return a + b
}