import React, { useState } from 'react';
import { Card, tarotCards } from '../../../public/cards_data/cards_array';

const CardSelector: React.FC = () => {
 const [selectedCard, setSelectedCard] = useState<Card | null>(null);

 const handleChoice = (e: React.ChangeEvent<HTMLSelectElement>) => {
   const card = tarotCards.find(card => card.value === e.target.value);
   if (card){
    setSelectedCard(card)
   }else{
   setSelectedCard(null);
   }
 };

 return (
 
   <div>
     <select onChange={handleChoice}>
       <option value="">Select a Card</option>
       {tarotCards.map((card, index) => (
         <option key={index} value={card.value}>{card.displayText}</option>
       ))}
     </select>

     {selectedCard && <img src={selectedCard.imageUrl} alt={selectedCard.displayText} />}
   </div>


 );
};

export default CardSelector;
