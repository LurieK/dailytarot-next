'use client'

import Image from 'next/image'
import styles from './page.module.css'
import DropDownButton from '../app/ui/DropDownButton'
import { almendra } from  '@/app/ui/fonts';

export default function Home() {
  return (
    <div>
      <div className={almendra.className}>
        <h1>Morning Tarot</h1>
        <DropDownButton/>
      </div>
    </div>
  )
}
