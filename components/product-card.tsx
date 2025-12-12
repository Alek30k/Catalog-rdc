"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  discount: number | null;
  features: string[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [open, setOpen] = useState(false);
  const finalPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <>
      <Card
        className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold text-primary">
                €{finalPrice}
              </span>
              {product.discount && (
                <span className="text-sm text-muted-foreground line-through">
                  €{product.price}
                </span>
              )}
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              {product.name}
            </h3>

            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                semper felis vel metus tincidunt, ut dignissim ex efficitur.
              </p>
            </div>
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
                  €{finalPrice}
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

              <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white rounded-xl">
                Añadir al carrito
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
