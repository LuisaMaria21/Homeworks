import useFetch from './useFetch';

const BreakingBadQuotes = () => {
  const url = 'https://api.breakingbadquotes.xyz/v1/quotes/1';
  const { data, isLoading } = useFetch(url);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <blockquote>
      <p>{data[0].quote}</p>
      <footer>{data[0].author}</footer>
    </blockquote>
  );
};

export default BreakingBadQuotes;