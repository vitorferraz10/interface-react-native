import React, { useRef, useState } from 'react';
import { StatusBar } from 'react-native';

import coverImg from '../../assets/cover.png';
import { Carousel } from '../../components/Carousel';
import { Container, Content, Header, Title } from './styles';

export function Home() {
  
 return (
   <Container>
     <StatusBar />
     <Header source={coverImg}></Header>
     <Title>The top six of the premier league</Title>
     <Content>
       <Carousel />
     </Content>
   </Container>
 );
}


