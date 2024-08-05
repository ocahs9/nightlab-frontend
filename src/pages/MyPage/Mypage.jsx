import { useEffect, useState } from "react";
import { useData } from "../../contexts/WholeContext";
import { useNavigate } from "react-router-dom";

import Header from "@components/header/Header";
import pencilIcon from "../../assets/svgs/pencil.svg";

import * as MP from "./MyPage.styled";
import QuitModal from "./QuitService/QuitModal";

const MyPage = () => {
  const { setHeader } = useData();

  const navigate = useNavigate();

  const dummyName = "김철흥";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [myCharacter, setMyCharacter] = useState(`/gentle_profile.svg`);
  const [nickname, setNickName] = useState(dummyName);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setHeader({
      showLogo: true,
      showLoginButton: true,
      showHamburgerButton: true,
    });

    const savedCharacter = localStorage.getItem("selectedCharacter");
    if (savedCharacter) {
      const savedCharacterPath = `/${savedCharacter}_profile.svg`;
      setMyCharacter(savedCharacterPath);
    }

    const savedNickName = localStorage.getItem("finalNickName");
    if (savedNickName) {
      setNickName(savedNickName);
    }
  }, [setHeader]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCharacter = () => {
    navigate("/mypage/character");
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

  const handleQuit = () => {
    console.log(`${nickname}님이 탈퇴하였습니다.`);
    navigate("/");
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
              <input type="text" />
            </MP.Major>

            <MP.QuitService>
              <h5 className="leave-btn" onClick={handleOpenModal}>
                탈퇴하기
              </h5>
              <p className="caution">탈퇴하면 정보를 복구할 수 없어요</p>
              {isModalOpen && (
                <QuitModal show={isModalOpen} onHide={handleCloseModal} onExit={handleQuit} />
              )}
            </MP.QuitService>
          </MP.Privacy>
        </MP.Container>
      )}
    </>
  );
};

export default MyPage;
