import styled from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 30px;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }

  color: whitesmoke;

  background-color: #34495e;
  background: linear-gradient(
      to right bottom,
      rgb(35, 24, 24),
      rgba(35, 24, 24, 0.7)
    ),
    ${props => `url(${props.bgLink})`};
  background-size: cover;
  background-repeat: no-repeat;
`;
