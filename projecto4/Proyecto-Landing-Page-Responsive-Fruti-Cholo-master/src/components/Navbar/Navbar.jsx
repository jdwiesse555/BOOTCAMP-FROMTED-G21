import React, { useState, useEffect } from "react";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import { FaLeaf } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Importamos el Link
import ResponsiveMenu from "./ResponsiveMenu";


export const NavbarMenu = [
  {
    id: 1,
    title: "Inicio", 
    link: "hero", 
  },
  {
    id: 2,
    title: "Productos", 
    link: "services", 
  },
  {
    id: 3,
    title: "Acerca de",
    link: "banner", 
  },
  {
    id: 4,
    title: "Tienda",
    link: "banner2",
  },
  {
    id: 5,
    title: "Contactos",
    link: "banner3", 
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 760) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="md:pt-4 relative z-30 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container py-4 flex justify-between items-center"
        >
          {/* ______ Logo de la tienda ______ */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <p className=" text-primary">FRUTI</p>
            <p className=" text-secondary">CHOLO</p> 
            <FaLeaf className="text-green-500" />
          </div>

          {/* ______ La sección del menú para pantallas grandes ______ */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}  // Usamos el componente Link para desplazarnos
                    smooth={true}    // Activamos desplazamiento suave
                    duration={500}   // Duración de desplazamiento en ms
                    className="inline-block py-1 px-3 hover:text-red-500 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ______ Icono de menu mobile ______ */}
          <div onClick={() => setOpen(!open)} className="md:hidden">
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>

        {/* ______ Menú responsive para celular ______ */}
        <ResponsiveMenu open={open} />
      </nav>
    </>
  );
};

export default Navbar;
