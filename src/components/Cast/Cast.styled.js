import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 10px;

  width: 90vw;
  overflow-x: auto;
`;

export const ListItem = styled.li`
  width: 120px;
  min-width: 120px;
  font-size: 0.8rem;

  border: 0.5px solid lightGray;
  border-radius: 6px;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  /* max-width: 120px; */
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Meta = styled.div`
  padding: 0 10px;
`;

export const ActorName = styled.p`
  font-weight: bold;
`;
export const As = styled.p``;
