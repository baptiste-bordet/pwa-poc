import * as React from 'react';
import styled from 'styled-components'

interface ICardItem {
  text?: string
}

const Card = styled.div`
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);
  background: #FFFFFF;
`;

const CardItem = ({ text }: ICardItem) => {

  return (
    <Card>{text}</Card>
  );

};

export default CardItem;
