import { useState } from "react";
import { Card } from "../Card";

import { mockData } from '../../assets/mockData';

export function Cards() {
  const [cards, setCards] = useState(mockData);

  return (
    <div>
      {cards?.map((card) => 
        <Card  cardProps={card} viewingOption='weekly'/>
      )}
    </div>
  )
}
