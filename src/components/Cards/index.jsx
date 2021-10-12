import { useState } from "react";
import { Card } from "../Card";

import { mockData } from '../../assets/mockData';

import { Container } from './styles';

export function Cards() {
  const [cards, setCards] = useState(mockData);

  return (
    <Container>
      {cards?.map((card) => 
        <Card  cardProps={card} viewingOption='weekly'/>
      )}
    </Container>
  )
}
