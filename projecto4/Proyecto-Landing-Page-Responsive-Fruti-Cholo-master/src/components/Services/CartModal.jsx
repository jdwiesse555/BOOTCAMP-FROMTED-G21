import React from "react";

const CartModal = ({ cartItems, setCartOpen }) => {
  const handleClose = () => {
    setCartOpen(false); // Cerrar el carrito
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-40">
      <div className="bg-white p-4 rounded-xl w-96 h-auto">
        <h2 className="text-xl font-bold mb-4">Carrito de Compras</h2>

        {/* Mostrar los productos en el carrito */}
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul className="space-y-2">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Botón para cerrar el modal */}
        <button
          onClick={handleClose}
          className="mt-4 w-full py-2 bg-red-500 text-white rounded-lg"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default CartModal;
