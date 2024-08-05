import { useEffect, useState } from "react";
import { useData } from "../../contexts/WholeContext";
import { useNavigate } from "react-router-dom";

import Header from "@components/header/Header";
import pencilIcon from "../../assets/svgs/pencil.svg";

import * as MP from "./MyPage.styled";
import QuitModal from "./QuitService/QuitModal";
import { del, get, patch } from "@apis/index";

const MyPage = () => {
  const { isMenuOpen, setIsMenuOpen, setHeader } = useData();

  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [myCharacter, setMyCharacter] = useState(null);
  const [nickname, setNickName] = useState(null);
  const [college, setCollege] = useState(null);

  useEffect(() => {
    setHeader({
      showLogo: true,
      showLoginButton: true,
      showHamburgerButton: true,
    });

    const fetchUserData = async () => {
      try {
        const response = await get("/api/mypage");
        const resData = await response.data;
        console.log(resData);

        setNickName(resData.user_name);
        setMyCharacter(`/${resData.profile}_profile.svg`);
        setCollege(resData.college);
      } catch (error) {
        // console.error("Error :", error);
      }
    };

    // // Local Storage를 활용한 기능 구현
    // const savedCharacter = localStorage.getItem("selectedCharacter");
    // if (savedCharacter) {
    //   const savedCharacterPath = `/${savedCharacter}_profile.svg`;
    //   setMyCharacter(savedCharacterPath);
    // }

    // const savedNickName = localStorage.getItem("finalNickName");
    // if (savedNickName) {
    //   setNickName(savedNickName);
    // }

    fetchUserData();
  }, [setHeader]);

  // const ChangeUserInfo = async () => {
  //   const userData = {};

  //   if (college.trim()) {
  //     userData.college = college;
  //   }
  //   if (nickname.trim()) {
  //     userData.user_name = userName;
  //   }
  //   if (myCharacter.trim()) {
  //     userData.profile = profile;
  //   }

  //   // 데이터가 없는 경우 요청을 보내지 않음
  //   if (Object.keys(userData).length === 0) {
  //     console.log("수정할 정보가 없습니다.");
  //     return;
  //   }

  //   try {
  //     const response = await patch("/api/mypage", userData);

  //     console.log(response);

  //     if (response.ok) {
  //       console.log("회원 정보가 성공적으로 수정되었습니다!");
  //     } else {
  //       console.log("회원 정보 수정 실패;");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCharacter = () => {
    navigate("/mypage/character");
  };

  // patch 기능 구현해야함
  const handleCollege = (e) => {
    setCollege(e.target.value);
  };

  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  const handleNicknameChange = (e) => {
    const ChangedNickName = e.target.value;

    if (ChangedNickName !== nickname) {
      setNickName(ChangedNickName);
      localStorage.setItem("finalNickName", ChangedNickName);
    }
  };

  const handleOpenModal = () => {
    console.log("Open Modal Clicked");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleWithdrawl = async () => {
    try {
      const response = del("/api/mypage/revoke");

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    // console.log(`${nickname}님이 탈퇴하였습니다.`);
    // navigate("/");
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />

      {!isMenuOpen && (
        <MP.Container>
          <MP.TextButton>
            <MP.Text>마이페이지</MP.Text>
            <MP.ModifyButton onClick={toggleEditMode}>
              {isEditing ? "확인" : "수정하기"}
            </MP.ModifyButton>
          </MP.TextButton>

          <MP.Profile>
            <MP.CharacterSection>
              {isEditing && (
                <>
                  <MP.Overlay onClick={handleCharacter}>
                    <img
                      src={pencilIcon}
                      alt="pencil-icon"
                      className="pencil-icon"
                    />
                  </MP.Overlay>
                </>
              )}
              <img src={myCharacter} alt="Character" className="character" />
            </MP.CharacterSection>

            <MP.NickNameSection>
              {isEditing ? (
                <input
                  type="text"
                  value={nickname}
                  className="modifying-nickname"
                  onChange={handleNicknameChange}
                />
              ) : (
                <h4 className="nickname">{nickname}</h4>
              )}
            </MP.NickNameSection>
          </MP.Profile>

          <MP.Privacy>
            <MP.Mail>
              <h5>학교 메일 주소</h5>
              <input type="text" />
            </MP.Mail>
            <MP.Major>
              <h5>단과대학</h5>
              <input type="text" value={college} readOnly />
            </MP.Major>

            <MP.QuitService>
              <h5 className="leave-btn" onClick={handleOpenModal}>
                탈퇴하기
              </h5>
              <p className="caution">탈퇴하면 정보를 복구할 수 없어요</p>
              {isModalOpen && (
                <QuitModal onHide={handleCloseModal} onExit={handleWithdrawl} />
              )}
            </MP.QuitService>
          </MP.Privacy>
        </MP.Container>
      )}
    </>
  );
};

export default MyPage;
