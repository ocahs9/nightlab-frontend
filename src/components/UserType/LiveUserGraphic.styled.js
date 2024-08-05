import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GraphicContainer = styled.div`
  width: 358px;
  height: 384px;

  position: relative;

  margin: 0 auto;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.White};

  overflow: hidden;
`;

export const Graphic = styled.img`
  width: 100%;
  height: 100%;
`;

export const LiveUser = styled.div`
  width: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4px;

  position: absolute;
  top: 36px;
  left: 149px;

  .now {
    width: 100%;

    text-align: center;

    ${({ theme }) => fontStyles(theme.fonts.Body_1_2)}
    color: ${({ theme }) => theme.colors.White};
  }

  .users {
    width: 100%;
    
    text-align: center;

    ${({ theme }) => fontStyles(theme.fonts.Header_4_1)}
    color: ${({ theme }) => theme.colors.Main_Red};
  }
`;
