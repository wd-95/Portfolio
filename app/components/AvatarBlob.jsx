"use client";

import Image from "next/image";
import wd from "../../public/wd.png";
import styles from "./AvatarBlob.module.css";

export default function AvatarBlob() {
  return (
    <div className="relative mx-auto w-80 max-w-full aspect-square md:w-96 flex items-center justify-center">
      <div className={styles.blob}>
        <Image
          src={wd}
          alt="Mon portrait"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
    </div>
  );
}