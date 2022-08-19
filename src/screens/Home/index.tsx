import React from 'react';

import coverImg from '../../assets/cover.png';
import { Card } from '../../components/Card';
import { Input } from '../../components/input';
import { Container, Content, Header } from './styles';


export function Home(){
 return (
   <Container>
     <Header source={coverImg}>
       <Input placeholder='Search...'/>
     </Header>
     <Content>
     <Card/>
     </Content>
   </Container>
 );
}


