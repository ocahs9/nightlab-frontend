import axios from "axios";
//기존에 저장된 토큰을 활용해서, 서버에 요청을 보내기 위한 간략한 로직 구성
const getAccessToken = () => {
  const user = localStorage.getItem("user");
  if(user) {
    try{
      const userObj = JSON.parse(user);
      return userObj.accessToken || "";
    } catch(error){
      console.error("Failed to parse user from localStorage.", error);
      return "";
    }
  }
}

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, //Cookie 세션 진행

  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  }
});


//axios의 인스턴스의 config를 던져준다.
instance.interceptors.request.use((config)=> {
  //추후 expiration date 고려해서 새롭게 토큰 가져오는 로직 추가 예정
  const token = getAccessToken();
  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config; //config 갱신 
})

export function get(...args){
  return instance.get(...args);
}

export function post(...args){
  return instance.post(...args);
}

export function put(...args){
  return instance.put(...args);
}

export function patch(...args){
  return instance.patch(...args);
}

export function del(...args){
  return instance.delete(...args);
}

