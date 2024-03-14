import Image from "next/image";
import CardFilm from "../../components/CardFilm/index";

export default function Home() {
  return (
    <main className="flex-auto">
        <CardFilm
        title="O senhor dos Anéis - A Sociedade do Anel"
        imageUrl="/sda-1.jpg"
        videoUrl="https://www.youtube.com/watch?v=0i86oM1nHjM"
      />
      <CardFilm
        title="O senhor dos Anéis - As Duas Torres"
        imageUrl="/sda-2.jpg"
        videoUrl="https://www.youtube.com/watch?v=Al5iC4CnhYc"
      />

      <CardFilm
        title="O senhor dos Anéis - O Retorno do Rei"
        imageUrl="/sda-3.jpg"
        videoUrl="https://www.youtube.com/watch?v=LiKeQrChkTY"
      />

      <CardFilm
        title="Matrix"
        imageUrl="/matrix-1.jpg"  
        videoUrl="https://www.youtube.com/watch?v=2KnZac176Hs"
      />

      <CardFilm
        title="Matrix Reloaded"
        imageUrl="/matrix-2.jpg"
        videoUrl="https://www.youtube.com/watch?v=kYzz0FSgpSU"
      />

      <CardFilm
        title="Matrix Revolutions"
        imageUrl="/matrix-3.jpg"
        videoUrl="https://www.youtube.com/watch?v=hMbexEPAOQI"
      />
      <CardFilm
        title="Star Wars - Episódio I: A Ameaça Fantasma"
        imageUrl="/sw-1.jpg"
        videoUrl="https://www.youtube.com/watch?v=bD7bpG-zDJQ"
      />
      <CardFilm
        title="Star Wars - Episódio II: Ataque dos Clones"
        imageUrl="/sw-2.jpg"
        videoUrl="https://www.youtube.com/watch?v=gYbW1F_c9eM"
      />
      <CardFilm
        title="Star Wars - Episódio III: A Vingança dos Sith"
        imageUrl="/sw-3.jpg"
        videoUrl="https://www.youtube.com/watch?v=5UnjrG_N8hU"
      />
      <CardFilm
        title="Star Wars - Episódio IV: Uma Nova Esperança"
        imageUrl="/sw-4.jpg"
        videoUrl="https://www.youtube.com/watch?v=vZ734NWnAHA"
      />

      <CardFilm
        title="Star Wars - Episódio V: O Império Contra-Ataca"
        imageUrl="/sw-5.jpg"
        videoUrl="https://www.youtube.com/watch?v=JNwNXF9Y6kY"
      />

      <CardFilm
        title="Star Wars - Episódio VI: O Retorno de Jedi"
        imageUrl="/sw-6.jpg"
        videoUrl="https://www.youtube.com/watch?v=p4vIFhk621Q"
      />
      
      <CardFilm
        title="Percy Jackson e o Ladrão de Raios"
        imageUrl="/pj-1.jpg"
        videoUrl="https://www.youtube.com/watch?v=9LMQQpVVrSA"
      />

      <CardFilm
        title="Percy Jackson e o Mar de Monstros"
        imageUrl="/pj-2.jpg"
        videoUrl="https://www.youtube.com/watch?v=uL-ZfWOpVh0"
      />
    
    </main>
  );
}
