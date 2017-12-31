// 액션 타입을 정의해줍니다.
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수를 만듭니다.
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });