import { PropsWithChildren, useRef, useState } from "react";
// import { TiLocationArrow } from "react-icons/ti";
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

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;


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

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <article className="relative size-full group overflow-hidden">
      {/* Image - Hidden on Hover */}
      <img
        src={src}
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


export const Cleaning = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
       <div className="px-5 py-32">
          <br />
          <AnimatedTitle containerClass="mt-5 !text-white text-center">
            {"Cleaning Serv<b>i</b>ces <br /> We Offer"}
          </AnimatedTitle>
        </div>


        <div
          id="nexus"
          className="grid grid-cols-2 auto-rows-fr gap-6 h-auto"
        >
                    <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="text-black bento-tilt_1 me-14 md:col-span-1 md:me-0 text-justify"> */}
          <BentoCard
  src="/img/c1.jpg"
  title={
    <span className="text-[DFDFF0]">
      Cleaning 
      and service

    </span>
  }
  description={
    <span className="font-medium">
      Comprehensive cleaning solutions, including routine maintenance, deep cleaning, and specialized services tailored to different industries.
    </span>
  }
/>

          </BentoTilt>

{/* <BentoTilt className="text-black bento-tilt_1 me-14 md:col-span-1 md:me-0 text-justify relative transition-all duration-300 hover:bg-black hover:bg-opacity-50 rounded-lg p-4">
  <BentoCard
    src="/img/c1.jpg"
    title={
      <span className="text-[#DFDFF0]" style={{ WebkitTextStroke: "2px black" }}>
        Cleaning and Service
      </span>
    }
    description={
      <span className="font-medium">
        Comprehensive cleaning solutions, including routine maintenance, deep cleaning, and specialized services tailored to different industries.
      </span>
    }
  />
</BentoTilt> */}



<BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
              src="/img/c2.jpg"
              title={
                <span className="text-[DFDFF0]">
                  Maintenance cleaning
                </span>
              }
              description={
                <span className="font-medium">
                Regular cleaning to keep spaces clean and hygienic, ensuring long-term upkeep of buildings and facilities.
              </span>
              }            
                />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0"> */}
            <BentoCard
src="/img/c3.jpg"
              title={
                <span className="text-[DFDFF0]">
                  Daytime and service staff
                </span>
              }
              description={
                <span className="font-medium text-grey">
                  On-site cleaning personnel available during the day to maintain cleanliness, handle immediate cleaning needs, and assist with facility management.
                  </span>
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
              src="/img/c4.jpg"
              title={
                <span className="text-[DFDFF0]">
                  Glass and facade cleaning

                </span>
              }
              description={
                <span className="font-medium text-grey">
                  Professional cleaning of glass surfaces, windows, and building facades to remove dirt, smog, and stains, improving the building’s appearance.
                </span>
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
              src="/img/c5.jpg"
              title={
                <span className="text-[DFDFF0]">
                  Basic and special cleaning
                </span>
              }
              description={
              <span className="font-medium text-grey">
                Deep cleaning services for areas requiring extra attention, such as carpets, upholstery, and hard-to-reach surfaces.
              </span>
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
              src="/img/c6.jpg"
              title={
                <>
                  Hygiene & Safety Concept (HSC)

                </>
              }
              description="A structured approach to maintaining high hygiene and safety standards, especially in workplaces, hospitals, and food-related industries."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
              src="/img/c7.jpg"
              title={
                <>
                 Disinfectant cleaning
 
                </>
              }
              description="Thorough sanitization using disinfectants to eliminate bacteria, viruses, and germs, ensuring a safe environment."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
              src="/img/c8.jpg"
              title={
                <>
                 Cleaning as part of your HACCP concept 
                </>
              }
              description="Cleaning services designed to meet HACCP (Hazard Analysis and Critical Control Points) guidelines for food safety and hygiene in food industries."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
              src="/img/c9.jpg"
              title={
                <>
                  Outdoor area maintenance 

                </>
              }
              description="Maintenance of outdoor spaces, including pathways, gardens, and parking lots. Includes winter services like snow removal and de-icing."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
              src="/img/c10.jpg"
              title={
                <>
                 Weed management

                </>
              }
              description="Removal and prevention of unwanted plants and weeds from gardens, sidewalks, and industrial areas."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
              src="/img/c11.jpg"
              title={
                <>
                 Janitorial services


                </>
              }
              description="General facility maintenance, including cleaning, minor repairs, waste management, and ensuring the building remains in good condition."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
                src="/img/c12.jpg"
              title={
                <>
                 Construction cleaning


                </>
              }
              description="Cleaning after construction or renovation projects, removing debris, dust, and residues to make the space ready for use."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
                src="/img/c13.jpg"
              title={
                <>
                 Solar system cleaning



                </>
              }
              description="Cleaning solar panels to remove dust, dirt, and bird droppings, ensuring optimal energy efficiency"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
                src="/img/c14.jpg"
              title={
                <>
                 Machine cleaning & cooling lubricant service



                </>
              }
              description="Application of protective coatings on floors to increase durability, prevent wear, and enhance appearance."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
                src="/img/c15.jpg"
              title={
                <>
                 Coating: Long-lasting floor coating

                </>
              }
              description="Cleaning and maintenance of industrial machines, including the replacement of cooling lubricants to ensure smooth operation."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
                src="/img/c16.jpg"
              title={
                <>
                 Specific industry solutions


                </>
              }
              description="Customized cleaning services designed for various industries like healthcare, logistics, and manufacturing."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
                src="/img/c17.jpg"
              title={
                <>
                 Industrial cleaning and service

                </>
              }
              description="Deep cleaning for factories, warehouses, and industrial plants, including machinery, floors, and workstations."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
                src="/img/c18.jpg"
              title={
                <>
                 Clinics & Hospitals
                </>
              }
              description="Specialized medical-grade cleaning to maintain strict hygiene in hospitals, reducing infection risks."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
                src="/img/c19.jpg"
              title={
                <>
                 logistics

                </>
              }
              description="Cleaning services for warehouses, distribution centers, and transport hubs to maintain cleanliness and operational efficiency."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
                src="/img/c20.jpg"
              title={
                <>
                 Senior citizens and nursing homes

                </>
              }
              description="Cleaning solutions for elder care facilities, ensuring hygiene, comfort, and safety for residents."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 md:me-14 md:col-span-1">
          {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0"> */}
            <BentoCard
                src="/img/c21.jpg"
              title={
                <>
                 Housing industry

                </>
              }
              description="Cleaning and maintenance services for residential properties, apartment buildings, and housing communities."
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Cleaning;