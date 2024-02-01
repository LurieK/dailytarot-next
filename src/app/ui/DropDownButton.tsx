

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCard } from '../../cardSlice';
import { RootState } from './store';
import { Card, tarotCards } from '../cards_array';
import Image from 'next/image';

const DropDownButton: React.FC = () => {
 const dispatch = useDispatch();
 const card = useSelector((state: RootState) => state.card.card);

 const handleChoice = (e: React.ChangeEvent<HTMLSelectElement>) => {
   const selectedCard = tarotCards.find(card => card.value === e.target.value);
   if (selectedCard){
    dispatch(setCard(selectedCard));
   }else{
    dispatch(setCard(null));
   }
 };

 console.log(card?.imageUrl)
 return (
   <div>
     <select onChange={handleChoice}>
       <option value="">Select a Card</option>
       {tarotCards.map((card, index) => (
         <option key={index} value={card.value}>{card.displayText}</option>
       ))}
     </select>

     {card && (
      <Image 
        src={card.imageUrl} 
        alt={card.displayText} 
        width={300} 
        height={500} 
      />
    )}
   </div>
 );
};

export default DropDownButton;
