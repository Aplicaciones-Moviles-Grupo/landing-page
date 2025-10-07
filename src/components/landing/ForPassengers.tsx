import { Button } from "@/components/ui/button";
import { MapPin, Clock, Shield, DollarSign } from "lucide-react";

const ForPassengers = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Find Routes Easily",
      description: "Search and discover all available routes and stations near you"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Real-time updates mean no more waiting around wondering when transport will arrive"
    },
    {
      icon: Shield,
      title: "Travel Safely",
      description: "Verified drivers and vehicles ensure your safety on every journey"
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Transparent pricing with no hidden fees or surprise charges"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                For Passengers
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Never Miss a Ride<br />
                <span className="text-primary">To Your Destination</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're commuting to work, visiting family, or exploring your province, finding reliable transportation has never been easier.
              </p>
            </div>

            <Button variant="hero" size="lg">
              Get Started as Passenger
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
