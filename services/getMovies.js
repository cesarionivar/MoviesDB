export const getMovies = async (term) => {
  try {
    const { Search: data } = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_APIKEY}&s=${term}`
    ).then((res) => res.json());

    return {
      data,
    };
  } catch (error) {
    return {
      data: null,
    };
  }
};
