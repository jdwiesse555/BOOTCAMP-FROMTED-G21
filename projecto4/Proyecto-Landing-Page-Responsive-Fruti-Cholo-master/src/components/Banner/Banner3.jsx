import React from "react";
import BannerBg from "../../assets/banner-bg.jpg";
import { IoBagHandleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const bgStyle = {
  backgroundImage: `url(${BannerBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

const Banner3 = () => {
  return (
    <>
      <section className="container mb-12">
        <div
          style={bgStyle}
          className=" py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 rounded-3xl"
        >
          {/* ______ Imagen del banner ______ */}
          <div></div>
          {/* ______ Información de la tienda ______ */}
          <div className="flex flex-col justify-center p-4">
            <div className="text-center md:text-left space-y-5 lg:max-w-[400px]">
              <motion.h1
                variants={FadeLeft(0.2)}
                initial="hidden"
                whileInView="visible"
                className="text-3xl lg:text-5xl font-bold uppercase"
              >
                Obtén Frutas Frescas Hoy
              </motion.h1>
              <motion.p
                variants={FadeLeft(0.5)}
                initial="hidden"
                whileInView="visible"
              >
                Ofrecemos frutas frescas y de calidad, directamente de los campos a tu hogar. ¡Disfruta de lo mejor de la naturaleza hoy mismo! Llama ya
              </motion.p>
              <div className="flex justify-center md:justify-start">
                <motion.button
                  variants={FadeLeft(0.7)}
                  initial="hidden"
                  whileInView="visible"
                  className="btn flex items-center gap-2"
                >
                  <span>
                    <IoBagHandleOutline className="text-xl" />
                  </span>
                  Número Telefónico
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );  
};

export default Banner3;
