export interface CartItem {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
  quantity: number;
}

export const useCart = () => {
  const cart = useState<CartItem[]>("cart", () => {
    if (process.client) {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  if (process.client) {
    watch(
      cart,
      (newCart) => {
        localStorage.setItem("cart", JSON.stringify(newCart));
      },
      { deep: true },
    );
  }

  return cart;
};
