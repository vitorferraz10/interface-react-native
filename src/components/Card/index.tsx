import { useWindowDimensions } from 'react-native';

import { Container, Fundation, Image, Title } from './styles';

type ItemProps = {
   item: {
      id: string;
      title: string;
      description: string;
      image: any;
   }
};

export function Card({ item }: ItemProps) {
   
  return (
    <Container key={item.id}>
      <Image source={item.image} resizeMode="contain" animation="pulse" />
        <Title>{ item.title}</Title>
        <Fundation>{item.description}</Fundation>
    </Container>
  );
}