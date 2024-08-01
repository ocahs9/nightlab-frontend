import { IcArrowBottom, IcArrowBottomRed } from '@assets/svgs/index';
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import * as S from "./DropDown.styled";

const DropDown = ({college, setCollege}) => {
  const [isOpen, setIsOpen] = useState(false);
  //const [college, setCollege] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  
  const handleClickDropDownMenu = () => {
    setIsOpen((prev)=>!prev);
  }

  const handleSelectDropDownContent= (content) => {
    setCollege(content);
    setIsOpen(false);
  }

  useEffect(()=>{
    if(college !==""){
      setIsSelected(true);
      console.log(college);
    }
  },[college])

  const dropDownContents = [
    "건축대학",
    "경영대학",
    "공과대학",
    "미술대학",
    "법과대학",
    "사회과학대학",
    "음악대학",
    "인문대학"
  ];

  return (
    <S.DropDownWrapper>
      <S.DropDownMenu 
        onClick={handleClickDropDownMenu} 
        $isSelected={isSelected} 
        $isOpen={isOpen}
      >
        {college ? college : "단과 대학을 선택해 주세요"}
        {isOpen ? <IcArrowBottomRed/> : <IcArrowBottom/>}
      </S.DropDownMenu>
      {
        isOpen &&
          <S.DropDownContentWrapper>
          {dropDownContents.map((content, idx)=>
            <S.DropDownContent 
              key={`dropDown_${idx}`} 
              onClick={()=>handleSelectDropDownContent(content)}
              $isSelected={content === college}
              $height={idx===0 && 44}
              $isLast ={idx === dropDownContents.length - 1}
            >
              {content}
            </S.DropDownContent>
          )}
        </S.DropDownContentWrapper>
      }
      
    </S.DropDownWrapper>
  )
}

DropDown.propTypes = {
  college: PropTypes.string.isRequired,
  setCollege: PropTypes.func.isRequired,
};

export default DropDown
