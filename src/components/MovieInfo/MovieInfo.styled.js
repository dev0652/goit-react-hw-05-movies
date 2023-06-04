import styled from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }

  color: whitesmoke;

  /* background: white; */
  background: linear-gradient(
      to right bottom,
      rgb(35, 24, 24),
      rgba(35, 24, 24, 0.84)
    ),
    ${props => `url(${props.bgLink})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

// background: ${props => `url(${props.background}) no-repeat top center`};

//  background: url(${props => imagePath + props.data.backdrop_path});

// background-image: linear-gradient(
//   to right bottom,
//   rgb(35, 24, 24),
//   rgba(35, 24, 24, 0.84)
// ),
// url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/h8gHn0OzBoaefsYseUByqsmEDMY.jpg');
