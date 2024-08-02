import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */

  margin-top: 96px;

  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => fontStyles(theme.fonts.Header_3)}

  .clock {
    display: inline-block;
    width: 118px;
  }
`;
