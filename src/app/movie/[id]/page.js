

import Image from "next/image";

export default async function Page({params}){

  const id = params.id;


  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd3078dc112msh9be84be9abf208bp1ae2d4jsn2596c183f820',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };


  const response = await fetch(url, options);

  const result = await response.json();


  const bgurl = result[0].details.backgroundImage.url;


  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1>{result[0].details.title}</h1>
        <Image src={bgurl} height={700} width={700}/>
        <h1>{result[0].details.contextualSynopsis.text}</h1>
      </div>
    </>
  )
}
