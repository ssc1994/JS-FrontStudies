/* 
모듈 export, import

모듈은 js es6의 미리 작성해놓은 스크립트 파일입니다.
변수, 함수, 클래스 등이 정의 되어 있습니다.

모듈을 내보내는 방식
 - 여러값을 내보낼때는 named export
 - 단일값을 내보낼때는 default export



*/
export const name = "이순신";
export const age = 20;

export const info = () =>{
    console.log("이름"+ name+ "나이" +age);
}

let addr = "서울시";
let myInfo = () => {
    console.log(addr);
}
export {addr, myInfo};
