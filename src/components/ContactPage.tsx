// import { motion } from "framer-motion";
// import { useRef, useState } from "react";
// import EarthCanvas from "./canvas/EarthCanvas";
// import emailjs from "@emailjs/browser";
// import  { slideIn }  from "../utils/motion"
// import { styles } from "@/styles";




// export const ContactPage = () => {  // ✅ Named export
//   const formRef = useRef<HTMLFormElement>(null); // Set the initial value to null
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
  
//   const [loading, setLoading] = useState(false);
  
//   const handleChange = (e: { target: any; }) => {
//     const { target } = e;
//     const { name, value } = target;
  
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };
  
//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     setLoading(true);
  
//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "JavaScript Mastery",
//           from_email: form.email,
//           to_email: "sujata@jsmastery.pro",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");
  
//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error: any) => {
//           setLoading(false);
//           console.error(error);
  
//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//   //   <div
//   //   className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//   // >
//   //   <motion.div
//   //     variants={slideIn("left", "tween", 0.2, 1)}
//   //     className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//   //   >
//   //     <p className={styles.sectionSubText}>Get in touch</p>
//   //     <h3 className={styles.sectionHeadText}>Contact.</h3>

//   //     <form
//   //       ref={formRef}
//   //       onSubmit={handleSubmit}
//   //       className='mt-12 flex flex-col gap-8'
//   //     >
//   //       <label className='flex flex-col'>
//   //         <span className='text-white font-medium mb-4'>Your Name</span>
//   //         <input
//   //           type='text'
//   //           name='name'
//   //           value={form.name}
//   //           onChange={handleChange}
//   //           placeholder="What's your good name?"
//   //           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//   //         />
//   //       </label>
//   //       <label className='flex flex-col'>
//   //         <span className='text-white font-medium mb-4'>Your email</span>
//   //         <input
//   //           type='email'
//   //           name='email'
//   //           value={form.email}
//   //           onChange={handleChange}
//   //           placeholder="What's your web address?"
//   //           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//   //         />
//   //       </label>
//   //       <label className='flex flex-col'>
//   //         <span className='text-white font-medium mb-4'>Your Message</span>
//   //         <textarea
//   //           rows={7}
//   //           name='message'
//   //           value={form.message}
//   //           onChange={handleChange}
//   //           placeholder='What you want to say?'
//   //           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//   //         />
//   //       </label>

//   //       <button
//   //         type='submit'
//   //         className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//   //       >
//   //         {loading ? "Sending..." : "Send"}
//   //       </button>
//   //     </form>
//   //   </motion.div>

//   //   <motion.div
//   //     variants={slideIn("right", "tween", 0.2, 1)}
//   //     className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//   //   >
//   //     <EarthCanvas />
//   //   </motion.div>
//   // </div>
//   <div
//   className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
// >
//   <motion.div
//     variants={slideIn("left", "tween", 0.2, 1)}
//     className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//   >
//     <p className={styles.sectionSubText}>Get in touch</p>
//     <h3 className={styles.sectionHeadText}>Contact.</h3>

//     <form
//       ref={formRef}
//       onSubmit={handleSubmit}
//       className='mt-12 flex flex-col gap-8'
//     >
//       <label className='flex flex-col'>
//         <span className='text-white font-medium mb-4'>Your Name</span>
//         <input
//           type='text'
//           name='name'
//           value={form.name}
//           onChange={handleChange}
//           placeholder="What's your good name?"
//           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//         />
//       </label>
//       <label className='flex flex-col'>
//         <span className='text-white font-medium mb-4'>Your email</span>
//         <input
//           type='email'
//           name='email'
//           value={form.email}
//           onChange={handleChange}
//           placeholder="What's your web address?"
//           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//         />
//       </label>
//       <label className='flex flex-col'>
//         <span className='text-white font-medium mb-4'>Your Message</span>
//         <textarea
//           rows={7}
//           name='message'
//           value={form.message}
//           onChange={handleChange}
//           placeholder='What you want to say?'
//           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//         />
//       </label>

//       <button
//         type='submit'
//         className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//       >
//         {loading ? "Sending..." : "Send"}
//       </button>
//     </form>
//   </motion.div>

//   <motion.div
//     variants={slideIn("right", "tween", 0.2, 1)}
//     className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//   >
//     <EarthCanvas />
//   </motion.div>
// </div>
//   );
// };

import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import  EarthCanvas  from "./canvas/EarthCanvas"; // Ensure StarsCanvas is correctly imported
import  StarsCanvas  from "./canvas/StarCanvas"; // Ensure StarsCanvas is correctly imported
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { MdContactPage } from "react-icons/md";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    // <div className="relative bg-black min-h-screen">
    //   {/* Starry Background */}
    //   <StarsCanvas />

    //   <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative z-10`}>
    //     <motion.div
    //       variants={slideIn("left", "tween", 0.2, 1)}
    //       className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
    //     >
    //       <p className={styles.sectionHeadText}>Get in touch</p>
    //       <h3 className={styles.sectionHeadText}>Contact.</h3>

    //       <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
    //         <label className="flex flex-col">
    //           <span className="text-white font-medium mb-4">Your Name</span>
    //           <input
    //             type="text"
    //             name="name"
    //             value={form.name}
    //             onChange={handleChange}
    //             placeholder="What's your good name?"
    //             className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    //             required
    //           />
    //         </label>
    //         <label className="flex flex-col">
    //           <span className="text-white font-medium mb-4">Your email</span>
    //           <input
    //             type="email"
    //             name="email"
    //             value={form.email}
    //             onChange={handleChange}
    //             placeholder="What's your web address?"
    //             className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    //             required
    //           />
    //         </label>
    //         <label className="flex flex-col">
    //           <span className="text-white font-medium mb-4">Your Message</span>
    //           <textarea
    //             rows={7}
    //             name="message"
    //             value={form.message}
    //             onChange={handleChange}
    //             placeholder="What you want to say?"
    //             className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    //             required
    //           />
    //         </label>

    //         <button
    //           type="submit"
    //           className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
    //         >
    //           {loading ? "Sending..." : "Send"}
    //         </button>
    //       </form>
    //     </motion.div>

    //     <motion.div
    //       variants={slideIn("right", "tween", 0.2, 1)}
    //       className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
    //     >
    //       <EarthCanvas />
    //     </motion.div>
    //   </div>
    // </div>
    <div className="relative bg-black min-h-screen">
      <StarsCanvas />
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionHeadText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    </div>
  );
};

export default SectionWrapper(ContactPage, "ContactPage");
