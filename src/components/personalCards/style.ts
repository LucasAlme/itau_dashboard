import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface CardProp {
  isRaising: boolean;
}

export const Container = styled.View`
  padding: 20px 0px;
`;

export const Cards = styled.FlatList.attrs({})``;

export const ContainerCard = styled.View`
  border-width: 1px;
  padding: 10px 18px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  border-color: #d4d4d4;
  width: 48.5%;
`;

export const ItemText = styled.Text`
  color: #9b9a9f;
  font-family: Inter_400Regular;
  font-size: 12px;
`;

export const ItemMoneyText = styled.Text`
  color: #000;
  font-family: Inter_600SemiBold;
  font-size: 20px;
`;

export const UpNumberText = styled.Text`
  color: ${({ isRaising }: CardProp) => (isRaising ? ' #6bcb90' : '#dca4a5')};
  font-family: Inter_400Regular;
  font-size: 14px;
`;

export const CartIcon = styled(Feather).attrs({
  name: 'shopping-cart',
  size: 22,
})`
  color: #000;
`;
export const ArrowCardIcon = styled(Feather).attrs({
  size: 16,
})`
  color: ${({ isRaising }: CardProp) => (isRaising ? ' #6bcb90' : '#dca4a5')};
`;

export const VerticalContainer = styled.View``;

export const Separator = styled.View`
  padding: 5px;
`;

export const ContainerIcon = styled.View`
  height: 20px;
  width: 20px;
  background-color: ${({ isRaising }: CardProp) => (isRaising ? '#affecc' : '#ffd4d5')};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
`;
