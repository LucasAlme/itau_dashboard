import { ContainerInput, ContentHeader, Input, SearchIcon, ImageProfile, BellIcon } from './styles';

export default function Header() {
  const imageUri =
    'https://media.licdn.com/dms/image/D4D03AQH_eGrQ-X6ZQA/profile-displayphoto-shrink_200_200/0/1699647977230?e=1712188800&v=beta&t=kw8VjbbekFyVT277piLdD8x7nCwe7Sz8jrOUzVkvo60';
  return (
    <ContentHeader>
      <ContainerInput>
        <Input placeholder="Search" />
        <SearchIcon />
      </ContainerInput>
      <BellIcon />
      <ImageProfile source={{ uri: imageUri }} />
    </ContentHeader>
  );
}
