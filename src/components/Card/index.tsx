import united from '../../assets/united.png';
import { Container, Fundation, Image, Title } from './styles';

export function Card(){
 return (
   <Container>
       <Image
       source={united}
       resizeMode='contain'
       animation='pulse'/>
       <Title>Manchester United</Title>
       <Fundation>1878</Fundation>
   </Container>
 );
}