import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 188px;

  position: relative;

  background: linear-gradient(180deg, #ff7f7f 0%, #ff1d1d 258.51%);
`;

export const TextButton = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  top: 22px;
  left: 16px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => fontStyles(theme.fonts.Header_4_2)}
`;

export const ModifyButton = styled.button`
  padding: 4px 12px;
  margin-left: 8px;

  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.White};

  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => fontStyles(theme.fonts.Caption_1_2)}
`;

export const Profile = styled.div`
  width: 164px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 88px;
  left: 113px;

  .character {
    width: 100%;
    height: 164px;
  }
`;

// Profile 내 Character Section

export const CharacterSection = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  width: 164px;
  height: 164px;

  position: absolute;
  top: 0;
  left: 0;

  background: rgba(20, 24, 26, 0.5);

  border-radius: 8px;

  .pencil-icon {
    position: absolute;
    top: 50px;
    left: 50px;
  }
`;

// Profile 내 NickName Section

export const NickNameSection = styled.div`
  display: flex;
  justify-content: center;

  .modifying-nickname {
    width: 100%;

    margin-top: 20px;

    text-align: center;

    color: ${({ theme }) => theme.colors.White};
    ${({ theme }) => fontStyles(theme.fonts.Header_4_1)}

    border-bottom: 1px solid ${({ theme }) => theme.colors.Main_Red};
  }

  .nickname {
    margin: 20px auto 0;

    color: ${({ theme }) => theme.colors.White};
    ${({ theme }) => fontStyles(theme.fonts.Header_4_2)}
  }
`;

export const Privacy = styled.div`
  width: 358px;

  display: flex;
  flex-direction: column;

  margin-top: 18px;

  position: absolute;
  top: 327px;
  left: 16px;

  h5 {
    color: ${({ theme }) => theme.colors.White};
    ${({ theme }) => fontStyles(theme.fonts.Subhead_3_2)}
  }

  input {
    width: 100%;
    height: 52px;

    margin-top: 8px;
    margin-bottom: 32px;
    padding: 16px;

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.Gray_10};

    background: ${({ theme }) => theme.colors.Opacity_White_25};

    ${({ theme }) => fontStyles(theme.fonts.Body_1_2)}
    color: ${({ theme }) => theme.colors.White};
  }
`;

export const Mail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Major = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuitService = styled.div`
  width: 100%;
  height: 22px;

  display: flex;
  align-items: center;

  .leave-btn {
    width: 56px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.White};
  }

  .caution {
    margin-left: 16px;

    ${({ theme }) => fontStyles(theme.fonts.Caption_1_2)}
    color: ${({ theme }) => theme.colors.Gray_50};
  }
`;
