import { Button } from "@/components/ui/button";
import { MapPin, Clock, Shield, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";

const ForPassengers = () => {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: MapPin,
      title: t('passengers.feature1.title'),
      description: t('passengers.feature1.description')
    },
    {
      icon: Clock,
      title: t('passengers.feature2.title'),
      description: t('passengers.feature2.description')
    },
    {
      icon: Shield,
      title: t('passengers.feature3.title'),
      description: t('passengers.feature3.description')
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {t('passengers.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('passengers.subtitle')}
              </p>
            </div>

            <Button variant="hero" size="lg">
              {t('hero.ctaPassenger')}
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-soft)] space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForPassengers;
