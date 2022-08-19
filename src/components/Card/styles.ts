import * as Animatable from 'react-native-animatable';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  width: 180px;
  height: 250px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};

  margin: 50px 20px;
  border-radius: 10px;
`;

export const Image = styled(Animatable.Image)`
  margin-top: -50px;
  width: 150px;
  height: 150px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFPercentage(2.5)}px;
  margin-top: ${RFPercentage(5)}px;
`;

export const Fundation = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 14px;
  margin-top: 24px;
`;
