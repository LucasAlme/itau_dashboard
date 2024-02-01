import { format } from 'date-fns';
import { transactionListData } from '../../interfaces/transaction';
import {
  Container,
  ContainerItem,
  ItemText,
  Transactions,
  ItemImage,
  Separator,
  ItemMoneyText,
  MoreIcon,
} from './styles';

interface Props {
  data: transactionListData[];
}

export default function TransactionList({ data }: Props) {
  return (
    <Container>
      <Transactions
        data={data}
        ItemSeparatorComponent={() => <Separator />}
        keyExtractor={(item: transactionListData) => item.id}
        renderItem={({ item }: { item: transactionListData }) => (
          <ContainerItem>
            <ItemImage source={{ uri: item.image }} />
            <ItemMoneyText numberOfLines={1}>R${item.money}</ItemMoneyText>
            <ItemText numberOfLines={1}>{format(new Date(), 'dd/MM/yyyy')}</ItemText>
            <MoreIcon />
          </ContainerItem>
        )}
      />
    </Container>
  );
}
