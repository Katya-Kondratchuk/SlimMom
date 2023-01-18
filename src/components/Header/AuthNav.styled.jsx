const { NavLink } = require('react-router-dom');
const { default: styled } = require('styled-components');

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  text-align: right;
  color: #212121;
  :active,
  :hover,
  :focus {
    color: #9b9faa;
  }
`;
