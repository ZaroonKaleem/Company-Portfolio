import { useNavigate } from "react-router-dom";
import { Button } from "./button";

interface ImageClipBoxProps {
  src: string;
  alt: string;
  clipClass?: string;
}

const ImageClipBox = ({ src, alt, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <img src={src} alt={alt} />
  </div>
);

export const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  
  return (
    <section id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/cleaning.jpg"
            alt="security-2.jpg"
            clipClass="contact-clip-path-1"
          />

          <ImageClipBox
            src="/img/facility.jpg"
            alt="Contact bg 2"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          {/* <ImageClipBox
            src="/img/security-2.jpg"
            alt="Swordman"
            clipClass="sword-man-clip-path md:scale-125"
          /> */}

<ImageClipBox
  src="/img/security-2.jpg"
  alt="Swordman"
  clipClass="sword-man-clip-path hidden md:block md:scale-125"
/>

        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[18px] uppercase">Contact Us</p>

          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            get in touch <br /> w<b>i</b>th us
            <br /> for reliable <br></br> security <br /> fac<b>ili</b>ty <br /> management <br /> a<b>n</b>d cleaning solutions
          </p>

          <Button containerClass="mt-10 px-4 py-4 cursor-pointer" onClick={handleClick}>
      Contact Us
    </Button>
          {/* <Button containerClass="mt-10 px-4 py-4 cursor-pointer">Contact Us</Button> */}
        </div>
      </div>
    </section>
  );
};
