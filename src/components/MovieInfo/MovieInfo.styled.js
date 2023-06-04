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

export const Image = styled.img`
  border-radius: 6px;
  overflow: hidden;
  max-width: 250px;
`;

export const Year = styled.span`
  font-weight: normal;
  color: rgb(206, 210, 214);
`;

export const Score = styled.span`
  color: ${setStatColor};
  font-weight: bold;
`;

function setStatColor({ value }) {
  if (value >= 80) return '#4CAF50';
  if (value >= 40 && value < 80) return 'goldenrod';
  if (value < 40) return '#f44336';
}

export const SecondaryText = styled.p`
  font-size: 0.9rem;
  color: rgb(206, 210, 214);
`;
