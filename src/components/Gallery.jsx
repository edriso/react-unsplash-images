import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from '../context';

// Environment Variables in Frontend Applications - Security Considerations:
//
// 1. CLIENT-SIDE EXPOSURE: Environment variables prefixed with VITE_ are embedded
//    into the client-side bundle during build time, making them accessible to anyone
//    who inspects the source code or network requests in browser dev tools.
//
// 2. SOURCE CODE PROTECTION: While env variables help keep sensitive data out of
//    version control (when properly gitignored), they don't provide runtime security
//    in frontend applications.
//
// 3. SECURITY BEST PRACTICE: For truly sensitive operations, implement a backend
//    API or serverless functions (Netlify Functions, Vercel Edge Functions, etc.)
//    that handle API keys server-side, then have your frontend make requests to
//    your secure endpoint instead of directly to third-party APIs.
//
// 4. ACCEPTABLE USE: This pattern is acceptable for public APIs with rate limiting
//    or APIs where key exposure has limited security implications, like Unsplash's
//    public access API.
const searchUrl = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ['images', searchTerm], // it's important to add this as an array to make the search updatable on submit, and if we searched for an old results that is cached we won't get a new one you won't see the Loading..., you can confirm from the ReactQueryDevtools it works on local host anyway
    queryFn: async () => {
      const result = await axios.get(`${searchUrl}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;

  if (response.length < 1) {
    return (
      <section className='image-container'>
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {results?.map((item) => {
        const imgUrl = item?.urls?.regular;
        return (
          <img
            key={item.id}
            src={imgUrl}
            alt={item.alt_description}
            className='img'
          />
        );
      })}
    </section>
  );
};

export default Gallery;
