import MetricasList from "../components/home-page/MetricasList"
import  LayoutBase  from '../layouts/LayoutBase'

export const MetricasPage = () => {
    
      return (
        <>
          {<LayoutBase/>}
          <h1  className="text-3xl font-bold undeline text-center">Listado de Metricas</h1>
    
          <MetricasList />
        </>
      )
  }