// "use client";

// import Image from "next/image";
// import wd from "../../public/wd.png";

// export default function AvatarBlob() {
//   return (
//     <div className="relative mx-auto w-80 max-w-full aspect-square md:w-96 blob-hover">  {/*taille du blob*/}
    
//       <div className="blob w-full h-full">
//         <div className="relative w-full h-full">  {/*taille de l'avatar*/}
//           <Image
//             src={wd}
//             alt="Mon portrait"
//             fill
//             className="object-contain object-bottom mt-4"  /* Ajuste l'avatar à l'intérieur du blob 
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
 
"use client";

import Image from "next/image";
import wd from "../../public/wd.png";

export default function AvatarBlob() {
  return (
    <div className="relative mx-auto w-80 max-w-full aspect-square md:w-96 blob-hover">
      <div className="blob w-full h-full overflow-hidden">  
        <div className="relative w-full h-full">
          <Image
            src={wd}
            alt="Mon portrait"
            fill
            className="object-cover object-center" 

          />
        </div>
      </div>
    </div>
  );
}
