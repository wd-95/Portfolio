"use client";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SuccessToast from "./SuccessToast";

const ContactSection = () => {
  const email = "warith.dimia@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  //  Toast après envoi msg
  const searchParams = useSearchParams();
  const isSentParam = searchParams.get("sent") === "1";

  const [showToast, setShowToast] = useState(isSentParam);

  useEffect(() => {
    if (!showToast) return;
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
  
  }, [showToast]);

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      {showToast && <SuccessToast onClose={() => setShowToast(false)} />}

      <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center dark:text-white">
          Me <span className="dark:text-dark text-light"> Contacter</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Si vous souhaitez échanger, proposer un projet, un stage ou une alternance,
          vous pouvez me contacter via ce formulaire ou directement par e-mail.
        </p>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      
          <div className="bg-card p-8 rounded-lg shadow-xs flex flex-col items-center space-y-8 text-center">
            <h3 className="text-2xl font-semibold dark:text-white">
              Informations de contact
            </h3>

            
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-light/10">
                <FiMail className="h-6 w-6 text-light" />
              </div>

              <div className="text-left">
                 <p className="text-sm font-medium dark:text-white mb-1">
                  Adresse e-mail
                </p>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-muted-foreground hover:text-light transition-colors underline-offset-2 hover:underline"
                >
                  {copied ? "Email copied" : email}
                </button>
              </div>
            </div>

            {/* séparation */}
            <div className="w-full h-px bg-white/10" />

            
            <div>
               <p className="text-sm font-medium dark:text-white mb-3">
                Réseaux
              </p>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/warith-dimia"
                  target="_blank"
                  className="text-muted-foreground hover:text-light"
                >
                  <FiLinkedin size={26} />
                </a>
                <a
                  href="https://github.com/wd-95"
                  target="_blank"
                  className="text-muted-foreground hover:text-light"
                >
                  <FiGithub size={26} />
                </a>
              </div>
            </div>
          </div>

          
          <div className="bg-card dark:bg-gray-800/90 p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 dark:text-white text-center">
              Envoyer un message
            </h3>

            <form
              className="space-y-6"
              action="https://formsubmit.co/db0f995f26b6c3099c619a1f938edaf9"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New message from portfolio" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3001/?sent=1#contact"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border dark:border-gray-700 border-gray-200 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-light dark:focus:ring-dark"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Votre adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border dark:border-gray-700 border-gray-200 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-light dark:focus:ring-dark"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border dark:border-gray-700 border-gray-200 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-light dark:focus:ring-dark resize-none"
                  placeholder="Bonjour, je souhaiterais vous contacter à propos de..."
                />
              </div>

              <button
                type="submit"
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                Envoyer le message
                <FiSend size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
