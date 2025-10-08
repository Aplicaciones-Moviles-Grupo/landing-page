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

    return (
        <section className="py-20 px-4 bg-muted/30">
            <div className="container max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Nuestro Equipo
                </h2>
                <p className="text-lg text-muted-foreground mb-12">
                    Conoce a las personas detrás del desarrollo y visión de Chapa tu Ruta.
                </p>

                {/* Grid de integrantes */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden hover:shadow-[var(--shadow-soft)] transition-all duration-300"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-muted-foreground text-sm">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
