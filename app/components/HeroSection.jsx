"use client";

import Typewriter from "typewriter-effect";
import AvatarBlob from "./AvatarBlob";
import React from "react";

export default function HeroSection() {
  return (
    <section id="hero"className="py-24 px-10 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-0 mt-20 lg:ml-20">
      

        <div className="md:w-1/2 text-left">


          <h2 className="text-4xl md:text-5xl lg:text-7xl py-2 text-teal-600 font-medium dark:text-teal-400 mt-4 flex flex-wrap items-baseline gap-2">
            <span className="text-2xl text-gray-900 dark:text-white">
              Je suis
            </span>

            <span className="font-extrabold relative inline-block">
              <span className="invisible">Warith Dimia.dddddddd</span>

              <span className="absolute left-0 top-0 whitespace-nowrap">
                <Typewriter
                  options={{
                    strings: ["Warith Dimia."],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    pauseFor: 3000,
                  }}
                />
              </span>
            </span>
          </h2>

          <p className="text-xl py-0 leading-8 text-gray-800 dark:text-gray-200 md:text-2xl">
            Développeur en reconversion et étudiant à Epitech, intéressé par les différents métiers de la tech.
          </p>
        </div>

        
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <AvatarBlob />
        </div>
      </div>
    </section>
  );
}
