import Image from "next/image";

export default function MovieCard(item){


  const {id,title,synopsis} = item.jawSummary;


  return (
    <div>

      <h1>{title}</h1>
      <Image src={item.jawSummary.backgroundImage.url} height={50} width={50}/>

      <h1>{synopsis}</h1>

      <button>Read More</button>



    </div>
  )
}
