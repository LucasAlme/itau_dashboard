import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Transactions = styled.FlatList``;

export const ContainerItem = styled.View`
  border-width: 1px;
  border-radius: 10px;
  padding: 5px 10px;
  border-color: #d4d4d4;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ItemText = styled.Text`
  color: #9b9a9f;
  font-family: Inter_400Regular;
`;

export const ItemMoneyText = styled.Text`
  color: #000;
  font-family: Inter_600SemiBold;
`;

export const ItemImage = styled.Image`
  height: 35px;
  width: 35px;
  border-radius: 15px;
  margin-right: 10px;
  border-color: #cda372;
`;

export const Separator = styled.View`
  padding: 10px;
`;

export const MoreIcon = styled(Feather).attrs({
  name: 'more-vertical',
  size: 22,
})`
  color: #9b9a9f;
`;
