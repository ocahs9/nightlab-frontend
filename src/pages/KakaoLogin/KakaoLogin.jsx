import { navigateAtom } from "@stores/navigate";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//redirect시 진행될 로직들
const KakaoLogin = () => {
  const [navigateUrl] = useAtom(navigateAtom);
  const [readyLogin, setReadyLogin] = useState(false);


  // 로그인 완료되면 상태 확인 후, 지정된 사이트로 넘어감.
  useEffect(() => {
    if (readyLogin) {
      navigate(navigateUrl);
    }
  }, [readyLogin]);

  //서버에서데이터를 받아오는 코드
  const navigate = useNavigate();

  useEffect(() => {
    const sendAuthorizationCode = async () => {
      const code = new URL(window.location.href).searchParams.get('code');
      if (code) {
        try {
          const response = await axios.post(
            //Backend Full API URL - Access Token Will be returned.
            'http://ec2-3-35-217-48.ap-northeast-2.compute.amazonaws.com:8080/api/oauth/callback',
            { code: code },
            { params: { code: code } }
          );
          console.log(response.data); //JWT - AccessToken, RefreshToken 발급될 예정 (expiration date도 오는지 구분)
          localStorage.setItem('user', JSON.stringify(response.data));
          //navigate("/main"); //main으로 이동하도록 구성 - 이거 Atom으로 전역 관리해서, 이동해야하는 곳 다르게 해야할 수 있음.
          //아마 필수로 atom 사용해야할 듯
          setReadyLogin(true);
        } catch (error) {
          console.error('Error:', error);
          alert('로그인에 실패했습니다. 다시 시도해 주세요.');
          alert("지금은 테스트 중이므로, 그냥 로그인 처리 되었다고 가정합니다.")
          localStorage.setItem('user', JSON.stringify({acceessToken: "test", refreshToken: "referhesh"}));
          setReadyLogin(true);
        }
      } else {
        console.error('Authorization code not found');
        alert('Authorization code not found');
      }
    };

    sendAuthorizationCode();
  }, [navigate]);


  /*
  const navigate = useNavigate();
  //   const [userData, setUserData] = useState(null);

  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const fetchData = async () => {
      if (code) {
        // 전에 있던 페이지에 따라 어떤 페이지로 이동할 건지 분기처리 필요
        // 분기 처리 안 되면 이전 페이지로 이동
        navigate("/kakao-login");

        try {
          const token = await getToken(code);
          const userData = await getData(token);

          // 이 부분 이메일 + 닉네임 + 인가코드까지 서버에 POST
          console.log(userData);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [code, navigate]);
  */


  

  return <div>로그인 과정 페이지 </div>;
};

export default KakaoLogin;