import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
             style={{
               background: 'var(--gradient-hero)'
             }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm">
              <Smartphone className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Available on Mobile</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Ready to Get Started?
            </h2>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of passengers and drivers making provincial transportation better every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg w-full sm:w-auto font-semibold"
              >
                Download the App
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto font-semibold"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
