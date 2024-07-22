import '../Styles/ip.css';
import Spinner from './../Spinner';

export default function Domain(props) {
  const { Loading , IPInfo } = props;
    return (
        <div className=' whois-content'>
            {Loading && <Spinner/>}

            <div className="container domain">
                <div className="w-full domain-text">
                    
                    
                {!Loading && IPInfo !=null &&(
  <>
    <ul>
      <li>
        <span className='ip-title'>ISP</span>
        <span>{IPInfo?.isp}</span>
      </li>
      <li>
        <span className='ip-title'>Usage Type</span>
        <span>{IPInfo?.usageType}</span>
      </li>
      <li>
        <span className='ip-title'>Hostname(s)</span>
        <span>{IPInfo?.hostnames[0]}</span>
      </li>
      <li>
        <span className='ip-title'>Domain Name</span>
        <span>{IPInfo?.domain}</span>
      </li>
      <li>
        <span className='ip-title'>Country</span>
        <span className='country'>{IPInfo?.countryCode}</span>
      </li>
    </ul>
    <p>
      IP info including ISP, Usage Type, and Location provided by{' '}
      <span>{IPInfo?.ipAddress}</span>. Updated Monthly.
    </p>
  </>
)}              

{IPInfo == null && !Loading && <p className='ip-info'>No Data Found</p>}

                </div>


            </div>
        </div>
    )
}
