'use client';
import Word from '../../components/quote/Word';


const paragraph = "According to Forrester report, on average, every dollar invested in UX brings 100 in return. That's an ROI of 9,900%."

export default function Quote() {

  const words = paragraph.split(" ")
  return (
    <main>
       
       
        <Word paragraph={paragraph}/>
       
        
    </main>
  )
}