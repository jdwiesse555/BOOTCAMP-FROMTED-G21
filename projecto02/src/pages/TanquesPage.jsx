import TanquesList from "../components/home-page/TanquesList"
import  LayoutBase  from '../layouts/LayoutBase'

export const TanquesPage = () => {
    
      return (
        <>
      

          {<LayoutBase/>}
     
          <h1  className="text-3xl font-bold undeline text-center">Listado de Tanques</h1>
    
          <TanquesList />
          
        </>
      )
  }