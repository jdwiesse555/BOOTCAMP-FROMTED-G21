import React from "react";
import BannerPng from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

const Banner2 = () => {
  return (
    <>
      <section className="">
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          {/* ______ Información de la tienda ______ */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
              <motion.h1
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase"
              >
                Tienda de Frutas Online
              </motion.h1>
              <motion.p
                variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Ofrecemos una amplia variedad de frutas frescas directamente a tu puerta. Nos aseguramos de que cada fruta que entregamos sea de la más alta calidad y sabor.
              </motion.p>
              <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Comprometidos con la frescura, nuestra tienda en línea facilita tu compra de productos saludables sin tener que salir de casa. ¡Haz tu pedido y disfruta de lo mejor de la naturaleza!
              </motion.p>
              <motion.button
                variants={FadeUp(1.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="btn"
              >
                Descargar la App
              </motion.button>
            </div>
          </div>
          {/* ______ Imagen del banner ______ */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 200, rotate: 75 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              src={BannerPng}
              alt="Imagen principal"
              className="w-[350px] max-w-[500px] h-full object-cover drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner2;
