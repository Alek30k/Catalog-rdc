import Image from "next/image";

export function CustomSoapSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assorted-colorful-handmade-artisan-soaps-various-s.jpg"
              alt="Jabones personalizados"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Creamos jabones Personalizados para eventos especiales
            </h2>

            <ul className="space-y-3">
              {["Bautizos", "Cumpleaños", "Bodas"].map((event) => (
                <li
                  key={event}
                  className="flex items-center gap-3 text-lg text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>{event}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              Cada jabón es único y está hecho a mano con ingredientes naturales
              de la más alta calidad. Personalizamos diseños, aromas y colores
              para que tu evento sea inolvidable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
