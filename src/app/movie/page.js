import MovieCard from "../(components)/MovieCard.js"

export default async function Movie(){

  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd3078dc112msh9be84be9abf208bp1ae2d4jsn2596c183f820',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

	const response = await fetch(url, options);
	const result = await response.json();
  const mainData = result.titles;
  return(
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="uppercase text-3xl font-bold">Series and movies</h1>
      <div className="grid grid-cols-5 gap-2">
        {
          mainData.map((item) => {
            return <MovieCard key={item.id} {...item}/>
          })

        }
      </div>
    </div>)
}

