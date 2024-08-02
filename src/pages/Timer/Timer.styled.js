import styled from "styled-components";

export const TimerPageWrapper = styled.section`
  display: flex;
  width: 390px;
  flex-direction: column;
  align-items: flex-start;
  gap: 124px;
`

/*
  타이머 부분
*/
export const TimerWrapper = styled.article`
  height: 646px;
  align-self: stretch;
`

export const TimerTitle = styled.span`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Header_3};
`

export const MyStatusWrapper = styled.div`
  display: flex;
  width: 196px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`

export const MyStatusTimer = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Header_4_1};
`
export const MyStatusGraphic = styled.div`
  height: 337px;
  align-self: stretch;
`


/*
  온라인 멤버 부분
*/
export const OnlineMemberWrapper = styled.article`

`