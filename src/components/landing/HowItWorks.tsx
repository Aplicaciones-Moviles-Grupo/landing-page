import { Search, MapPin, Navigation, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Search Your Route",
      description: "Enter your destination and browse available transportation options"
    },
    {
      icon: MapPin,
      title: "Choose Your Station",
      description: "Select the most convenient station and view real-time availability"
    },
    {
      icon: Navigation,
      title: "Track in Real-Time",
      description: "Monitor your ride's location and estimated arrival time live"
    },
    {
      icon: CheckCircle,
      title: "Arrive Safely",
      description: "Complete your journey with peace of mind and rate your experience"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting around your province is simple with our easy 4-step process
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-accent -z-10" 
               style={{ width: 'calc(100% - 8rem)', left: '4rem' }} 
          />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm shadow-[var(--shadow-soft)] z-10">
                    {index + 1}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border-4 border-background shadow-[var(--shadow-soft)]">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>

                <h3 className="font-bold text-xl">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
