import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    padding: 20px;
    display: flex;
    justify-content: center;
    font-family: ${({ theme }) => theme.typography.mainFont};
    text-transform: uppercase;
    gap: 30px;
  }

  .active {
    text-decoration: underline;
  }
`;

export default NavigationStyled;
