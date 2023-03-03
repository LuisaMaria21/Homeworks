import useCounter from './useCounter';
import useFetch from './useFetch';

const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;
    const { data, isLoading } = useFetch(url);

    return (
        <>
            <hr />
            {
                isLoading ? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                ) : (
                    <blockquote>
                        <p> {data[0]?.quote} </p>
                        <footer>{data[0]?.author}</footer>
                    </blockquote>
                )
            }

            <button onClick={increment}>Siguiente frase</button>
        </>
    );
};

export default MultipleCustomHooks;


