import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 96px;

  .title {
    ${({ theme }) => fontStyles(theme.fonts.Header_4_1)}
    color: ${({ theme }) => theme.colors.White};

    text-align: center;
  }

  .stamp {
    width: 220px;
    height: 220px;

    margin: 28px auto;

    border-radius: 2px;

    box-shadow: 4px 2px 10px rgba(255, 255, 255, 0.4),
      -4px -2px 10px rgba(255, 255, 255, 0.4);
  }

  .caution {
    color: ${({ theme }) => theme.colors.Main_Red};
  }
`;
