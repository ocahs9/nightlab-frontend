import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 16px auto;

  width: 264px;

  #main-graphic {
    width: 100%;
    height: 434px;
  }
`;

export const Slogan = styled.p`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => fontStyles(theme.fonts.Subhead_2_2)}

  width: 100%;
  text-align: center;

  margin-top: 16px;

  .logo {
    width: 40%;
    vertical-align: middle;
  }
`;
