import { Card, CardContent } from "@/components/ui/card";
import featureMap from "@/assets/feature-map.png";
import featureTracking from "@/assets/feature-tracking.png";
import featureConnect from "@/assets/feature-connect.png";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: featureMap,
      title: t('features.map.title'),
      description: t('features.map.description')
    },
    {
      icon: featureTracking,
      title: t('features.tracking.title'),
      description: t('features.tracking.description')
    },
    {
      icon: featureConnect,
      title: t('features.connect.title'),
      description: t('features.connect.description')
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('features.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
