import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Team = () => {
    const teamMembers = [
        {
            name: "Adrian Emanuel Valerio Garcia",
            role: "Project Manager",
            image: "src/assets/Adrian.png",
        },
        {
            name: "Fabrizio Alexander Cutiri Agüero",
            role: "Backend Developer",
            image: "src/assets/Fabrizio.png",
        },
        {
            name: "Renzo José Araujo Ingunza",
            role: "Frontend Developer",
            image: "src/assets/Renzo.png",
        },
        {
            name: "Yasser Renteria Palacios",
            role: "UI/UX Designer",
            image: "src/assets/Yasser.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-20 px-4 bg-muted/30">
            <div className="container max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Nuestro Equipo
                </h2>
                <p className="text-lg text-muted-foreground mb-12">
                    Conoce a las personas detrás del desarrollo y visión de Chapa tu Ruta.
                </p>

                <div className="relative flex items-center justify-center">
                    {/* Botón izquierda */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                    >
                        <ChevronLeft className="h-6 w-6 text-primary" />
                    </button>

                    {/* Card del integrante */}
                    <div className="w-full sm:w-96 bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden">
                        <img
                            src={teamMembers[currentIndex].image}
                            alt={teamMembers[currentIndex].name}
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">
                                {teamMembers[currentIndex].name}
                            </h3>
                            <p className="text-muted-foreground">{teamMembers[currentIndex].role}</p>
                        </div>
                    </div>

                    {/* Botón derecha */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                    >
                        <ChevronRight className="h-6 w-6 text-primary" />
                    </button>
                </div>

                {/* Indicadores */}
                <div className="flex justify-center mt-6 space-x-2">
                    {teamMembers.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${
                                currentIndex === index ? "bg-primary" : "bg-primary/30"
                            } transition`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;