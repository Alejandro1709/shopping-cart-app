export default interface Product {
  id: number | string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
  inCart?: boolean;
}
