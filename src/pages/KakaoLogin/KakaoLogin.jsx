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
      console.log(code);
      if (code) {
        try {
          const response = await axios.post(
            //Backend Full API URL - Access Token Will be returned.
            'https://nightlab.site/auth/kakao/login',
            { access_code: code },
            //{ params: { code: code } }
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
          localStorage.setItem('user', JSON.stringify({acceess_token: "test", refresh_token: "referhesh"}));
          setReadyLogin(true);
        }
      } else {
        console.error('Authorization code not found');
        alert('Authorization code not found');
      }
    };

    sendAuthorizationCode();
  }, [navigate]);

  
  return <div>로그인 과정 페이지 </div>;
};

export default KakaoLogin;