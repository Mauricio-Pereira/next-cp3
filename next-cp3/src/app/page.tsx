import Image from "next/image";
import CardFilm from "../../components/CardFilm/index";

export default function Home() {
  return (
    <main className="flex-auto">
        <CardFilm
        title="O senhor dos Anéis - A Sociedade do Anel"
        description="Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel."
        imageUrl="/sda-1.jpg"
        videoUrl="link/do/video/no/youtube"
      />
      <CardFilm
        title="O senhor dos Anéis - As Duas Torres"
        description="Após a captura de Merry e Pippy, a Sociedade do Anel é dissolvida. Frodo e Sam seguem em direção a Mordor, para destruir o Um Anel, enquanto Gimli, Legolas e Aragorn partem para resgatar os hobbits sequestrados. Descobrindo que os hobbits foram levados para Isengard, sede de Saruman, eles se unem a Gandalf e partem para resgatá-los."
        imageUrl="/sda-2.jpg"
        videoUrl="link/do/video/no/youtube"
      />

      <CardFilm
        title="O senhor dos Anéis - O Retorno do Rei"
        description="As forças de Sauron atacam Minas Tirith, capital de Gondor, em um grande ataque. Sauron está prestes a derrotar Gondor e usar o Anel para conquistar a Terra-média. Aragorn, Legolas e Gimli partem para
        ajudar o povo de Gondor, enquanto Frodo e Sam seguem para Mordor, para destruir o Um Anel."
        imageUrl="/sda-3.jpg"
        videoUrl="link/do/video/no/youtube"
      />
    </main>
  );
}
