import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 37.5rem;
  min-height: 66.7rem;//75.6rem; -> 844 - 88
  background-color: ${({ theme }) => theme.colors.Background_Black};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginTitle = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Header_2};
`

export const LoginTitleExplanation = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Body_2_2};

  width: 23.4rem;
  margin-top: 12px;
`

export const LoginGraphic = styled.div`
  width: 26.5rem;
  height: 32.9rem;
  background-image: url(${props => props.imgSrc});


  margin-top: 28px;
`

export const LoginSubTitle = styled.div`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.fonts.Subhead_2_2};
  margin-top: 16px;
`

export const LoginButton = styled.button`
  width: 18.3rem;
  height: 4.5rem;
  background-image: url(${(props) => props.$imgsrc});

  margin-top: 32px;
`