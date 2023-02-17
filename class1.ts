// 추상 클래스: 직접적으로 인스턴스를 만들지 못하는 클래스
abstract class User {
    // 자바스크립트와 같이 constructor(firstName, lastName) {
    //     this.firstNmae = fristName;
    //     this.lastNmae = lastName;
    // } 해줄 필요 없이 접근 제어자, 이름, 타입을 써 주면 된다.
    constructor (
        protected firstName:string,
        private lastName:string,
        public nickname:string
    ) {}

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }   

    // 추상 메서드를 정의한 경우 자식 클래스에서 추상 메서드를 정의해야 함
    abstract getNickname():void
}

// private으로 설정할 경우 Player가 User를 상속받더라도 프로퍼티에 접근 불가능, 즉 User 클래스의 인스턴스나 메소드에서만 접근할 수 있다.
// protected으로 설정할 경우 여전히 외부에서는 접근 불가능하지만 자식 클래스에서 접근이 가능하다.
class Player extends User {
    getNickname() {
        console.log(this.nickname)
    }
}

const nico = new Player("nico", "kim", "니꼬")

nico.getFullName()