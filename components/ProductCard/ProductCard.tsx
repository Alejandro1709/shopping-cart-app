import Image from 'next/image';
import * as S from './styles';

function ProductCard() {
  return (
    <S.Product>
      <S.Left>
        <Image
          src='https://plazavea.vteximg.com.br/arquivos/ids/561765-450-450/20192547.jpg?v=637427443242800000'
          alt='A yogurt image'
          width={75}
          height={75}
          draggable={false}
        />
      </S.Left>
      <S.Center>
        <S.Title>Yogurt de coco Laive</S.Title>
        <S.Price>$23.00</S.Price>
      </S.Center>
      <S.Right>
        <S.AddButton>+</S.AddButton>
      </S.Right>
    </S.Product>
  );
}

export default ProductCard;
