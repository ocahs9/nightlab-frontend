import styled from "styled-components";
import theme from "../../styles/theme";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderOptions = styled.div`
  display: flex;

  .login-btn {
    margin: 0;
    padding: 2px 14px;
    width: 65px;
    height: 24px;
    color: #ffffff;
    border: 1px solid #FFFFFF;
    border-radius: 18px;
  }
`;

function Header() {
  return (
    <>
      <HeaderContainer>
        <h2>Night Lab</h2>
        <HeaderOptions>
          <h2 className="login-btn subhead4-1">로그인</h2>
          <a>
            <span></span>
          </a>
        </HeaderOptions>
      </HeaderContainer>
    </>
  );
}

export default Header;
