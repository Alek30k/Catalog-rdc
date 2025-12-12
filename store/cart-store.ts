import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;

  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (newItem) => {
        const { items } = get();
        const existing = items.find((i) => i.id === newItem.id);

        let updated;

        if (existing) {
          updated = items.map((i) =>
            i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        } else {
          updated = [...items, { ...newItem, quantity: 1 }];
        }

        set({
          items: updated,
          totalItems: updated.reduce((acc, i) => acc + i.quantity, 0),
          totalPrice: updated.reduce((acc, i) => acc + i.price * i.quantity, 0),
        });
      },

      increaseQty: (id) => {
        const updated = get().items.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        );

        set({
          items: updated,
          totalItems: updated.reduce((acc, i) => acc + i.quantity, 0),
          totalPrice: updated.reduce((acc, i) => acc + i.price * i.quantity, 0),
        });
      },

      decreaseQty: (id) => {
        const updated = get()
          .items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0);

        set({
          items: updated,
          totalItems: updated.reduce((acc, i) => acc + i.quantity, 0),
          totalPrice: updated.reduce((acc, i) => acc + i.price * i.quantity, 0),
        });
      },

      removeItem: (id) => {
        const updated = get().items.filter((i) => i.id !== id);

        set({
          items: updated,
          totalItems: updated.reduce((acc, i) => acc + i.quantity, 0),
          totalPrice: updated.reduce((acc, i) => acc + i.price * i.quantity, 0),
        });
      },
    }),

    {
      name: "soap-cart", // Nombre del localStorage
    }
  )
);
