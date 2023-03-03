import useFetch from './useFetch';

function ComponentApp() {
  const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/1')

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error: {hasError.message}</div>
  }

  return (
    <div>
      <h3>Quotes</h3>
      <p>{data[0].quote}</p>
      <p>- {data[0].author}</p>
    </div>
  )
}

export default ComponentApp



