'use client'

import Image from 'next/image'
import DropDownButton from '../app/ui/DropDownButton'
import { almendra } from  '@/app/ui/fonts';
import { Provider } from 'react-redux'; 
import store from '../store'

export default function Page() {
  return (
    <Provider store={store}>
    <div>
      <div className={almendra.className}>
        <h1>Morning Tarot</h1>
        <DropDownButton/>
      </div>
    </div>
    </Provider>
  )
}