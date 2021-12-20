import styled from "styled-components";
import { Link } from 'gatsby';

export const MenuWrapper = styled.div`
  z-index: 9999;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  height: 100vh;
  width: 30vw;
  
  background: var(--dark-grey);
  font-size: 3rem;
  text-decoration: none
`;

export const StyledLink = styled(Link)`
  color: var(--dark-pink);
  text-decoration: none;
  margin: 2rem 0;
  &:hover{
    color: var(--light-pink);
  }
`;