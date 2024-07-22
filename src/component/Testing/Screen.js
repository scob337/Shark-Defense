import Spinner from './../Spinner';

export default function Screen(props) {

const {Screen,Loading , Error} = props

    return (
        <div className='Screen w-[100%] h-[60%] p-5'>
            {Screen?.screenshot !=="API request failed" && Screen?.screenshot !=="" && !Error && !Loading &&(
                <img className='m-auto w-[60%] h-[30%] object-cover' src={`data:image/jpeg;base64,${Screen?.screenshot}`} alt='screen' />)}
            {Screen?.screenshot ==="API request failed" && <p className='text-red-500'>Failed to fetch screenshot</p>}
            {Loading && <Spinner />}
            {Error && <p className='text-red-500'>{Error}</p>}
        </div>
    );
}
