import Image from "next/image";
import CardFilm from "../../components/CardFilm/index";

export default function Home() {
  return (
    <main className="flex-auto">
        <CardFilm
        title="O senhor dos Anéis - A Sociedade do Anel"
        image="/sda-1.jpg"
        link="https://www.youtube.com/watch?v=0i86oM1nHjM"
      />
      <CardFilm
        title="O senhor dos Anéis - As Duas Torres"
        image="/sda-2.jpg"
        link="https://www.youtube.com/watch?v=Al5iC4CnhYc"
      />

      <CardFilm
        title="O senhor dos Anéis - O Retorno do Rei"
        image="/sda-3.jpg"
        link="https://www.youtube.com/watch?v=LiKeQrChkTY"
      />

      <CardFilm
        title="Matrix"
        image="/matrix-1.jpg"  
        link="https://www.youtube.com/watch?v=2KnZac176Hs"
      />

      <CardFilm
        title="Matrix Reloaded"
        image="/matrix-2.jpg"
        link="https://www.youtube.com/watch?v=kYzz0FSgpSU"
      />

      <CardFilm
        title="Matrix Revolutions"
        image="/matrix-3.jpg"
        link="https://www.youtube.com/watch?v=hMbexEPAOQI"
      />
      <CardFilm
        title="Star Wars - Episódio I: A Ameaça Fantasma"
        image="/sw-1.jpg"
        link="https://www.youtube.com/watch?v=bD7bpG-zDJQ"
      />
      <CardFilm
        title="Star Wars - Episódio II: Ataque dos Clones"
        image="/sw-2.jpg"
        link="https://www.youtube.com/watch?v=gYbW1F_c9eM"
      />
      <CardFilm
        title="Star Wars - Episódio III: A Vingança dos Sith"
        image="/sw-3.jpg"
        link="https://www.youtube.com/watch?v=5UnjrG_N8hU"
      />
      <CardFilm
        title="Star Wars - Episódio IV: Uma Nova Esperança"
        image="/sw-4.jpg"
        link="https://www.youtube.com/watch?v=vZ734NWnAHA"
      />

      <CardFilm
        title="Star Wars - Episódio V: O Império Contra-Ataca"
        image="/sw-5.jpg"
        link="https://www.youtube.com/watch?v=JNwNXF9Y6kY"
      />

      <CardFilm
        title="Star Wars - Episódio VI: O Retorno de Jedi"
        image="/sw-6.jpg"
        link="https://www.youtube.com/watch?v=p4vIFhk621Q"
      />
      
      <CardFilm
        title="Percy Jackson e o Ladrão de Raios"
        image="/pj-1.jpg"
        link="https://www.youtube.com/watch?v=9LMQQpVVrSA"
      />

      <CardFilm
        title="Percy Jackson e o Mar de Monstros"
        image="/pj-2.jpg"
        link="https://www.youtube.com/watch?v=uL-ZfWOpVh0"
      />
    
    </main>
  );
}
