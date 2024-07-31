import styled from "styled-components";

export const DropDownWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 28px 16px 0px 16px;
  justify-content: center;
  align-items: center;
  align-self: stretch;

`

export const DropDownMenu = styled.div`
  z-index: 2;
  display: flex;
  width: 350px;
  height: 52px;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;

  border-radius: 8px;
  border: 1px solid ${({ theme, $isOpen }) => $isOpen? theme.colors.Main_Red : theme.colors.Gray_10}; 
  background: ${({ theme }) => theme.colors.Gray_80}; //투명하게 하면 뒤에 보임
  color: ${({ $isSelected, theme }) => $isSelected? theme.colors.White : theme.colors.Gray_50}; 
  ${({ theme }) => theme.fonts.Body_1_2};
`

export const DropDownContentWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top:75px; //그냥 적당히 겹쳐있어야 해서 (DropDownMenu에!)
  display: flex;
  width: 350px;
  flex-direction: column;
  align-items: flex-start;
`

export const DropDownContent = styled.button`
  display: flex;
  height: 36px;
  height: ${({ $height }) => $height?  `${$height}px`: "36px" };
  padding: 4px 16px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  
  ${({ theme }) => theme.fonts.Body_2_2};

  background: ${({ theme, $isSelected }) => $isSelected? theme.colors.Main_Red: theme.colors.Gray_90};
  color: ${({ theme, $isSelected }) => $isSelected? theme.colors.Gray_100 : theme.colors.Gray_50};

  &:hover{
    background: ${({ theme }) => theme.colors.Main_Red};
    color: ${({ theme }) => theme.colors.Gray_100 };
  }

  border-radius : ${({ $isLast }) => $isLast && "0px 0px 12px 12px"};
  
`
