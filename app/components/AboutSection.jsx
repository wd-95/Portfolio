import { FiBriefcase, FiCode, FiUser } from "react-icons/fi";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">
          À propos <span className="text-light dark:text-dark"> de moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl  dark:text-white">
            Je suis un développeur en reconversion, en train de construire mes premières expériences dans le monde de la tech.
            {/* J’explore le développement web, les applications, le DevOps, la cybersécurité, la data et l’IA à travers différents projets. */}
            </h3>

            <p className="text-muted-foreground">
              Après une dizaine d’années dans le transport et la logistique,
              j’ai décidé de donner une nouvelle orientation à ma carrière
              en me tournant vers le développement et les métiers de la tech.
            </p>

            <p className="text-muted-foreground">
              Aujourd’hui, je me forme au développement web, applicatif et DevOps.
              En parallèle, je m’intéresse aussi à la cybersécurité, la data et à l’IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Me contacter
              </a>

              <a
                href="/CV_Warith.pdf"
                className="px-6 py-2 rounded-full border dark:border-dark border-light dark:text-dark text-light hover:bg-dark/10 transition-colors duration-300"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-md dark:bg-gray-800/30 p-6 card-hover shadow-sm ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-dark/10">
                  <FiCode className="h-6 w-6 text-dark" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg dark:text-white "> Développement web & applications</h4>
                  <p className="text-muted-foreground text">
                    Création de sites et de petites applications avec HTML/CSS, JavaScript, React, Next.js et Node.js.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md dark:bg-gray-800/30 p-6 card-hover shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-dark/10">
                  <FiUser className="h-6 w-6 text-dark" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg dark:text-white">Sensibilité à la cybersécurité</h4>
                  <p className="text-muted-foreground">
                    Intérêt pour les notions de sécurité et envie de les intégrer dès la conception des projets.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md dark:bg-gray-800/30 p-6 card-hover shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-dark/10">
                  <FiBriefcase className="h-6 w-6 text-dark" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg dark:text-white">DevOps & outils</h4>
                  <p className="text-muted-foreground">
                   Découverte des pratiques DevOps : Git/GitHub, Linux, Docker.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


