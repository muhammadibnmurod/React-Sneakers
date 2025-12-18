export interface CartItem {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
  quantity: number;
}

export const useCart = () => {
  return useState<CartItem[]>("cart", () => []);
};
