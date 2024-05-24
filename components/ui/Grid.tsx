import React from 'react'
import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from './BentoGrid'

const Grid = () => {
  return (
    <section id='about' className='py-20'>
    <BentoGrid>
    {gridItems.map((item)=>(
      <BentoGridItem 
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      className={item.className}
      imgClassName={item.imgClassName}
      img={item.img}
      spareImg={item.spareImg}
      />
    ))}
    </BentoGrid>
    </section>
  )
}

export default Grid
