import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 96px;

  .title {
    margin-left: 16px;

    ${({ theme }) => fontStyles(theme.fonts.Header_3)}
    color: ${({ theme }) => theme.colors.White};
  }

  .start-btn {
    width: 358px;
    height: 56px;
    align-self: center;
    
    padding: 16px 96px;

    ${({ theme }) => fontStyles(theme.fonts.Subhead_3_2)}
    color: ${({ theme }) => theme.colors.White};
    background: ${({ theme }) => theme.colors.Opacity_White_25};

    border: 1px solid ${({ theme }) => theme.colors.White};
    border-radius: 28px;
  }
`;
