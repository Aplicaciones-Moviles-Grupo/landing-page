import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Calendar, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const ForDrivers = () => {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: TrendingUp,
      title: t('drivers.feature1.title'),
      description: t('drivers.feature1.description')
    },
    {
      icon: Users,
      title: t('drivers.feature2.title'),
      description: t('drivers.feature2.description')
    },
    {
      icon: Calendar,
      title: t('drivers.feature3.title'),
      description: t('drivers.feature3.description')
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-6 lg:order-1">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-border/50 bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-soft)] space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-8 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {t('drivers.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('drivers.subtitle')}
              </p>
            </div>

            <Button variant="secondary" size="lg">
              {t('hero.ctaDriver')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDrivers;
