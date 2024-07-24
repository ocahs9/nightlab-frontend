const colors = {
  /* GrayScale */
  White: "#FFFFFF",

  Gray_5: "#FAFAFB",
  Gray_10: "#EDF1F5",
  Gray_20: "#DDE1E8",
  Gray_30: "#BFC2C8",
  Gray_40: "#A3A8AE",
  Gray_50: "#888E94",
  Gray_60: "#6B7276",
  Gray_70: "#515356",
  Gray_80: "#3C3E41",
  Gray_90: "#2C2D30",
  Gray_100: "#181A1B",

  Black: "#000000",

  /* Brand Color - Main Red */
  Main_Red: "#FF7177",
  Sub_Red_10: "#FEE6E6",
  Sub_Red_20: "#FFCCCC",
  Sub_Red_30: "#FFB3B3",
  Sub_Red_40: "#FF8A8A",
  Sub_Red_50: "#FF7177",
  Sub_Red_60: "#FF4C4C",
  Sub_Red_70: "#FF3333",
  Sub_Red_80: "#FF1A1A",
  Sub_Red_90: "#FF0000",

  /* Brand Color - Sub Color */
  Pale_Yellow: "#FFEED1",
  Yellow: "#FFDD60",
  Lavender: "#D1C3F6",
  Violet: "#5D6DA6",

  /* UI Background */
  Background_Black: "#16181A",

  /* Opacity가 적용된 색상 정의 */
  Opacity_White_25: "rgba(255, 255, 255, 0.25)",
  Opacity_White_50: "rgba(255, 255, 255, 0.50)",
  Opacity_Red_10_25: "rgba(255, 204, 204, 0.25)",
  Opacity_Red_10_70: "rgba(255, 204, 204, 0.70)",
  Opacity_Red_20_70: "rgba(255, 153, 153, 0.70)",
  Opacity_Red_50_25: "rgba(255, 113, 119, 0.25)",

  Opacity_Background_Black_70: "rgba(22, 24, 26, 0.70)",
};

const fonts = {
  /* Header */
  Header_1: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 800,
    fontSize: "36px",
    lineHeight: "150%",
    letterSpacing: "0%",
  },

  Header_2: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 800,
    fontSize: "32px",
    lineHeight: "150%",
    letterSpacing: "0%",
  },

  Header_3: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 800,
    fontSize: "28px",
    lineHeight: "150%",
    letterSpacing: "0%",
  },

  Header_4_1: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 800,
    fontSize: "24px",
    lineHeight: "145%",
    letterSpacing: "0%",
  },

  Header_4_2: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "145%",
    letterSpacing: "0%",
  },

  Header_5_1: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 800,
    fontSize: "20px",
    lineHeight: "145%",
    letterSpacing: "0%",
  },

  Header_5_2: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "145%",
    letterSpacing: "0%",
  },

  /* SubHead */
  Subhead_1: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "135%",
    letterSpacing: "0%",
  },

  Subhead_2_1: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 800,
    fontSize: "18px",
    lineHeight: "140%",
    letterSpacing: "0%",
  },

  Subhead_2_2: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "135%",
    letterSpacing: "0%",
  },

  Subhead_3_1: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 800,
    fontSize: "16px",
    lineHeight: "140%",
    letterSpacing: "0%",
  },

  Subhead_3_2: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "135%",
    letterSpacing: "0%",
  },

  Subhead_4: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "135%",
    letterSpacing: "0%",
  },

  /* Body */
  Body_1_1: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "140%",
    letterSpacing: "0%",
  },

  Body_1_2: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "140%",
    letterSpacing: "0%",
  },

  Body_2_1: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "140%",
    letterSpacing: "0%",
  },

  Body_2_2: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "140%",
    letterSpacing: "0%",
  },

  /* Caption */
  Caption_1_1: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "130%",
    letterSpacing: "0%",
  },

  Caption_1_2: {
    fontFamily: "'SUIT Variable', sans-serif",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "130%",
    letterSpacing: "0%",
  },
};

const theme = {
  colors,
  fonts,
};

export default theme;
