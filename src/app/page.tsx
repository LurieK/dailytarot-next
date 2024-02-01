'use client'

import Image from 'next/image'
import DropDownButton from '../app/ui/DropDownButton'
import { almendra } from  '@/app/ui/fonts';

export default function Home() {
  return (
    <Provider>
    <div>
      <div className={almendra.className}>
        <h1>Morning Tarot</h1>
        <DropDownButton/>
      </div>
    </div>
    </Provider>
  )
}