import styled from 'styled-components/native';

export const Container = styled.TextInput`
  width: 80%;
  height: 54px;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TEXT};
  padding: 0 16px;
`;
