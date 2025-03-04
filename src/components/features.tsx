import { PropsWithChildren, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

interface BentoTiltProps {
  className?: string;
}

// interface BentoCardProps {
//   description?: React.ReactNode;
// }

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
  // description?: string;
  description?: React.ReactNode;
}

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <article className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="tetx-xl mt-3 max-w-64 md:text-base">{description}</p>
          )}
        </div>
      </div>
    </article>
  );
};

export const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        {/* <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
          Certify your security infrastructure and elevate <br /> your protection services to a new level.
          </p>
          <br />
          <p className="max-w-md text-justify font-circular-web text-lg text-blue-50 opacity-50">
          Experience peace of mind knowing that your assets are safeguarded by industry leaders committed to your security.
          </p>
        </div> */}
        <div className="px-5 py-32">
          <h2 className="font-circular-web text-xl text-blue-50">
            connect with us to hold secrecy
          </h2>
          <br />
          <p className="max-w-md text-justify font-circular-web text-lg text-blue-50 opacity-50">
            As valued partners in our security ecosystem, you have the authority
            to provide and verify vital information that enhances the
            effectiveness of our services. This direct connection ensures that
            data related to security monitoring, camera feeds, and incident
            reports is accurate and current, empowering you to contribute
            actively to a safer environment.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/about.mp4"
            title={
              <>
                Abo<b>ut</b> Us
              </>
            }
            description={
              <span className="block w-full max-w-[1900px] text-justify">
                We are seasoned security professionals with years of experience,
                driven by enthusiasm and expertise. Our commitment to excellence
                ensures the delivery of top-tier protection services, tailored
                to meet diverse security needs. With a deep understanding of
                risk management, surveillance, and advanced security protocols,
                we strive to create a safe and secure environment for our
                clients.
              </span>
            }
          />
        </BentoTilt>

        <div
          id="nexus"
          className="grid h-[135vh] grid-cols-2 grid-rows-2 gap-7"
        >
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/freature-1.mp4"
              title={
                <>
                  Incre<b>as</b>e YOUR SECURITY
                </>
              }
              description={
                <span className="block w-full max-w-[1900px] text-justify">
                  In today’s ever-evolving landscape of threats, ensuring the
                  safety of your assets is paramount. Our dedicated security
                  solutions are designed to enhance your protection at every
                  level.
                </span>
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  O<b>U</b>R Future Goal
                </>
              }
              description="We provide expert security services, including protection, monitoring, secure transport, and specialized training for ultimate safety and peace of mind."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  Featu<b>re</b>d In
                </>
              }
              description="Thrilled to provide top-tier security solutions, recognized by leading professionals across various industries. Our expertise in Object Protection, District Service, Event Protection, Guard Protection, Parking Monitoring, Construction Site Security, and Money and Value Transport positions us at the forefront of safety and security for businesses worldwide."
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};
