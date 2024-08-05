export const checkLogin = () => {
  try{
    const user = JSON.parse(localStorage.getItem('user'));
    return (user&&user.access_token) //user와 user안에 accessToken이 존재해야 true 반환
  }catch(error){
    console.log("로그인 확인 함수 에러");
    console.error(error);
  }
}