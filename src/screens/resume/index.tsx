import { useState } from 'react';
import Header from '../../components/header';
import { Container, ContainerCreditCard, ContentContainer, Title } from './styles';
import TransactionList from '../../components/transactionList';
import { getUnixTime } from 'date-fns';
import PersonalCard from '../../components/personalCards';
import ItauCreditCard from '../../components/itauCreditCard';

export default function Resume() {
  const [transactionList] = useState([
    {
      id: 0,
      name: 'Lucas Almeida Sousa',
      date: getUnixTime(new Date()),
      image:
        'https://media.licdn.com/dms/image/D4D03AQH_eGrQ-X6ZQA/profile-displayphoto-shrink_200_200/0/1699647977230?e=1712188800&v=beta&t=kw8VjbbekFyVT277piLdD8x7nCwe7Sz8jrOUzVkvo60',
      money: '2.500,00',
    },
    {
      id: 1,
      name: 'Lucas Almeida Sousa',
      date: getUnixTime(new Date()),
      image:
        'https://media.licdn.com/dms/image/D4D03AQH_eGrQ-X6ZQA/profile-displayphoto-shrink_200_200/0/1699647977230?e=1712188800&v=beta&t=kw8VjbbekFyVT277piLdD8x7nCwe7Sz8jrOUzVkvo60',
      money: '2.500,00',
    },
  ]);

  const [personalDataList] = useState([
    {
      id: 0,
      title: 'Receita Total',
      money: 'R$ 20.100',
      isRaising: true,
      howMuchPercent: '+15%',
    },
    {
      id: 1,
      title: 'Despesa Total',
      money: 'R$ 10.700',
      isRaising: true,
      howMuchPercent: '+3.5%',
    },
    {
      id: 2,
      title: 'Rendimentos Recebidos',
      money: 'R$ 2.200',
      isRaising: false,
      howMuchPercent: '-15%',
    },
    {
      id: 3,
      title: 'Transação Realizada',
      money: 'R$ 9.300',
      isRaising: false,
      howMuchPercent: '+1.3%',
    },
  ]);

  return (
    <Container>
      <ContentContainer>
        <Header />
        <Title>Relatório Mensal - Transações</Title>
        <TransactionList data={transactionList} />
        <PersonalCard data={personalDataList} />

        <ContainerCreditCard>
          <ItauCreditCard />
        </ContainerCreditCard>
      </ContentContainer>
    </Container>
  );
}
