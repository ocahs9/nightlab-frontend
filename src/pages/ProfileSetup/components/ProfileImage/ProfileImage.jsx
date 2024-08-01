//import gentle from "@assets/images/gentle_profile.png"
//import serious from "@assets/images/serious_profile.png"
//import sharp from "@assets/images/sharp_profile.png"

import gentle from "@assets/svgs/gentle_profile.svg"
import serious from "@assets/svgs/serious_profile.svg"
import sharp from "@assets/svgs/sharp_profile.svg"
import PropTypes from "prop-types"

import * as S from "./ProfileImage.styled"

const ProfileImage = ({profile, setProfile}) => {
  
  const handleSelectProfile = (e) => {
    setProfile(e.target.name);
  }

  return (
    <S.ProfileImageWrapper>
      <S.ProfileImageLayout>
        <S.ProfileImageButton 
          name={"gentle"}  
          $imgSrc={gentle} 
          onClick={handleSelectProfile}
          $isSelected={profile === "gentle"}
        />
        <S.ProfileImageButton 
          name={"sharp"} 
          $imgSrc={sharp} 
          onClick={handleSelectProfile}
          $isSelected={profile === "sharp"}
        />
        <S.ProfileImageButton 
          name={"serious"} 
          $imgSrc={serious} 
          onClick={handleSelectProfile}
          $isSelected={profile === "serious"}
        />
        </S.ProfileImageLayout>
      
    </S.ProfileImageWrapper>
  );
}

ProfileImage.propTypes = {
  profile: PropTypes.string.isRequired,
  setProfile: PropTypes.func.isRequired,
}
export default ProfileImage
