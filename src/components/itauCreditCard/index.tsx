import {
  Container,
  CreditLimitText,
  Title,
  LimitMoney,
  CreditNumber,
  ItauText,
  ItauImageContainer,
  SettingIcon,
  ContainerRow,
} from './styles';

export default function ItauCreditCard() {
  return (
    <Container>
      <ContainerRow>
        <Title>VISA</Title>
        <SettingIcon />
      </ContainerRow>
      <CreditLimitText>Limite de crédito disponível</CreditLimitText>
      <LimitMoney>R$ 100.000,00</LimitMoney>
      <CreditNumber>**** **** **** 2222</CreditNumber>

      <ItauImageContainer>
        <ItauText>Itaú</ItauText>
      </ItauImageContainer>
    </Container>
  );
}
