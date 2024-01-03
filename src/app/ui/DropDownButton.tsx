import React, { useState } from 'react';
import { Card, tarotCards } from '../cards_array';
import Image from 'next/image';

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
console.log(selectedCard?.imageUrl)
 return (
 
   <div>
     <select onChange={handleChoice}>
       <option value="">Select a Card</option>
       {tarotCards.map((card, index) => (
         <option key={index} value={card.value}>{card.displayText}</option>
       ))}
     </select>

     {selectedCard && (
      <Image 
        src={selectedCard.imageUrl} 
        alt={selectedCard.displayText} 
        width={300} 
        height={500} 
      />
    )}
   </div>


 );
};

export default CardSelector;
