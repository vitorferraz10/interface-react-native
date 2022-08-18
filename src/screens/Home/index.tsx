import React from 'react';

import { Container, Header } from './styles';
import coverImg from '../../assets/cover.png';
import { Input } from '../../components/input';


export function Home(){
 return (
   <Container>
     <Header source={coverImg}>
       <Input />
     </Header>
   </Container>
 );
}


