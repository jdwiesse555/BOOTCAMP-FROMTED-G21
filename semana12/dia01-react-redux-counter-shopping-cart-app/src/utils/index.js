export const formatNumber = (number) => {
    const localeDefault = 'es-PE'
  
    const options = {
      minimumFractionDigits: 2
    }
  
    return new Intl.NumberFormat(localeDefault, options).format(number)
  }