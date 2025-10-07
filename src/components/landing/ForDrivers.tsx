import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Calendar, Award } from "lucide-react";

const ForDrivers = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Your Income",
      description: "Connect with more passengers and maximize your daily earnings"
    },
    {
      icon: Users,
      title: "Build Your Network",
      description: "Establish regular customers and create a reliable passenger base"
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Work on your own terms and manage your availability"
    },
    {
      icon: Award,
      title: "Earn Recognition",
      description: "Build your reputation through ratings and verified service"
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
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium">
                For Drivers
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Grow Your Business<br />
                <span className="text-accent">Serve Your Community</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join our network of trusted drivers providing essential transportation services. Increase your visibility and connect with passengers who need you.
              </p>
            </div>

            <Button variant="secondary" size="lg">
              Register as Driver
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDrivers;
