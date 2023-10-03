import React from 'react';
import { Htag, Button, P, Tag } from '../components'


export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow='right'> Кнопка</Button>
      <Button appearance='ghost' arrow='down'> Кнопка</Button>
      <P size="S">Hello world</P>
      <Tag size="S" color='red'>qwe</Tag>
      <Tag size="M" color='primary'>qwqe</Tag>
      <Tag size="S" >qwe</Tag>
      <Tag size="M" color='green'>q1231we</Tag>
      <Tag size="M" color='grey'>qweerewqr</Tag>
    </div>
  )
}
