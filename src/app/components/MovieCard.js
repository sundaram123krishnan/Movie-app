import Image from "next/image";
import Link from "next/link";

export default function MovieCard(item){


  const {id,title,synopsis} = item.jawSummary;

  return (


    <div className="border border-2 rounded-md flex flex-col justify-center items-center gap-3 p-2">

      <h1 className="font-lg text-lg uppercase">{title}</h1>
      <Image src={item.jawSummary.backgroundImage.url} height={500} width={500} alt="movie/series image"/>

      <h1 className="uppercase text-md">{synopsis}</h1>

      <Link href={`/movie/${id}`}> 
        <button className="bg-gradient-to-r from-amber-500 to-pink-500 px-5 py-2 rounded-md">Read More</button>
      </Link>




    </div>
  )
}
