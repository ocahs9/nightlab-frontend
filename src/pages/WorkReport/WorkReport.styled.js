import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 375px;
  height: 600px;

  position: absolute;
  top: 0;

  .message {
    color: ${({ theme }) => theme.colors.Opacity_White_50};
    ${({ theme }) => fontStyles(theme.fonts.Subhead_3_2)};
  }
`;

export const ProgressionBar = styled.div`
  width: 200px;
  height: 20px;

  overflow: hidden;

  margin-top: 16px;

  background: rgba(245, 245, 245, 0.9);

  border-radius: 18px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;
