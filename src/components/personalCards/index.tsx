import { personalDataList } from '../../interfaces/transaction';
import {
  ArrowCardIcon,
  Cards,
  CartIcon,
  Container,
  ContainerCard,
  ContainerIcon,
  ItemMoneyText,
  ItemText,
  RowContainer,
  Separator,
  UpNumberText,
  VerticalContainer,
} from './style';

interface Props {
  data: personalDataList[];
}

interface RenderItemProps {
  item: personalDataList;
  index: number;
}

export default function PersonalCard({ data }: Props) {
  return (
    <Container>
      <Cards
        data={data}
        numColumns={2}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item, index }: RenderItemProps) => (
          <ContainerCard
            style={{
              marginRight: index % 2 === 0 ? 10 : 0,
            }}
          >
            <VerticalContainer>
              <ItemText numberOfLines={1}>{item.title}</ItemText>
              <ItemMoneyText numberOfLines={1}>{item.money}</ItemMoneyText>
              <RowContainer>
                <ContainerIcon isRaising={item.isRaising}>
                  <ArrowCardIcon
                    isRaising={item.isRaising}
                    name={item.isRaising ? 'arrow-up-right' : 'arrow-down-left'}
                  />
                </ContainerIcon>
                <UpNumberText isRaising={item.isRaising}>{item.howMuchPercent}</UpNumberText>
              </RowContainer>
            </VerticalContainer>

            <CartIcon />
          </ContainerCard>
        )}
      />
    </Container>
  );
}
