import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ff6201;
  border-radius: 20px;
`;

export const Title = styled.Text`
  color: #ffedd1;
  font-family: Inter_600SemiBold;
  padding: 30px 20px;
`;
export const LimitMoney = styled.Text`
  color: #ffedd1;
  font-family: Inter_600SemiBold;
  padding: 0px 0px 60px 20px;
`;

export const ItauText = styled.Text`
  color: #ff6100;
  font-family: Inter_600SemiBold;
  font-size: 48px;
`;
export const CreditNumber = styled.Text`
  color: #ffedd1;
  font-family: Inter_600SemiBold;
  padding: 0px 0px 20px 20px;
`;

export const CreditLimitText = styled.Text`
  color: #ffedd1;
  font-family: Inter_300Light;
  padding: 0px 20px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ItauImageContainer = styled.View`
  background-color: #ff8134;
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: 2px;
  right: 2px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 30px;
  border-top-right-radius: 10px;
  align-items: center;
  justify-content: flex-end;
`;

export const SettingIcon = styled(Feather).attrs({
  name: 'settings',
  size: 22,
})`
  color: #281109;
  padding-right: 20px;
`;
