import styled from "styled-components";

const MovieCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding-bottom: 30px;
  min-width: 320px;
  background-color: #46462f;
  border: 2px solid #fff;

  .card {
    &__picture {
      object-fit: cover;
      border: 2px solid #000000;
      border-radius: 20px;
      gap: 20px;
    }

    &__title {
      padding: 20px;
      text-transform: uppercase;
    }

    &__year {
      padding: 20px;
    }
  }

  @media (min-width: 362px) {
    width: 200px;
  }
`;

export default MovieCardStyled;
