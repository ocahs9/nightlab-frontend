import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  background-color: rgba(20, 24, 26, 0.7);
`;

export const QuitModal = styled.div`
  width: 300px;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 1010;

  background: ${({ theme }) => theme.colors.Gray_70};

  border-radius: 8px;
`;

export const QuitModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 54px;
  left: 28px;

  h4 {
    ${({ theme }) => fontStyles(theme.fonts.Header_3)}
    color: ${({ theme }) => theme.colors.Main_Red};
  }

  p {
    ${({ theme }) => fontStyles(theme.fonts.Subhead_3_2)}
    color: ${({ theme }) => theme.colors.White};

    margin: 12px 0 28px 0;
  }
`;

export const QuitModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;
`;

export const ReturnButton = styled.button`
  width: 242px;
  height: 40px;

  padding: 8px 85px;

  border-radius: 8px;

  ${({ theme }) => fontStyles(theme.fonts.Subhead_3_2)}
  color: ${({ theme }) => theme.colors.White};

  background: ${({ theme }) => theme.colors.Main_Red};
`;

export const QuitButton = styled.button`
  width: 45px;

  padding-bottom: 4px;

  ${({ theme }) => fontStyles(theme.fonts.Caption_1_1)}
  color: ${({ theme }) => theme.colors.Gray_30};

  border-bottom: 1px solid ${({ theme }) => theme.colors.Gray_30};
`;
