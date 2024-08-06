import styled, { css } from "styled-components";

export const MemberPageWrapper = styled.section`
  display: flex;
  width: 375px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 124px;
`

export const MemberPageLayout = styled.article`
  display: flex;
  width: 358px;
  flex-direction: column;
  align-items: flex-start;
  gap: 93px;
  margin-top: 24px;
`

//윗 부분(todo 적어두는 부분)
export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`

export const TopBoxTitle = styled.span`
  align-self: stretch;
  color: var(--Grayscale-White, #FFF);

  /* Header/Header 3 */
  font-family: "SUITE Variable";
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 42px */
`

export const GoalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`

export const GoalBoxTitle = styled.div`
  align-self: stretch;

  color: var(--Grayscale-White, #FFF);
  text-align: center;

  /* Header/Header 4-1 */
  font-family: "SUITE Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 145%; /* 34.8px */
`

export const GoalBoxContents = styled.div`
  display: flex;
  height: 268px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`

export const GoalBoxContentInput = styled.input`
  display: flex;
  width: 358px;
  height: 44px;
  padding: 16px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 8px;
  border: 1px solid var(--Grayscale-Gray_10, #EDF1F5);
  background: rgba(237, 241, 245, 0.25);

  color: var(--Grayscale-Gray_5, #FAFAFB);

  /* Body/Body 1-2 */
  font-family: "SUIT Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */

  &::placeholder{
    color: var(--Grayscale-Gray_50, #888E94);
  }
`

//아래 부분 - 버튼 wrapper
export const ButtonWrapper= styled.div`
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
  

  /* Subhead/Subhead 3-2 */
  font-family: "SUIT Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; 

  ${({ $isDisabled }) => $isDisabled ? css`
    border: 1px solid rgba(237, 241, 245, 0.25);
    background: rgba(237, 241, 245, 0.25);
    color: rgba(237, 241, 245, 0.25);
    cursor: not-allowed;
  ` : css`
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.25);
    color: var(--Grayscale-White, #FFF);
  `};
`