import { fontStyles } from "@styles/mixins";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  width: 340px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 28px auto;
  margin-top: 67px;

  h3 {
    ${({ theme }) => fontStyles(theme.fonts.Header_3)}
    color: ${({ theme }) => theme.colors.White};

    text-align: center;
  }

  p {
    ${({ theme }) => fontStyles(theme.fonts.Body_2_2)}
    color: ${({ theme }) => theme.colors.White};

    text-align: center;

    margin-top: 12px;
  }
`;

export const CharacterOption = styled.div`
  width: 340px;
  height: 340px;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Character = styled.button`
  width: 164px;
  height: 164px;

  border-radius: 8px;

  background: url(${({ $imgSrc }) => $imgSrc});
  opacity: ${({ $isSelected }) => ($isSelected ? "1.0" : "0.4")};
  mix-blend-mode: ${({ $isSelected }) =>
    $isSelected ? "normal" : "luminosity"};

  &:hover {
    opacity: 1;
    mix-blend-mode: normal;
  }
`;

export const CompleteButton = styled.button`
  width: 358px;
  height: 56px;

  margin-top: 44px;
  padding: 16px 96px;

  border-radius: 28px;

  ${({ theme }) => fontStyles(theme.fonts.Subhead_3_2)}

  ${({ $isFormCompleted }) =>
    $isFormCompleted
      ? css`
          color: ${({ theme }) => theme.colors.Main_Red};
          background: rgba(255, 127, 127, 0.25);
          border: 1px solid ${({ theme }) => theme.colors.Main_Red};
        `
      : css`
          color: rgba(237, 241, 245, 0.25);
          border: 1px solid rgba(237, 241, 245, 0.25);
          background: rgba(237, 241, 245, 0.25);
        `}
`;
