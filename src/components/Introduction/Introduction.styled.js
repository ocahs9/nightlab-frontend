import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  // NavBar fixed 이면 93px
  margin-top: 24px;

  padding: 0 16px;

  color: ${({ theme }) => theme.colors.White};

  .daily-users {
    ${({ theme }) => fontStyles(theme.fonts.Header_2)};
  }

  .intro {
    ${({ theme }) => fontStyles(theme.fonts.Body_1_2)};

    margin-top: 12px;
  }
`;
