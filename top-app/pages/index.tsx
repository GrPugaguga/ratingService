import React from 'react';
import { useState } from 'react';
import { Htag, Button, P, Tag, Rating } from '../components'
import { withLayout } from '@/layout/WithLayout';



function Home(): JSX.Element {
  const [rating, setRating] = useState(0)
  return (
    <div>
      <Htag tag='h3'>Текст</Htag>
      <Button appearance='primary' arrow='right'> Кнопка</Button>
      <Button appearance='ghost' arrow='down'> Кнопка</Button>
      <P size="L">Hello world</P>
      <Tag size="S" color='red'>qwe</Tag>
      <Tag size="M" color='primary'>qwqe</Tag>
      <Tag size="S" >qwe</Tag>
      <Tag size="M" color='green'>q1231we</Tag>
      <Tag size="M" color='grey'>qweerewqr</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  )
}

export default withLayout(Home)