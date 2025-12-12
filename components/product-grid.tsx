import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Jabón de Carbón Activado",
    price: 186,
    image: "/activated-charcoal-soap-square-with-tree-pattern.jpg",
    discount: null,
    features: ["6 cuotas sin interés", "12 Meses de garantía", "Recibe tu pedido en 24 h.", "Devoluciones gratuitas"],
  },
  {
    id: 2,
    name: "Jabón de Carbón Activado",
    price: 356,
    image: "/activated-charcoal-soap-round-flower-shape-cream-c.jpg",
    discount: null,
    features: ["6 cuotas sin interés", "12 Meses de garantía", "Recibe tu pedido en 24 h.", "Devoluciones gratuitas"],
  },
  {
    id: 3,
    name: "Jabón de Caléndula",
    price: 2400,
    image: "/orange-calendula-soap-beehive-shape.jpg",
    discount: 25,
    features: ["Antiinflamatorias", "Cicatrizantes", "Antibacterianas"],
  },
  {
    id: 4,
    name: "Jabón de Limón",
    price: 2000,
    image: "/yellow-lemon-soap-three-pieces-stacked.jpg",
    discount: null,
    features: ["Pack 3 Unidades: $6800", "Limpieza y control de grasas", "Purifica y limpia los poros"],
  },
  {
    id: 5,
    name: "Jabón de Avena",
    price: 2199,
    image: "/oatmeal-soap-beige-pink-gradient-flower-shape.jpg",
    discount: 10,
    features: [
      "Para pieles muy sensibles e irritadas",
      "Calmante y Alivio del enrojecimiento",
      "Humectación natural para piel seca",
    ],
  },
  {
    id: 6,
    name: "Jabón de Lavanda",
    price: 2200,
    image: "/purple-lavender-soap-round-flower-shape.jpg",
    discount: null,
    features: ["Para un baño calmante y antiestrés", "Aroma relajante", "Calma la piel irritada y sensible"],
  },
  {
    id: 7,
    name: "Jabón de Café",
    price: 2999,
    image: "/coffee-soap-brown-massage-nodules.jpg",
    discount: 25,
    features: ["Para exfoliar, estimular y tonificar", "Estimula la circulación y renueva la piel", "Antioxidante"],
  },
  {
    id: 8,
    name: "Jabón de Aloe Vera",
    price: 2000,
    image: "/green-aloe-vera-soap-rose-flower-shape.jpg",
    discount: null,
    features: [
      "Calma las irritaciones y el ardor",
      "Reparación natural para piel expuesta al sol",
      "Ideal para el verano",
    ],
  },
  {
    id: 9,
    name: "Jabón de Eucalipto",
    price: 2400,
    image: "/green-eucalyptus-soap-square-two-tone.jpg",
    discount: 25,
    features: [
      "Para un baño despejante y refrescante",
      "Abre las vías respiratorias (efecto balsámico)",
      "Propiedades antisépticas y purificantes",
    ],
  },
  {
    id: 10,
    name: "Jabón de Miel",
    price: 1600,
    image: "/orange-honey-soap-hexagonal-honeycomb-shape.jpg",
    discount: null,
    features: [
      "Aportar elasticidad a la piel",
      "Hidratante y humectante natural",
      "Aporta brillo y suavidad inmediata",
    ],
  },
  {
    id: 11,
    name: "Jabón de Naranja",
    price: 2400,
    image: "/orange-citrus-soap-dome-half-sphere-shape.jpg",
    discount: 15,
    features: ["Para iluminar y revitalizar la piel opaca", "Estimula la circulación", "Aroma cítrico"],
  },
  {
    id: 12,
    name: "Producto 14",
    price: 99,
    image: "/colorful-bear-shaped-soaps-grid-twelve-colors.jpg",
    discount: 25,
    features: ["6 cuotas sin interés", "Recibe tu pedido en 24 h.", "Devoluciones gratuitas", "Envío sin cargo"],
  },
  {
    id: 13,
    name: "Producto 15",
    price: 460,
    image: "/red-white-candy-swirl-pattern-round-soap.jpg",
    discount: 15,
    features: ["6 cuotas sin interés", "Recibe tu pedido en 24 h.", "Devoluciones gratuitas", "Envío sin cargo"],
  },
]

export function ProductGrid() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
