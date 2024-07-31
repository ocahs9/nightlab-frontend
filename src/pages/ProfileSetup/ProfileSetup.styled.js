import styled, { css } from "styled-components";

export const ProfileSetupWrapper = styled.div`
  width: 37.5rem;
  min-height: 66.7rem;//75.6rem; -> 844 - 88
  background-color: ${({ theme }) => theme.colors.Background_Black};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26.4rem;
`

export const BodyWrapper = styled.div`
  display: flex;
  width: 39rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6.8rem;
`

export const TextWrapper = styled.div`
  display: flex;
  width: 39rem; //그냥 조금 늘림 -> 확 늘림 (29에서 39로)
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Header_3};
`

export const SubTitle = styled.span`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Body_2_2};
`

export const NextBtn = styled.button`
  display: flex;
  width: 358px;
  height: 56px;
  padding: 16px 96px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 28px;

  ${({ $isFormCompleted }) => $isFormCompleted ? 
  css`
    border: 1px solid var(--main-red-red-50-main, #FF7F7F);
    background: rgba(255, 127, 127, 0.25);
    color: ${({ theme }) => theme.colors.Main_Red};
  `
  : 
  css`
    border: 1px solid rgba(237, 241, 245, 0.25);
    background: rgba(237, 241, 245, 0.25);
    color: rgba(237, 241, 245, 0.25);
  `
};
  

/* Subhead/Subhead 3-2 */
  ${({ theme }) => theme.fonts.Subhead_3_2}
`