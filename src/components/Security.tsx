import { PropsWithChildren, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { AnimatedTitle } from "./animated-title";
interface BentoTiltProps {
  className?: string;
}

const BentoTilt = ({
  children,
  className = "",
}: PropsWithChildren<BentoTiltProps>) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}

// const BentoCard = ({ src, title, description }: BentoCardProps) => {
//   return (
//     <article className="relative size-full">
//       <video
//         src={src}
//         loop
//         muted
//         autoPlay
//         className="absolute left-0 top-0 size-full object-cover  object-center"
//       />

//       <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
//         <div>
//           <h1 className="bento-title special-font">{title}</h1>
//           {description && (
//             <p className="tetx-xl mt-3 max-w-64 md:text-base">{description}</p>
//           )}
//         </div>
//       </div>
//     </article>
//   );
// };

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <article className="relative size-full group overflow-hidden">
      {/* Video - Hidden on Hover */}
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center transition-opacity duration-300 group-hover:opacity-50"
      />

      {/* Solid Background on Hover */}
      <div className="absolute inset-0 bg-[#284493] transition-opacity duration-300 opacity-0 group-hover:opacity-50"></div>

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="text-xl mt-3 max-w-64 md:text-base">{description}</p>
          )}
        </div>
      </div>
    </article>
  );
};


export const Security = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
       <div className="px-5 py-32">
          <br />
          <AnimatedTitle containerClass="mt-5 !text-white text-center">
            {"Security Serv<b>i</b>ces <br /> We Offer"}
          </AnimatedTitle>
        </div>

        {/* <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] flex items-center justify-center">
  <BentoCard
    src="/videos/SecurityServices.mp4"
    title={
      <h2 className="text-center w-full">
        Our Secu<b>rit</b>y Services
      </h2>
    }
    description={
      <div className="flex flex-col items-center justify-center text-center w-full">
        <span className="max-w-lg">
          We are seasoned security professionals with years of experience,
          driven by enthusiasm and expertise. Our commitment to excellence
          ensures the delivery of top-tier protection services, tailored
          to meet diverse security needs. With a deep understanding of
          risk management, surveillance, and advanced security protocols,
          we strive to create a safe and secure environment for our clients.
        </span>
      </div>
    }
  />
</BentoTilt> */}



        <div
          id="nexus"
          className="grid h-[295vh] grid-cols-2 grid-rows-5 gap-7"
        >
          <BentoTilt className="text-black bento-tilt_1 me-14 md:col-span-1 md:me-0 text-justify">
          <BentoCard
  src="/videos/PropertyProtection.mp4"
  title={
    <span className="text-[DFDFF0]" >
      Property Protection
    </span>
  }
  description={
    <span className="font-medium">
      Property Protection ensures the safety of residential and commercial properties by preventing unauthorized access, vandalism, and theft through advanced security measures and surveillance.
    </span>
  }
/>

          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/Event.mp4"
              title={
                <span className="text-[DFDFF0]">
                  Event Protection
                </span>
              }
              description={
                <span className="font-medium">
                Event Protection ensures the safety and security of events by managing crowd control, preventing unauthorized access, and responding to emergencies effectively.
              </span>
              }            
                />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/Emergency.mp4"
              title={
                <span className="text-[DFDFF0]" >
                  Emergency Call & Service
                </span>
              }
              description={
                <span className="font-medium text-grey">
                  Emergency Call & Service provides rapid response and assistance during critical situations, ensuring safety and support when it matters most."
                  </span>
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/Gatekeeper.mp4"
              title={
                <span className="text-[DFDFF0]">
                  Gatekeeper Services
                </span>
              }
              description={
                <span className="font-medium text-grey">
                  Gatekeeper Services ensure controlled access and security at entry points, preventing unauthorized access and maintaining a safe environment.
                </span>
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/Reception.mp4"
              title={
                <span className="text-[DFDFF0]">
                  Reception Services
                </span>
              }
              description={
              <span className="font-medium text-grey">
                Our reception services ensure a professional and welcoming first impression for visitors. We manage front desk operations, access control, and visitor assistance with efficiency and security.
              </span>
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/Fire.mp4"
              title={
                <span className="text-[DFDFF0]">
                  Fire Safety Security 
                </span>
              }
              description={
                <span className="font-medium text-grey">
                  We provide fire prevention, monitoring, and emergency response services to protect lives and property, ensuring compliance with safety regulations and rapid action in case of fire hazards.
                  {/* Our fire safety security services focus on preventing, detecting, and responding to fire hazards. We implement advanced fire protection measures, conduct regular inspections, and ensure compliance with safety regulations to safeguard lives and property." */}
                </span>
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/Department.mp4"
              title={
                <span className="text-[DFDFF0]">
                  Departemnt Store 
                </span>
              }
              description={
                <span className="font-medium text-grey">
                  We ensure a safe shopping environment by preventing theft, monitoring store activities, and providing professional security personnel for customer and staff safety."
                </span>
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/Doorman.mp4"
              title={
                <span className="text-[DFDFF0]">
                  Doorman 
                </span>
              }
              description={
                <span className="font-medium text-grey">
                  Our professional doorman services enhance security and hospitality by controlling access, assisting guests, and maintaining a welcoming and safe environment for residential and commercial properties."
                </span>
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/Mall.mp4"
              title={
                <span className="text-[DFDFF0]">
                  Mall Guard 
                </span>
              }
              description={
                <span className="font-medium text-grey">
                  Mail guard services ensure the secure handling, screening, and delivery of mail and packages, preventing unauthorized access and protecting sensitive correspondence in residential and corporate settings."
                </span>
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/Construction.mp4"
              title={
                <span className="text-[DFDFF0]">
                  Construction Site 
                </span>
              }
              description={
                <span className="font-medium text-grey">
                  Construction site services provide security and surveillance to prevent theft, vandalism, and unauthorized access while ensuring the safety of workers, equipment, and materials throughout the project."
                </span>
              }
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Security;
