import React from "react";
import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

const Banner = () => {
  return (
    <>
      <section className="bg-secondary/10">
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          {/* ______ Banner Image ______ */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              viewport={{ once: true }}
              src={BannerPng}
              alt="Imagen Principal"
              className="w-[300px] md:max-w-[400px] h-full object-cover "
            />
          </div>
  
          {/* ______ Información de la Marca ______ */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase"
              >
                Información de FRUTI CHOLO
              </motion.h1>
              <motion.p
                variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Esta es una empresa comprometida con la calidad y la sostenibilidad, siempre buscando ofrecer los mejores productos a nuestros clientes.
              </motion.p>
              <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Contamos con una amplia gama de productos frescos, directamente desde los campos, garantizando frescura y sabor en cada entrega. Nuestro objetivo es ser tu primera opción al momento de elegir productos saludables.
              </motion.p>
              <motion.button
                variants={FadeUp(1.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="btn"
              >
                Saber Más
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
