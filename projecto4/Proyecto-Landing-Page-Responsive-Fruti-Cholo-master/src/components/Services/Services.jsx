import React from "react";
import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/orange.png";
import Fruit3 from "../../assets/fruits/avocado.png";
import Fruit4 from "../../assets/fruits/cherry.png";
import { delay, motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const ServicesData = [
  {
    id: 1,
    title: "Manzanas Rojas Frescas",
    link: "#",
    price: "s/ 3.99 ",
    desc: "Disfruta de nuestras manzanas rojas, jugosas y llenas de nutrientes, ideales para un snack saludable o para complementar tus recetas favoritas.",
    img: Fruit1,
    icon: "https://placehold.co/50x50",
    delay: 0.3,
  },
  {
    id: 2,
    title: "Naranjas Frescas",
    link: "#",
    price: "s/ 4.99",
    desc: "Las mejores naranjas frescas y dulces, perfectas para un jugo refrescante o para añadir un toque de frescura a tus comidas.",
    img: Fruit2,
    icon: "https://placehold.co/50x50",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Aguacate Fresco",
    link: "#",
    price: "s/ 5.99",
    desc: "Aguacates cremosos y llenos de sabor, una fuente rica de grasas saludables. Perfecto para guacamole o para añadir a tus ensaladas.",
    img: Fruit3,
    icon: "https://placehold.co/50x50",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Cerezas Frescas",
    link: "#",
    price: "s/  2.99",
    desc: "Cerezas dulces y jugosas, ideales para un snack saludable o para añadir un toque especial a tus postres.",
    img: Fruit4,
    icon: "https://placehold.co/50x50",
    delay: 1.2,
  },
];

const Services = () => {
  return (
    <>
      <section className="">
        <div className="container pt-12 pb-20">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold text-left pb-10 uppercase"
          >
            Nuestro Menú
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {ServicesData.map((item) => (
              <motion.div
                variants={FadeLeft(item.delay)}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.1 }}
                key={item.id}
                className="bg-white rounded-3xl shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center px-4 py-2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[30px] mb-2 scale-100 transform -translate-y-2 -ml-3"
                />
                <div>
                  <h1 className="text-lg font-semibold">{item.title}</h1>
                  <p className="text-lg font-semibold text-secondary">
                    {item.price}
                  </p>
                  <p className="text-gray-500 text-sm ml-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;

