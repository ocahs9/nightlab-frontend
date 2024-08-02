import * as F from "./Footer.styled";

import banner from "../../assets/images/Banner.png";

const Footer = () => {
  // const sponsors = [
  //   { id: 1, logo: "canon.png" },
  //   { id: 2, logo: "diesel.png" },
  //   { id: 3, logo: "mastercard.png" },
  //   { id: 4, logo: "spotify.png" },
  // ];

  return (
    <>
      <F.Container>
        {/* {sponsors.map(({ id, logo }) => {
          return (
            <img
              key={id}
              src={`/src/assets/sponsors/${logo}`}
              alt="sponsors"
              className="sponsor"
            />
          );
        })} */}
        <img src={banner} alt="Banner" className="banner" />
      </F.Container>
    </>
  );
};

export default Footer;
