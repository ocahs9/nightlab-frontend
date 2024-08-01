import styled from "styled-components";


export const NickNameWrapper = styled.div`
  display: flex;
  padding: 28px 16px 0px 16px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

export const InputAndButton = styled.div`
  display: flex;
  width: 358px;
  align-items: center;
  gap: 12px;
`

export const NickNameInput = styled.input`

  display: flex;
  width: 296px;
  height: 52px;
  padding: 16px;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  border-radius: 8px;
  border: 1px solid var(--Grayscale-Gray_10, #EDF1F5);
  background: rgba(237, 241, 245, 0.25);
  color: white;
  ${({ theme }) => theme.fonts.Body_1_2};
`

export const NickNameBtn = styled.button`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  // 자식 SVG 아이콘 크기 조절
  svg {
    width: 48px; // 아이콘의 너비
    height: 48px; // 아이콘의 높이
  }
`
