import styled from "styled-components";

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
  width: 29rem; //그냥 조금 늘림 
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

export const InputWrapper = styled.div`
  display: flex;
  padding: 28px 16px 0px 16px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

export const DropDown = styled.div`
  display: flex;
  width: 358px;
  height: 52px;
  padding: 16px;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  border: 1px solid var(--Grayscale-Gray_10, #EDF1F5);
  background: rgba(237, 241, 245, 0.25);
  color: white;
  ${({ theme }) => theme.fonts.Body_1_2};
`