import errorpic from '../../assets/Error/file.png'

const ErrorPage = () => {
    return (
        <div>
            <div>
                <img src={errorpic} alt="error picture" />
            </div>
            <div>
                <h1 className='text-4xl font-bold'>
                   Opps! There is a error. No page found
                </h1>
                <div className='flex justify-center items-center'>
                    <button className='btn btn-secondary'>Go to home</button>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;