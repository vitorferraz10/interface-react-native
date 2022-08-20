import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.theme.COLORS.BACKGROUND};
`;

export const Header = styled.ImageBackground`
  width: 100%;
  height: 250px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 16px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.theme.COLORS.PRIMARY_900};
  font-family: ${({ theme }) => theme.theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(2.5)}px;
  margin-top: ${RFPercentage(5)}px;
  text-transform: uppercase;
  padding: 0 20px;
`;
