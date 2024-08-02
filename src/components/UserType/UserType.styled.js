import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// export const OptionBar = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;

//   margin: 12px auto 20px;

//   position: relative;

//   width: 100%;
//   height: 40px;

//   background-color: ${({ theme }) => theme.colors.Opacity_White_10};

//   border: 1px solid ${({ theme }) => theme.colors.White};
//   border-radius: 24px;
// `;

// export const Option = styled.button`
//   width: 175px;
//   height: 32px;

//   text-align: center;

//   font: ${(props) =>
//     props.selected
//       ? fontStyles(props.theme.fonts.Subhead_3_2)
//       : fontStyles(props.theme.fonts.Body_1_1)};

//   color: ${(props) =>
//     props.selected ? props.theme.colors.Main_Red : props.theme.colors.Gray_40};

//   background: ${(props) =>
//     props.selected ? `${props.theme.colors.Opacity_Red_10_25}` : "none"};

//   border-radius: 24px;
//   border: ${(props) =>
//     props.selected ? `1px solid ${props.theme.colors.Main_Red}` : "none"};

//   transition: border-color 0.2s, background-color 0.2s;
// `;

export const Graphic = styled.div`
  /* .graphic {
    width: 100%;
    height: 384px;

    filter: blur(6px);
  } */
`;

export const GraphicContainer = styled.div`
  width: 358px;
  height: 384px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.White};

  background: ${({ theme }) => theme.colors.Back};
`;

export const UserCount = styled.div`
  width: 100%;
  height: 329px;

  display: flex;
  justify-content: space-around;

  border-bottom: 1px solid ${({ theme }) => theme.colors.Gray_50};
`;

export const TimeContainer = styled.div`
  width: 100%;
  height: 55px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// export const Overlay = styled.div`
//   width: 99%;
//   height: 384px;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   position: absolute;
//   top: 0;
//   left: 0;

//   background: transparent;

//   border-radius: 12px;

//   .text {
//     text-align: center;

//     ${({ theme }) => fontStyles(theme.fonts.Header_4_1)}
//     color: ${({ theme }) => theme.colors.Main_Red};
//   }
// `;

export const OverlayContainer = styled.div`
  width: 100%;

  position: relative;

  .graphic-blur {
    width: 100%;
    height: 384px;

    filter: blur(6px);
  }
`;
