import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#cda372',
})`
  color: #cda372;
  height: 40px;
  font-size: 14px;
`;

export const ContainerInput = styled.View`
  background-color: #fffcf3;
  height: 40px;
  padding: 0px 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  border-radius: 15px;
`;

export const SearchIcon = styled(Feather).attrs({
  name: 'search',
  size: 22,
})`
  color: #cda372;
`;

export const BellIcon = styled(Feather).attrs({
  name: 'bell',
  size: 22,
})`
  color: #cda372;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageProfile = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-color: #cda372;
`;
