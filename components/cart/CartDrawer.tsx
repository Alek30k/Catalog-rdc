"use client";

import { useCartStore } from "@/store/cart-store";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import toast from "react-hot-toast";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import Container from "../Container";

export function CartDrawer() {
  const {
    items,
    increaseQty,
    decreaseQty,
    removeItem,
    totalItems,
    totalPrice,
  } = useCartStore();

  // ANIMACIÓN DEL ÍCONO
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;

    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 400);

    return () => clearTimeout(timer);
  }, [items.length]);

  const handleCheckout = () => {
    if (items.length === 0) return;

    const phone = "+543704678598";

    let message =
      "*¡Hola! Quiero hacer un pedido.*🧼✨ \n\n" + "📦 *Productos:*\n";

    items.forEach((item) => {
      message += `• ${item.name} × ${item.quantity} — $${item.price}\n`;
    });

    message += "\n💰 *Total:* $" + totalPrice.toFixed(2) + "\n\n";

    const url =
      "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className={`relative p-2 hover:opacity-80 transition cursor-pointer ${
            animate ? "cart-animate" : ""
          }`}
        >
          <ShoppingCart className="w-6 h-6" />

          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="w-[380px] sm:w-[400px] p-0 flex flex-col">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="text-xl font-semibold">Tu carrito</SheetTitle>
        </SheetHeader>

        {/* SI NO HAY ITEMS */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-6">
            <p className="text-center">Tu carrito está vacío 🧼</p>
          </div>
        ) : (
          <>
            {/* LISTA DE PRODUCTOS */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border rounded-xl p-3"
                >
                  <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="p-1 rounded bg-secondary"
                        onClick={() => decreaseQty(item.id)}
                      >
                        <Minus size={14} />
                      </button>

                      <span className="px-2 font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        className="p-1 rounded bg-secondary"
                        onClick={() => increaseQty(item.id)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => {
                      removeItem(item.id);
                      toast.success("Producto eliminado");
                    }}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="border-t p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg">Total:</span>
                <span className="text-xl font-bold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <Button
                className="w-full bg-primary text-white rounded-xl"
                onClick={handleCheckout}
              >
                Finalizar compra
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
