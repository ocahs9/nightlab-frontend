import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: 114px;
  padding: 0 16px;

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
    width: 122px;
    margin-right: 4px;
  }
`;
