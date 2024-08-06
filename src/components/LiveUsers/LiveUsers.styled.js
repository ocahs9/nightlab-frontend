import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: 60px;
  padding: 0 16px;
  padding-top: 54px;

  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => fontStyles(theme.fonts.Header_3)}
`;

export const Text = styled.div`
  width: 100%;

  margin-bottom: 24px;

  .clock-line {
    display: inline-block;
    width: 200px;
  }

  .clock {
    display: inline-block;
    min-width: 118px;
    max-width: 122px;
  }
`;
