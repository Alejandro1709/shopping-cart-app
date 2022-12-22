import Image from 'next/image';
import { Product } from './styles';

function ProductCard() {
  return (
    <Product>
      <Image
        src='https://plazavea.vteximg.com.br/arquivos/ids/561765-450-450/20192547.jpg?v=637427443242800000'
        alt='A yogurt image'
        width={75}
        height={75}
        draggable={false}
      />
      <div className=''>
        <p>Yogurt de coco Laive</p>
        <h2>$23.00</h2>
      </div>
      <button>Add</button>
    </Product>
  );
}

export default ProductCard;
