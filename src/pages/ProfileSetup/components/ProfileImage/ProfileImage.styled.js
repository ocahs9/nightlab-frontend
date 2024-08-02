import styled from "styled-components";

export const ProfileImageWrapper = styled.div`
  display: flex;
  padding: 0px 25px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

export const ProfileImageLayout = styled.div`
  display: flex;
  width: 340px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`

export const ProfileImageButton = styled.button`
  width: 164px;
  height: 164px;
  flex-shrink: 0;
  border-radius: 8px;
  ${({ $isSelected }) => $isSelected ?  "mix-blend-mode: normal" : "mix-blend-mode: luminosity"}; 

  background-image: url(${({ $imgSrc }) => $imgSrc}) ;
  opacity: ${({ $isSelected }) => $isSelected ? "1.0" : "0.4"};

  &:hover{
   opacity : 1.0;
   mix-blend-mode: normal;
  }
`
