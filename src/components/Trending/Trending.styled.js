import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ListItem = styled.li`
  width: 175px;
  min-width: 175px;
  font-size: 0.8rem;

  border: 0.5px solid lightGray;
  border-radius: 6px;
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Meta = styled.div`
  padding: 0 10px;
  color: black;
`;

export const Title = styled.p`
  font-weight: bold;
`;
export const ReleaseDate = styled.p`
  color: gray;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: normal;

  :hover,
  :focus {
    text-decoration: none;
  }
`;
