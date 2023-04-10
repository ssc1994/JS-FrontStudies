
class Person{
    constructor(name, age){
        this.name = name ;  //멤버변수
        this.age = age;
    }

    getInfo = () => {
        return `이름${this.name}, 나이${this.age}`;
    }
}

export default Person;