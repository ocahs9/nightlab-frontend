import styled from "styled-components";

export const CompleteWrapper = styled.div`
  display: flex;
  padding: 0px 62px 0px 62px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

export const CompleteLayout = styled.div`
  display: flex;
  width: 265px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const CompleteImg = styled.div`
  width: 265px;
  height: 320px;
  background-image: url(${({ $imgSrc }) => $imgSrc});
`

export const CompleteText = styled.span`
  align-self: stretch;

  color: ${({ theme }) => theme.colors.White};
  text-align: center;

  ${({ theme }) => theme.fonts.Subhead_2_2};

`