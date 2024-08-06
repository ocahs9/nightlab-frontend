import gentle_card from "@assets/svgs/gentle_card.svg";
import gentle from "@assets/svgs/gentle_timer.svg";
import serious_card from "@assets/svgs/serious_card.svg";
import serious from "@assets/svgs/serious_timer.svg";
import sharp_card from "@assets/svgs/sharp_card.svg";
import sharp from "@assets/svgs/sharp_timer.svg";

import refreshIcon from "@assets/svgs/icon_refresh.svg";
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
  position: relative;
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
  display: flex;
  padding: 0px 16px 30px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;

 //height: 677px;
`
export const OnlineMemeberTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`
export const OnlineMemberText = styled.div`
  color: var(--Grayscale-White, #FFF);

  /* Header/Header 3 */
  font-family: "SUITE Variable";
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 42px */
`

export const OnlineRefreshButton = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  //background-image: url(${refreshIcon});
`

export const OnlineMemberLayout = styled.div`
  display: flex;
  width: 358px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`

//내 카드 부분
export const MyOnlineCardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`
export const CantUseDiv = styled.div`
  position: absolute;
  top:0px;
  left:-10px;
  z-index: 1;
  display: inline-flex;
  width: 380px;
  height: 132px;
  padding: 31px 83px;
  justify-content: center;
  align-items: center;
  background: rgba(20, 24, 26, 0.70);
  backdrop-filter: blur(2px);

  color: var(--main-red-red-50-main, #FF7F7F);
  text-align: center;

  /* Header/Header 4-1 */
  font-family: "SUITE Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 145%; /* 34.8px */

  white-space: pre-line;
`

export const MyOnlineCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`

//내 카드에 프로필 부분(텍스트와 그래픽) 
export const MyCardProfileWrapper = styled.div`
  display: flex;
  width: 96px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`

export const MyCardProfileText = styled.span`
  align-self: stretch;
  color: #FFF;

  /* Subhead/Subhead 4 */
  font-family: "SUIT Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 18.9px */
`

const cardImages = {
  gentle: gentle_card,
  serious: serious_card,
  sharp: sharp_card,
};

export const MyCardProfileGraphic = styled.div`
  height: 96px;
  align-self: stretch;

  border-radius: 8px;
  border: 0.585px solid var(--Grayscale-White, #FFF);
  background-image: ${({ $profile }) => `url(${cardImages[$profile]})`};
`

//내 카드에 인풋 부분(인풋과 버튼) 
export const MyCardInputWrapper = styled.div`
  display: flex;
  width: 246px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`

export const MyCardInputText = styled.span`
  align-self: stretch;
  color: #FFF;

  /* Subhead/Subhead 4 */
  font-family: "SUIT Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 18.9px */
`

//인풋 안에 버튼을 넣기 위한 컨테이너
export const MyCardInputContainer = styled.div`
  position: relative;
  width: 246px;
  height: 96px;
`

export const MyCardTextArea = styled.textarea`
  display: flex;
  width: 246px;
  height: 96px;
  padding: 16px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color : ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Body_2_2};

  &::placeholder{
    color: ${({ theme }) => theme.colors.Gray_50};
  }
  &::-webkit-scrollbar {
    display: none;
  }
  border-radius: 8px;
  border: 1px solid var(--Grayscale-Gray_10, #EDF1F5);
  background: rgba(237, 241, 245, 0.25);

  resize: none;
`

export const MyCardInputButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;

  display: flex;
  width: 60px;
  height: 24px;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 18px;
  border: 1px solid var(--Grayscale-Gray_10, #EDF1F5);

  color: var(--Grayscale-Gray_10, #EDF1F5);

  /* Subhead/Subhead 4 */
  font-family: "SUIT Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 18.9px */
`



export const Line = styled.div`
  width: 358px;
  height: 1px;
  border-bottom: 2px dashed white;
`

// Others card 구현 부분
export const OthersOnlineCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

export const OtherCardWrapper = styled.div`
  display: flex;
  width: 358px;
  justify-content: space-between;
  align-items: center;
`

export const OtherCardProfileGraphic = styled.div`
  width: 96px;
  height: 96px;
  align-self: stretch;

  border-radius: 8px;
  border: 0.585px solid var(--Grayscale-White, #FFF);
  background-image: ${({ $profile }) => `url(${cardImages[$profile]})`};
`

export const OtherCardTextDivBox = styled.div`
  display: flex;
  width: 246px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  flex-shrink: 0;
`

export const OtherCardTextDiv = styled.div`
  display: flex;
  width: 246px;
  height: 74px;
  padding: 16px 22px;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  color : ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Body_2_2};

  
  &::-webkit-scrollbar {
    display: none;
  }
  border-radius: 8px;
  border: 1px solid var(--Grayscale-Gray_10, #EDF1F5);
  background: rgba(237, 241, 245, 0.25);

`

export const OtherCardSubTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const OtherCardSubText = styled.span`
  color: var(--Grayscale-Gray_50, #888E94);

  /* Caption/Caption 1-2 */
  font-family: "SUIT Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
`