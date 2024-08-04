import pen from "@assets/svgs/icon_pen.svg";
import pen_red from "@assets/svgs/icon_pen_red.svg";
import icon_x from "@assets/svgs/icon_x.svg";
import icon_x_red from "@assets/svgs/icon_x_red.svg";
import { Ic36 } from "@assets/svgs/index";
import todoBackground from "@assets/svgs/todoList_background.svg";
import styled from "styled-components";

export const TodoWrapper = styled.div`
  position: absolute; //TimerWrapper 기준 위치
  top: 86px;
  left: 21px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 35.8rem;
  height: 33rem;
`

export const TodoIconWrapper = styled.div`
  display: flex;
  width: 36px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const TodoText = styled.span`
  color: var(--Main-Red-Red_10, #FFE6E6);
  text-align: center;

  /* Caption/Caption 1-1 */
  font-family: "SUIT Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
`

export const TodoIcon = styled(Ic36)`
  width: 36px;
  height: 36px;
  cursor: pointer;
`
//투두리스트 전체
export const TodoListWrapper = styled.div`
  background-image: url(${todoBackground});
  width: 358px;
  //height: 274px;
  flex-shrink: 0;
  padding: 28px 16px 17px 16px;
  border-radius: 8px;
`
//투두 리스트 내용물
export const TodoListLayout = styled.div`
  display: flex;
  width: 326px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`
//투두 헤더
export const TodoListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`
export const TodoListTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--main-red-red-70-sub, #FD4C4C);
  ${({ theme }) => theme.fonts.Header_5_1};
  
`

export const TodoListCloseBtn = styled.button`
 display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`

//투두 리스트를 담을 컨테이너
export const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`
//개별 투두리스트 박스
export const TodoListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

//하나의 박스에서 왼쪽 부분 
export const TodoListBoxContent = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`
export const TodoListBoxText = styled.span`
  color: var(--Grayscale-Gray_100, #181A1B);

  /* Body/Body 1-1 */
  font-family: "SUIT Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
`

export const TodoListBoxEdit = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const TodoListBoxEditBtn = styled.button`
  background-image: url( ${({ $red }) => $red? pen_red: pen});
    display: flex;
  width: 24px;
  height: 24px;
  padding: 5px 4px 4px 5px;
  justify-content: center;
  align-items: center;

  background-repeat: no-repeat; /* 이미지 반복 없음 */
  background-position: center; /* 중앙에 위치 */
  //background-size: contain; /* 요소 내에 맞춤 */
`

export const TodoListBoxDeleteBtn = styled.button`
  background-image: url( ${({ $red }) => $red? icon_x_red: icon_x});

  display: flex;
  width: 24px;
  height: 24px;
  padding: 5px 4px 4px 5px;
  justify-content: center;
  align-items: center;
`