const BaseTag = ({ label }) => {
    return (
        <div>
            {label === 'paid' &&
            <div
                className={`py-3 rounded-md min-w-[120px] text-center capitalize font-extrabold bg-emerald-400/20 text-emerald-400`}
            >
                <span className="text-3xl leading-3 mr-2">•</span>
            {label}
            </div>
            }
            {label === 'pending' &&
                <div
                    className={`py-3 rounded-md min-w-[120px] text-center capitalize font-extrabold bg-orange-400/20 text-orange-400`}
                >
                    <span className="text-3xl leading-3 mr-2">•</span>
                    {label}
                </div>
          
            }
            {label === 'draft' &&
                <div
                    className={`py-3 rounded-md min-w-[120px] text-center capitalize font-extrabold bg-orange-400/20 text-slate-400`}
                >
                <span className="text-3xl leading-3 mr-2">•</span>
                {label}
                </div>
        
            }
        </div>
    
    )
  }
  
  export default BaseTag