import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper>
      <h1>
        <Link to="/">Logo</Link>
      </h1>
      <nav>
        <MenuBox>
          <Menu>
            <Link to="/about">About</Link>
          </Menu>
          <Menu>
            <Link to="/contact">Contact</Link>
          </Menu>
        </MenuBox>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 16px 32px;
  background-color: #a305ff;
`;

const MenuBox = styled.ul`
  display: flex;
  gap: 24px;
  padding: 0;
  text-decoration: none;
`;

const Menu = styled.li`
  list-style: none;
`;
