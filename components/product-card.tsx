"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

import toast from "react-hot-toast";
import { useCartStore } from "@/store/cart-store";

export function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const finalPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const addItem = useCartStore((state) => state.addItem);

  return (
    <>
      <Card
        className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <CardContent className="p-6">
          <div className="relative mb-6">
            {product.discount && (
              <Badge className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground font-bold px-3 py-1 text-sm">
                {product.discount}% Descuento
              </Badge>
            )}

            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">
                €{finalPrice}
              </span>
              {product.discount && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.price}
                </span>
              )}
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              {product.name}
            </h3>
          </div>
        </CardContent>
      </Card>

      {/* MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg md:max-w-2xl p-0 overflow-hidden rounded-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Imagen grande */}
            <div className="relative h-64 md:h-auto w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Información */}
            <div className="p-6 space-y-4">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {product.name}
                </DialogTitle>
              </DialogHeader>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">
                  ${finalPrice}
                </span>
                {product.discount && (
                  <span className="text-sm text-muted-foreground line-through">
                    €{product.price}
                  </span>
                )}
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span> {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: finalPrice,
                    image: product.image,
                    quantity: 1,
                  });
                  toast.success(`${product.name} agregado al carrito`);
                }}
              >
                Añadir al carrito
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
