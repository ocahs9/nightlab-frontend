import { css } from "styled-components";

export const fontStyles = (font) => css`
  font-family: ${font.fontFamily};
  font-weight: ${font.fontWeight};
  font-size: ${font.fontSize};
  line-height: ${font.lineHeight};
  letter-spacing: ${font.letterSpacing};
`;
