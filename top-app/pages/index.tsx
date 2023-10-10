import React from 'react';
import { useState } from 'react';
import { Htag, Button, P, Tag, Rating } from '../components'
import { withLayout } from '@/layout/WithLayout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { MenuItem } from '@/interfaces/menu.interface';


function Home({ menu, firstCategory }): JSX.Element {
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
      <ul>
        {menu.map(m => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
      </ul>
    </div>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}