import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChefHat, Utensils, Sparkles, Wine } from "lucide-react";
import heroImage from "@/assets/hero-catering.jpg";
import standAsian from "@/assets/stand-asian.jpg";
import standMediterranean from "@/assets/stand-mediterranean.jpg";
import standFrench from "@/assets/cuisinefr.jpeg";
import standLatin from "@/assets/stand-latin.jpg";
import standAmerican from "@/assets/usa.jpeg";

const Index = () => {
  const cuisines = [
    {
      title: "Asie du Sud-Est",
      image: standAsian,
      description: "Banh mi, Bao, Satay, Lok-Lak, toutes les saveurs de l'Asie.  ",
    },
    {
      title: "Méditerranée",
      image: standMediterranean,
      description: "Mezze, arrancini, kefta et autres délices du bassin méditerranéen.",
    },
    {
      title: "Française",
      image: standFrench,
      description: "Croques-monsieur, Pâté en croûte, Boeuf bourguignon, nos portes drapeaux dans vos assiettes.",
    },
    {
      title: "USA",
      image: standAmerican, // Image temporaire, sera remplacée par l'image de burgers
      description: "Burgers, Grilled cheese, bagels, hot dogs et autres icônes de la street food.",
    },
    {
      title: "Amérique Latine",
      image: standLatin,
      description: "Ceviche, Tacos, Empanadas et autres saveurs épicées.",
    },
  ];

  const features = [
    {
      icon: Utensils,
      title: "Multi-stands TravelsFood",
      description: "Plusieurs univers culinaires réunis en une seule prestation",
    },
    {
      icon: Sparkles,
      title: "Expérience Immersive",
      description: "Scénarisation complète pour une expérience mémorable",
    },
    {
      icon: ChefHat,
      title: "Chefs Experts",
      description: "Des professionnels passionnés par leur cuisine",
    },
    {
      icon: Wine,
      title: "Bar convivial et tendance",
      description: "Pensé pour offrir une expérience moderne qui s'adapte aux envies d'aujourd'hui",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-jakarta">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-primary/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-in-up">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Un Voyage Culinaire
            <br />
            <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              À Travers le Monde
            </span>
          </h1>
          <p className="font-jakarta text-lg md:text-xl mb-6 text-primary-foreground/80 font-medium italic">
            • Nantes et alentours •
          </p>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 font-light">
            Transformez vos événements professionnels en expériences gastronomiques immersives 
            avec nos stands TravelsFood
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow text-lg px-8 py-6">
                Nous contacter
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 bg-background/20 backdrop-blur-sm"
              onClick={() => document.getElementById('cuisines')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir nos stands
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Une Expérience Sur-Mesure
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nous créons des événements culinaires uniques qui marquent les esprits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisines Section */}
      <section id="cuisines" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nos Stands TravelsFood
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des univers culinaires authentiques et raffinés pour sublimer vos événements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cuisines.map((cuisine, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cuisine.image}
                    alt={cuisine.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <h3 className="font-playfair text-2xl font-bold mb-2">
                      {cuisine.title}
                    </h3>
                    <p className="text-primary-foreground/90 text-sm">
                      {cuisine.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-foreground rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Prêt à Créer Votre Événement ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé
          </p>
          <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow text-lg px-8 py-6"
            >
              Nous contacter
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
