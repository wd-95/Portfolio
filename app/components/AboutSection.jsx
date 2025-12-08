import {FiRefreshCw, FiUsers, } from "react-icons/fi";
import {AiOutlineBarChart} from "react-icons/ai";
import { LuBrain } from "react-icons/lu";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">
          À propos <span className="text-light dark:text-dark"> de moi</span>
        </h2>

       <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-start text-justify">
  <div className="space-y-6">
    <h3 className="text-2xl dark:text-white">
      Je suis un développeur en reconversion, en train de construire mes premières expériences dans le monde de la tech.
    </h3>

    <p className="text-muted-foreground">
      Après une dizaine d'années dans le transport et la logistique, où j'étais fortement orienté amélioration continue,
      j'ai occupé plusieurs postes chez <a className="hover:text-[#005BAB]" href="https://www.stef.com/" target="_blank" ><strong>STEF Logistique</strong></a> 
      ( <strong>Responsable Amélioration de la Performance</strong> ) puis chez <a className="hover:text-[#DD1B2D]" href="https://www.airliquide.com/"target="_blank" ><strong> Air Liquide</strong></a> 
      ( <strong>Analyste Performance Logistique</strong> ). J'y ai piloté des projets d'optimisation des contrats de transport,
      de déménagement et de réorganisation d'entrepôts, mené une migration WMS, déployé des solutions IoT et mis en place des KPI
      et tableaux de bord (<strong>Power BI</strong>, <strong>Google Sheets</strong>).
      <br />
      <br />
      En tant que <a className="hover:text-green-600" href="https://fr.leansixsigma.org/lean-six-sigma-green-belt/" target="_blank"><strong>Green Belt Lean</strong></a >, j'ai accompagné les équipes sur le terrain, animé des démarches
      d'amélioration continue et assuré la formation de nouveaux collaborateurs, ce qui m'a donné le goût du travail en équipe,
      de la pédagogie et de la mesure de la performance.
    </p>

    <p className="text-muted-foreground">
      Aujourd'hui, je me forme au <strong>développement web</strong>, au <strong>développement applicatif</strong>, aux pratiques
      <strong> DevOps</strong>, ainsi qu'aux domaines de la <strong>cybersécurité</strong>, de la <strong>data</strong> et de l'<strong>IA</strong>. 
      Je souhaite mettre à profit cette expérience opérationnelle et orientée données pour concevoir des solutions fiables, utiles et sécurisées.
    </p>
          <h3 className="text-2xl font-semibold dark:text-white text-center mt-10">
              Mes Soft <span className="text-light dark:text-dark"> Skills</span>
            </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
 
            <div className="rounded-md dark:bg-gray-800/30 p-6 card-hover shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-dark/10">
                  <LuBrain className="h-6 w-6 text-dark" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg dark:text-white">
                    Curiosité
                  </h4>
                  <p className="text-muted-foreground">
                    Envie de comprendre comment les choses fonctionnent 
                    et d'explorer progressivement de nouveaux outils et technologies.
                  </p>
                </div>
              </div>
            </div>

 
            <div className="rounded-md dark:bg-gray-800/30 p-6 card-hover shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-dark/10">
                  <FiRefreshCw className="h-6 w-6 text-dark" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg dark:text-white">
                    Adaptabilité
                  </h4>
                  <p className="text-muted-foreground">
                    Habitué à évoluer dans des contextes logistiques changeants 
                    (nouveaux outils, nouveaux process) 
                    et actuellement en transition vers la tech.
                  </p>
                </div>
              </div>
            </div>


            <div className="rounded-md dark:bg-gray-800/30 p-6 card-hover shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-dark/10">
                  <FiUsers className="h-6 w-6 text-dark" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg dark:text-white">
                    Travail d'équipe
                  </h4>
                  <p className="text-muted-foreground">
                    Expérience de collaboration avec des profils variés, soutien aux équipes 
                    sur le terrain et accompagnement lors de la mise en place de nouveaux outils ou méthodes.
                  </p>
                </div>
              </div>
            </div>


            <div className="rounded-md dark:bg-gray-800/30 p-6 card-hover shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-dark/10">
                  <AiOutlineBarChart className="h-6 w-6 text-dark" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg dark:text-white">
                    Esprit analytique
                  </h4>
                  <p className="text-muted-foreground">
                    Goût pour l'analyse de données et les indicateurs de performance, 
                    avec une approche structurée pour comprendre les problèmes, prioriser 
                    les actions et proposer des solutions concrètes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center mt-10">
              <a href="#contact" className="cosmic-button">
                {" "}
                Me contacter
              </a>

              <a
                href="/CV_Warith.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border dark:border-dark border-light dark:text-dark text-light hover:bg-dark/10 transition-colors duration-300"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
    </section>
  );
};


