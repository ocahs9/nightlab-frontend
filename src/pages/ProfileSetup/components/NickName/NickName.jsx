//import { post } from "@apis/index";
import { IcCheckBefore, IcCheckSuccess } from "@assets/svgs/index";
import PropTypes from 'prop-types';
import * as S from "./NickName.styled";

const NickName = ({nickName, setNickName, setNickNameOk}) => {
  console.log("닉네임:",nickName);
  
//와프 구성 때문에, nickNameOk 도 가져와서 이를 그냥 change 될떄마다 api를 쏴야할수도..?
//근데 그건 너무 비효율적이니, 임의로 체크 버튼을 눌러야하는 걸로 만들자.
  const handleChangeNickName = (e) => {
    setNickName(e.target.value);
    setNickNameOk(false); //변경하는 순간 다시 검사 맡도록 수정
  }

  const handleNickNameCheckBtn = async() => {
    if(nickName !== "") //빈 문자열이면 애초에 확인이 안되도록
    {
      setNickNameOk(true); //일단 전부 오케이하도록 
      alert("사용할 수 있는 닉네임입니다.");
    /*
    try{
      const response = await post("/auth/check/nickname", {
        user_name : nickName 
      })
      console.log(response);
      setNickNameOk(true);
    }
    catch(e){
      console.error("Error", e);
      setNickNameOk(false);
    }
      */
    }
    
  }
  
  return (
    <S.NickNameWrapper>
      <S.InputAndButton>
        <S.NickNameInput 
          onChange={handleChangeNickName} 
          value={nickName} 
          placeholder={"닉네임을 입력해 주세요"}
        />
        <S.NickNameBtn disabled={nickName === ""} onClick={handleNickNameCheckBtn}>
          {nickName === "" ? <IcCheckBefore/> : <IcCheckSuccess/>}
        </S.NickNameBtn>
      </S.InputAndButton>
      
    </S.NickNameWrapper>
  )
}

NickName.propTypes = {
  nickName: PropTypes.string.isRequired,
  setNickName: PropTypes.func.isRequired,
  setNickNameOk: PropTypes.func.isRequired
}

export default NickName
