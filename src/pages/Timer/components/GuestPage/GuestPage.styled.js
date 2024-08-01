import no_login_graphic from "@assets/svgs/no_login_graphic.svg";
import styled from "styled-components";

export const GuestPageWrapper = styled.section`
  width: 37.5rem;
  min-height: 66.7rem;//75.6rem; -> 844 - 88
  background-color: ${({ theme }) => theme.colors.Background_Black};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ $gap }) => $gap? `${$gap}rem` : "26.4rem"}; 
`

export const BodyWrapper = styled.article`
  display: flex;
  width: 358px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

export const TextWrapper = styled.div`
  display: flex;
  width: 305px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Header_2};
`

export const SubTitle = styled.span`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Body_2_2};
  white-space: pre-line;  //개행 인식하기 위해서
  text-align: center;
`

export const GraphicImg = styled.div`
  display: flex;
  width: 276px;
  height: 271px;
  justify-content: center;
  align-items: center;
  background-image: url(${no_login_graphic});
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

export const Button = styled.button`
  display: flex;
  height: 56px;
  padding: 16px 96px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 28px;
  border: 1px solid #FFF;
  background: rgba(255, 255, 255, 0.25);

  color: var(--Grayscale-White, #FFF);

  /* Subhead/Subhead 3-2 */
  font-family: "SUIT Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 21.6px */

  &:hover{
    border: 1px solid var(--main-red-red-50-main, #FF7F7F);
    background: rgba(255, 127, 127, 0.25);
    color: ${({ theme }) => theme.colors.Main_Red};
  }
`

