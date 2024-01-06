import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card, tarotCards } from './app/cards_array'

interface CardState {
    card: Card;
}

const initialState: CardState = {
    card: null,
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setCard: (state, action: PayloadAction<Card>)=> {
            state.card = action.payload;
        }
    
    }

})

export const {setCard} = cardSlice.actions;

export default cardSlice.reducer