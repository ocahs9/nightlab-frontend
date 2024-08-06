import { post } from "@apis/index";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./MemberPage.styled";
import Header from "@components/header/Header";
import { useData } from "/src/contexts/WholeContext";
const MemberPage = () => {
  const { LoginButton, setHeader } = useData();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [todos, setTodos] = useState({
    1: { text: "" },
    2: { text: "" },
    3: { text: "" },
    4: { text: "" },
    5: { text: "" },
  });
  const [isAnyInput, setIsAnyInput] = useState(false);
  const [newTodoIds, setNewTodoIds] = useState([]); // 생성된 todo의 ID를 저장할 상태

  useEffect(() => {
    setHeader({
      showLogo: true,
      showLoginButton: true,
      showHamburgerButton: true,
    });

    //some 메서드는 하나라도 주어진 조건을 만족하면 true를 반환함
    const hasAnyInput = Object.values(todos).some(
      (todo) => todo.text.trim() !== ""
    );
    setIsAnyInput(hasAnyInput);
  }, [todos]);

  const handleChangeInput = (id) => (e) => {
    setTodos((prevTodos) => ({
      ...prevTodos,
      [id]: {
        ...prevTodos[id],
        text: e.target.value,
      },
    }));
  };

  const navigate = useNavigate();

  //그냥 귀찮다고 api를 onClick에 반환하는 형식으로 하면 안됨.
  //내부적으로 실행되어야 함..
  const todoCreateApi = async () => {
    //빈 문자열이 아닌 것만 요청에 포함시키도록 로직 변경
    const filteredTodos = Object.values(todos).filter(
      (todo) => todo.text.trim() !== ""
    );
    const formattedTodos = filteredTodos.map((todo) => ({
      text: todo.text,
    }));
    /*const formattedTodos = Object.values(todos).map((todo)=>({
      text: todo.text
    }));*/
    try {
      const response = await post("/api/todo", {
        todo: formattedTodos,
      });

      console.log(response);
      const createdIds = response.data.data.todo.map((item) => item.id); //방금 생성한 id들만 뽑아냄
      setNewTodoIds(createdIds); // ID들 저장
      navigate("/timer", { state: { newTodoIds: createdIds } }); //ID들 전달하면서 navigate
    } catch (error) {
      console.log("정상적으로 등록되지 않았습니다.");
      console.error(error);
    }
  };

  const handleCompleteButton = () => {
    todoCreateApi();
  };

  const handleSkipButton = () => {
    navigate("/timer");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);

    setHeader({
      showLogo: true,
      showLoginButton: !LoginButton,
      showHamburgerButton: true,
    });
  };

  const scrollToSection = () => {
    window.location.href = "/";
  };

  const targetSectionRef = useRef(null);
  const sidebarbtnclick = () => {
    // sidebar 닫히게 하는 로직
    setTimeout(() => {
      if (targetSectionRef.current) {
        targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0); // 스크롤 이동 (메인 페이지가 렌더링 된 이후)
  };

  return (
    <>
      <Header
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
        livescroll={sidebarbtnclick}
      />
      {!isMenuOpen && (
        <S.MemberPageWrapper>
          <S.MemberPageLayout>
            <S.TopBox>
              <S.TopBoxTitle>작업 타이머</S.TopBoxTitle>
              <S.GoalBox>
                <S.GoalBoxTitle>오늘의 목표 작업</S.GoalBoxTitle>
                <S.GoalBoxContents>
                  {Object.entries(todos).map(([id, todo]) => (
                    <S.GoalBoxContentInput
                      key={id}
                      onChange={handleChangeInput(id)}
                      value={todo.text}
                      placeholder={"to-do를 입력해주세요"}
                    />
                  ))}
                </S.GoalBoxContents>
              </S.GoalBox>
            </S.TopBox>
            <S.ButtonWrapper>
              <S.Button
                onClick={handleCompleteButton}
                disabled={!isAnyInput}
                $isDisabled={!isAnyInput}
              >
                완료
              </S.Button>
              <S.Button onClick={handleSkipButton} $isDisabled={false}>
                건너뛰기
              </S.Button>
            </S.ButtonWrapper>
          </S.MemberPageLayout>
        </S.MemberPageWrapper>
      )}
    </>
  );
};

export default MemberPage;
