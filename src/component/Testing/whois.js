import '../Styles/who.css';
import Spinner from './../Spinner';

export default function Whois(props)  {

        const {Data,Error,Loading} = props
    return (
        <div className='container whois'>
            <div className='whois-content'>
            {!Loading && !Error && Data !=="domain not found" &&
            
                            <ul className='w-full '>
                            <li className='w-[100%] flex gap-4 justi'><span className='w-[40%] text-left'>Domain:</span>  <span>{Data?.Domain_name}</span></li>
                            <li className='w-[100%] flex gap-4 justi'><span className='w-[40%] text-left'>Register:</span> <span> {Data?.Registrar}</span> </li>
                            <li className='w-[100%] flex gap-4 justi'><span className='w-[40%] text-left'>Registered On: </span> <span>{Data?.Creation_Date}</span></li>
                            <li className='w-[100%] flex gap-4 justi'><span className='w-[40%] text-left'>Expires On:</span> <span>{Data?.Expiry_Date}</span></li>
                            <li className='w-[100%] flex gap-4 justi'><span className='w-[40%] text-left'>Updated On:</span> <span>{Data?.Domain_name}</span> </li>
                            <hr/>
        
                            <li>status
                                <ul>
                                {Data?.Status?.map((el =>{
                                    return(
                                        <>
                                         <li key={el.id}>{el}</li>
        
                                        </>
                                    )
                                }))}
        
                                </ul>
                            </li>
                            <hr/>
        
                            <li>Name Servers
                                <ul>
                                {Data?.Name_Servers?.map((el =>{
                                    return(
                                        <>
                                         <li key={el.id}>{el}</li>
        
                                        </>
                                    )
                                }))}
        
                                </ul>
                            </li>
                            <li></li>
                        </ul> 
                        }
                                {Data ==="domain not found" && <p className='text-danger'> domain not found</p>}
                                {Error && !Loading && <p className='text-danger'>{Error} </p>}
                                
                                {Loading && <Spinner/>}

            </div>
        </div>
    )
}
