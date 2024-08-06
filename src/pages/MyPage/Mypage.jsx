import { useEffect, useRef, useState } from "react";
import { useData } from "../../contexts/WholeContext";
import { useNavigate } from "react-router-dom";

import Header from "@components/header/Header";
import pencilIcon from "../../assets/svgs/pencil.svg";

import * as MP from "./MyPage.styled";
import QuitModal from "./QuitService/QuitModal";
import { del, get, patch } from "@apis/index";

const MyPage = () => {
  const { LoginButton, setHeader } = useData();

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [myCharacter, setMyCharacter] = useState("");
  const [originalNickname, setOriginalNickname] = useState(""); // 변경하기 이전의 사용자 이름
  const [nickname, setNickName] = useState(""); // 변경할 사용자 이름 (화면에 렌더링되는 이름)
  const [college, setCollege] = useState(""); // 단과대학
  const [collegeEmail, setCollegeEmail] = useState(""); // 대학 이메일 주소

  const inputRef = useRef();

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
        setOriginalNickname(resData.user_name);
        setMyCharacter(`/${resData.profile}_profile.svg`);
        setCollege(resData.college);
        setCollegeEmail(resData.email);
      } catch (error) {
        console.error("Error :", error);
      }
    };

    fetchUserData();
  }, [setHeader]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);

    setHeader({
      showLogo: true,
      showLoginButton: !LoginButton,
      showHamburgerButton: true,
    });
  };

  const handleCharacter = () => {
    navigate("/mypage/character");
  };

  const handleButtonClick = () => {
    if (isEditing) {
      changeNickname();
      // setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleNicknameChange = (e) => {
    setNickName(e.target.value);
  };

  const changeNickname = async () => {
    if (!nickname) {
      alert("변경할 사용자 이름을 입력하세요!");
      inputRef.current.focus();
      return;
    } else {
      // Check if the nickname has changed
      if (nickname === originalNickname) {
        alert("Nickname is the same as the original. No changes made.");
        setIsEditing(false);
        return;
      }

      const userName = {
        user_name: nickname,
      };

      try {
        const response = await patch("/api/mypage", userName);

        console.log(response.data);
        console.log(response.status);

        if (response.status === 200) {
          alert("사용자 이름이 성공적으로 변경되었습니다!");
          setIsEditing(false); // Exit edit mode on success
        } else {
          alert("Failed to update nickname. Please try again.");
        }
      } catch (error) {
        console.error("Error updating nickname:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  const handleOpenModal = () => {
    console.log("Open Modal Clicked");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 탈퇴하기 클릭 시 호출되는 함수
  const handleAccoutDeletion = async () => {
    const confirmDelete = window.confirm("정말로 탈퇴하시겠습니까?");
    if (!confirmDelete) {
      return;
    } else {
      try {
        const response = await del("/api/mypage/revoke");

        console.log(response.data);
        console.log(response.status);

        if (response.status === 200) {
          localStorage.removeItem("user");
          localStorage.removeItem("navigateUrl");
          localStorage.removeItem("isSetComplete");
          window.location.href = "/";
        } else {
          console.error("Account deletion failed");
          alert("회원 탈퇴에 실패했습니다. 다시 시도해 주세요.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("오류가 발생했습니다. 나중에 다시 시도해 주세요.");
      }
    }
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />

      {!isMenuOpen && (
        <MP.Container>
          <MP.TextButton>
            <MP.Text>마이페이지</MP.Text>
            <MP.ModifyButton onClick={handleButtonClick}>
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
                  ref={inputRef}
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
              <input type="text" value={collegeEmail} readOnly />
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
                <QuitModal
                  onHide={handleCloseModal}
                  onExit={handleAccoutDeletion}
                />
              )}
            </MP.QuitService>
          </MP.Privacy>
        </MP.Container>
      )}
    </>
  );
};

export default MyPage;
