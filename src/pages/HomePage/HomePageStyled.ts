import styled from "styled-components";

const HomePageStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .page-title {
    font-family: ${({ theme }) => theme.typography.mainFont};
    text-transform: uppercase;
  }
`;

export default HomePageStyled;
