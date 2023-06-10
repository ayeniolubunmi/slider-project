import React, { useEffect, useState } from 'react'
import {FaQuoteRight} from 'react-icons/fa';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'
import data from './data'

export default function App() {
  const[people, setPeople] = useState(data);
  const[index, setIndex]=(0);
  
  useEffect(() => {
    const lastIndex = people.lenght-1;
    if(index<0){
      setIndex(lastIndex)
    }
    if(index>lastIndex){
      setIndex(0)
    }
  }, [index,people])

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return ()=>clearInterval(slider)
  }, [index])

  return (
    <section className='section'>
      <div title>
        <h2><span>/</span> review</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center'>
        {people.map((person,personIndex)=>{
          const {id,image,title,quote, name} = person;
          let position = 'nextSlide'
          if(personIndex === index){
            position = 'activeSlide'
          }
          if(personIndex === index-1 || (index === 0 && personIndex=== people.length-1)){
            position = 'lastSlide'
          }
          return <article key={id}>
            <img src={image} alt={name} className='person-img'/>
            <h2 className='name'>{name}</h2>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon'/>
          </article>
        })}
        <button className='prevBtn'>
          <FiChevronLeft className='icon'/>
        </button>
        <button className='nextBtn'>
          <FiChevronRight className='icon' />
        </button>
      </div>
    </section>
  )
}
