import { Link } from 'react-router-dom';
import errorpic from '../../assets/Error/file.png'

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div>
                <img src={errorpic} className='w-[400px] h-[300px] object-fill' alt="error picture" />
            </div>
            <div>
                <h1 className='text-4xl font-bold'>
                   Opps! No page found
                </h1>
                <div className='flex justify-center items-center mt-6'>
                    <Link to={"/"}><button className='btn btn-primary'>Go to home</button></Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;