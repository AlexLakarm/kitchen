import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100),
  company: z.string().trim().min(1, "L'entreprise est requise").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(1, "Le téléphone est requis").max(20),
  eventDate: z.string().min(1, "La date est requise"),
  guests: z.string().trim().min(1, "Le nombre d'invités est requis"),
  message: z.string().trim().min(1, "Le message est requis").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    eventDate: "",
    guests: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        eventDate: "",
        guests: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        
        toast({
          title: "Erreur",
          description: "Veuillez vérifier les champs du formulaire.",
          variant: "destructive",
        });
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 1 23 45 67 89",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@saveursdumonde.fr",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Paris, France",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contactez-Nous
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Parlons de votre événement et créons ensemble une expérience culinaire mémorable
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card"
                >
                  <info.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-playfair text-lg font-semibold mb-2 text-foreground">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground">{info.content}</p>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8 shadow-elegant bg-gradient-card">
              <h2 className="font-playfair text-3xl font-bold mb-6 text-foreground">
                Demande de Devis
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="company">Entreprise *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={errors.company ? "border-destructive" : ""}
                    />
                    {errors.company && (
                      <p className="text-destructive text-sm mt-1">{errors.company}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="eventDate">Date de l'événement *</Label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className={errors.eventDate ? "border-destructive" : ""}
                    />
                    {errors.eventDate && (
                      <p className="text-destructive text-sm mt-1">{errors.eventDate}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="guests">Nombre d'invités *</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      value={formData.guests}
                      onChange={handleChange}
                      className={errors.guests ? "border-destructive" : ""}
                    />
                    {errors.guests && (
                      <p className="text-destructive text-sm mt-1">{errors.guests}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Votre message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={errors.message ? "border-destructive" : ""}
                    placeholder="Décrivez-nous votre projet d'événement..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity shadow-elegant"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer la demande
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
