import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white backdrop-blur-md py-10 m-6 rounded-3xl">
            <ul className="flex flex-col items-center gap-10">
              {/* Usamos Link de react-scroll para cada sección */}
              <li>
                <Link
                  to="hero" // ID de la sección Hero
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="services" // ID de la sección Services
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="banner" // ID de la sección Banner
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Acerca de
                </Link>
              </li>
              <li>
                <Link
                  to="banner2" // ID de la sección Banner2
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Tienda
                </Link>
              </li>
              <li>
                <Link
                  to="banner3" // ID de la sección Banner3
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  to="footer" // ID de la sección Footer
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Nuestras Redes
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;