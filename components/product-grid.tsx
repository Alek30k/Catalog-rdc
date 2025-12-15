"use client";

import { ProductCard } from "@/components/product-card";
import { useSearchStore } from "@/store/search-store";

const products = [
  {
    id: 1,
    name: "Jabón de Caléndula",
    price: 1860,
    image: "/calendula.png",
    discount: null,
    features: [
      "🌿 Regenera la piel",
      "🌿 Protege contra irritaciones",
      "🌿 Alivia la resequedad",
      "🌿 Nutrición intensa",
    ],
  },
  {
    id: 2,
    name: "Jabón de Avena y Miel",
    price: 356,
    image: "/avena.png",
    discount: null,
    features: [
      "🌿 Exfolia suavemente la piel",
      "🌿 Hidrata profundamente",
      "🌿 Reduce la irritación",
      "🌿 Propiedades antibacterianas naturales",
    ],
  },
  {
    id: 3,
    name: "Jabón de Lavanda",
    price: 2400,
    image: "/lavanda.png",
    discount: 25,
    features: [
      "🌿 Aromaterapia relajante",
      "🌿 Propiedades calmantes",
      "🌿 Ayuda a conciliar el sueño",
      "🌿 Antiséptico natural",
    ],
  },
  {
    id: 4,
    name: "Jabón de Café",
    price: 2000,
    image: "/cafe.png",
    features: [
      "🌿 Exfolia la piel eliminando células muertas ",
      "🌿 Estimula la circulación ",
      "🌿 Tonifica la piel",
      "🌿 Aroma revitalizante",
    ],
  },
  {
    id: 5,
    name: "Jabón de Aloé Vera",
    price: 2000,
    image: "/aloe.png",
    discount: 5,
    features: [
      "🌿 Cicatriza heridas menores",
      "🌿 Refresca y calma",
      "🌿 Hidrata sin engrasar",
      "🌿 Perfecto después del sol",
    ],
  },
  {
    id: 6,
    name: "Jabón de Miel",
    price: 2200,
    image: "/miel.png",
    discount: null,
    features: [
      "🌿 Hidrata profundamente la piel",
      "🌿 Propiedades antibacterianas y calmantes",
      "🌿 Aporta suavidad y elasticidad",
      "🌿 Restaura el brillo natural de la piel",
    ],
  },
  {
    id: 7,
    name: "Jabón de Café",
    price: 2500,
    image: "/coffee-soap-brown-massage-nodules.jpg",
    discount: 5,
    features: [
      "🌿 Regenera la piel",
      "🌿 Protege contra irritaciones",
      "🌿 Alivia la resequedad",
      "🌿 Nutrición intensa",
    ],
  },
  {
    id: 8,
    name: "Jabón de Aloe Vera",
    price: 2000,
    image: "/green-aloe-vera-soap-rose-flower-shape.jpg",
    discount: null,
    features: [
      "🌿 Regenera la piel",
      "🌿 Protege contra irritaciones",
      "🌿 Alivia la resequedad",
      "🌿 Nutrición intensa",
    ],
  },
  {
    id: 9,
    name: "Jabón de Eucalipto",
    price: 2400,
    image: "/green-eucalyptus-soap-square-two-tone.jpg",
    discount: 25,
    features: [
      "🌿 Regenera la piel",
      "🌿 Protege contra irritaciones",
      "🌿 Alivia la resequedad",
      "🌿 Nutrición intensa",
    ],
  },
  {
    id: 10,
    name: "Jabón de Miel",
    price: 1600,
    image: "/orange-honey-soap-hexagonal-honeycomb-shape.jpg",
    discount: null,
    features: [
      "🌿 Regenera la piel",
      "🌿 Protege contra irritaciones",
      "🌿 Alivia la resequedad",
      "🌿 Nutrición intensa",
    ],
  },
  {
    id: 11,
    name: "Jabón de Naranja",
    price: 2400,
    image: "/orange-citrus-soap-dome-half-sphere-shape.jpg",
    discount: 15,
    features: [
      "🌿 Regenera la piel",
      "🌿 Protege contra irritaciones",
      "🌿 Alivia la resequedad",
      "🌿 Nutrición intensa",
    ],
  },
  {
    id: 12,
    name: "Producto 14",
    price: 99,
    image: "/colorful-bear-shaped-soaps-grid-twelve-colors.jpg",
    discount: 25,
    features: [
      "🌿 Regenera la piel",
      "🌿 Protege contra irritaciones",
      "🌿 Alivia la resequedad",
      "🌿 Nutrición intensa",
    ],
  },
  {
    id: 13,
    name: "Producto 15",
    price: 460,
    image: "/red-white-candy-swirl-pattern-round-soap.jpg",
    discount: 15,
    features: [
      "🌿 Regenera la piel",
      "🌿 Protege contra irritaciones",
      "🌿 Alivia la resequedad",
      "🌿 Nutrición intensa",
    ],
  },
];

export function ProductGrid() {
  const search = useSearchStore((state) => state.search);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-10">
        No se encontraron productos 🧼
      </p>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
