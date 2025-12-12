import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contacto" className="bg-gradient-to-r from-primary via-secondary to-accent">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 text-white">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">RDC Jabones Artesanales</h3>
            <p className="text-sm text-white/90 mb-4 text-pretty">
              Creamos jabones artesanales con amor y dedicación, utilizando ingredientes naturales de la más alta
              calidad.
            </p>
            <p className="text-xs text-white/80 italic flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Regalos del Corazón
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-white/80 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white/80 transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#personalizados" className="hover:text-white/80 transition-colors">
                  Jabones Personalizados
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white/80 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white/80 transition-colors">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@rdcjabones.com" className="hover:text-white/80 transition-colors">
                  info@rdcjabones.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/90">Ciudad, País</span>
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="space-y-3 mb-6">
              <a
                href="https://instagram.com/rdcjabones"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white/80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@rdcjabones</span>
              </a>
              <a
                href="https://facebook.com/rdcjabones"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white/80 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm">RDC Jabones Artesanales</span>
              </a>
            </div>
            <Button variant="secondary" size="sm" className="w-full">
              ¡Pedidos Online!
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6 text-center text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} RDC Jabones Artesanales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
