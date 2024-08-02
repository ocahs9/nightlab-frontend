import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  width: 358px;
  height: 22px;

  display: flex;
  justify-content: end;

  margin: 24px auto;
`;

export const TopButton = styled.button`
  width: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  .top-arrow {
    display: inline-block;
  }

  /* .text {
    color: ${({ theme }) => theme.colors.White};
    ${({ theme }) => fontStyles(theme.fonts.Caption_1_2)}
  } */
`;
