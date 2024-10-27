const NuevaPeliculaPage = () => {
  return (
    <form>
      <h2>Nueva película</h2>

      <label>
        Nombre
        <input
          type="text"
          name="nombre"
          placeholder="Ej. Volver al futuro"
          required
        />
      </label>
      <label>
        Imagen
        <input
          type="url"
          name="imagen"
          placeholder="Ej. https://placehold.co/100x250"
          required
        />
      </label>
      <label>
        Estreno
        <input
          type="date"
          name="estreno"
          placeholder="Ej. 2024-10-18"
          required
        />
      </label>
      <label>
        Genero
        <select name="generoId" required>
          <option value=''>Selecciona un genero</option>
          <option value='1'>Comedia</option>
          <option value='2'>Acción</option>
          <option value='3'>Animación</option>
          <option value='4'>Aventura</option>
        </select>
      </label>
      <label>
        Resumen
        <textarea name="resumen" placeholder="Ej. mi resumen" required></textarea>
      </label>
      <input type="submit" value="Guardar" />
    </form>
  )
}

export default NuevaPeliculaPage