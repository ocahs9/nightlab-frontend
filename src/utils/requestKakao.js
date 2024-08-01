export const requestKakaoLogin = () => {
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URL;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  //code를 받아오고, 
  const handleLogin = () => {
    const code = new URL(window.location.href).searchParams.get("code");
    window.location.href = kakaoURL;
    console.log(code);
    return code;
  };

  return handleLogin();
};