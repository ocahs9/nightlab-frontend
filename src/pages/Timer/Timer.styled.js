import gentle from "@assets/svgs/gentle_timer.svg";
import serious from "@assets/svgs/serious_timer.svg";
import sharp from "@assets/svgs/sharp_timer.svg";
import styled, { css } from "styled-components";


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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TimerTitle = styled.span`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Header_3};
  align-self: flex-start;
  margin-left: 16px;
  margin-bottom: 24px;
`

export const MyStatusWrapper = styled.div`
  display: flex;
  width: 205px; //196px 인데 그냥 좀 늘림(글자 넘어가서)
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`

export const MyStatusTimer = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Header_4_1};
`

// 프로필 이름을 SVG 경로와 매핑하는 객체
const profileImages = {
  gentle,
  serious,
  sharp,
};

//gentle, sharp, serious
export const MyStatusGraphic = styled.div`
  height: 337px;
  align-self: stretch;
  background-image: ${({ $profile }) => `url(${profileImages[$profile]})`};
`
export const TimerButtonWrapper = styled.div`
  display: flex;
  width: 358px;
  min-height: 128px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
`

export const TimerButton = styled.button`
  display: flex;
  width: 358px;
  height: 56px;
  padding: 16px 96px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 28px;
  color: var(--Grayscale-White, #FFF);
  border: 1px solid var(--Grayscale-White, #FFF);
  background: rgba(255, 255, 255, 0.25);
  
  ${({ $disabled }) => !$disabled && css`
    &:hover{
      color: var(--main-red-red-50-main, #FF7F7F);
      border: 1px solid var(--main-red-red-50-main, #FF7F7F);
      background: rgba(255, 127, 127, 0.25);
    }
  `};

  ${({ $redMode }) => $redMode&& css`
      color: var(--main-red-red-50-main, #FF7F7F);
      border: 1px solid var(--main-red-red-50-main, #FF7F7F);
      background: rgba(255, 127, 127, 0.25);
  `};
  

  ${({ $disabled }) => $disabled && css`
    color: rgba(237, 241, 245, 0.25);
    border: 1px solid rgba(237, 241, 245, 0.25);
    background: rgba(237, 241, 245, 0.25);
    cursor: not-allowed;
  `};

  ${({ $stopText }) => $stopText && css`
    color: var(--main-red-red-50-main, #FF7F7F);
    border: 1px solid var(--main-red-red-50-main, #FF7F7F);
    background: rgba(255, 127, 127, 0.25);
  `};
`
export const TimerSubTitle = styled.div`
  width: 358px;
  color: ${({ theme }) => theme.colors.Gray_50};
  text-align: center;
  ${({ theme }) => theme.fonts.Caption_1_2};
`

/*
  온라인 멤버 부분
*/
export const OnlineMemberWrapper = styled.article`
  height: 677px;
  align-self: stretch;
`

export const OnlineMemberLayout = styled.div`
  display: flex;
  width: 358px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`

export const MyOnlineCardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`

export const Line = styled.div`
  width: 358px;
  height: 1px;
  background: #FFF;
  border-bottom: 1px dotted white;
`

export const OthersOnlineCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`