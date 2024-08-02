import styled from "styled-components";

export const Fill = styled.div`
  width: 0;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.Main_Red};

  transition: width 1.3s ease-in-out;
`;
