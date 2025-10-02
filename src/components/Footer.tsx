import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-primary mb-4">
              Saveurs du Monde
            </h3>
            <p className="font-inter text-muted-foreground text-sm leading-relaxed">
              Votre partenaire traiteur premium pour des événements professionnels inoubliables. 
              Une expérience culinaire immersive à travers les cuisines du monde.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-inter font-semibold text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 font-inter text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone size={16} className="mt-1 text-primary flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail size={16} className="mt-1 text-primary flex-shrink-0" />
                <span>contact@saveursdumonde.fr</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={16} className="mt-1 text-primary flex-shrink-0" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="font-inter text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Saveurs du Monde. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
