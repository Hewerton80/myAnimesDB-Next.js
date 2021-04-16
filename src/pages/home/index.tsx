import { useEffect/*, MouseEvent, useCallback, , useRef*/ } from 'react';
import { Container } from './styles';
import Head from 'next/head';
import GlobalContainer from '../../components/tanpletes/GlobalContainer';
import useAnime, { EAnimesFileds, onlySomeAnimesFilds } from '../../hooks/useAnime';
import AnimeCard from '../../components/ui/AnimeCard';
import Link from 'next/link';
import moment from 'moment';
// import Button from '../../../components/ui/Button';

function Animes() {
  const { animes: popularityRankAnimes, getAnimes: getPopularityRankAnimes } = useAnime();
  const { animes: mostRecentAnimes, getAnimes: getMostRecentAnimes } = useAnime();

  // const rowAnimes = useRef([]);

  useEffect(() => {
    getPopularityRankAnimes({
      'sort': `${EAnimesFileds.PopularityRank}`,
      'fields[anime]': onlySomeAnimesFilds,
      'filter[seasonYear]': moment().get('year'),
      'page[limit]': 20
    });

    getMostRecentAnimes({
      'sort': EAnimesFileds.StartDate,
      'fields[anime]': onlySomeAnimesFilds,
      'page[limit]': 20
    });

  }, []);

  // const handleDragStart = useCallback((e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, i: number) => {
  //   console.log(e)
  //   const pos = {
  //     // The current scroll 
  //     left: rowAnimes.current[i].scrollLeft,
  //     // Get the current mouse position
  //     x: e.clientX,
  //   };
  //   addEventListener('mousemove', dragMove);
  //   addEventListener('mouseup', dragEnd);

  //   /* ao ser arrastado */
  //   function dragMove(e: globalThis.MouseEvent) {
  //     // How far the mouse has been moved
  //     const dx = e.clientX - pos.x;

  //     // Scroll the element
  //     rowAnimes.current[i].scrollLeft = pos.left - dx;
  //   }

  //   function dragEnd() {
  //     /* remove os eventos */
  //     removeEventListener('mousemove', dragMove);
  //     removeEventListener('mouseup', dragEnd);
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>My Animes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalContainer>
        <Container>
          <div>
            <header>
              <h3>
                Mais Populares em {moment().get('year')}
              </h3>
              <Link href={{
                pathname: `/animes`,
                query: {
                  sort: EAnimesFileds.PopularityRank,
                  'filter[seasonYear]': moment().get('year')
                }
              }} >
                Ver todos
              </Link>
            </header>
            <div>
              {popularityRankAnimes.map((anime) => (
                <AnimeCard
                  key={anime.id}
                  anime={anime}
                />
              ))}
            </div>
            <header>
              <h3>Mais recentes</h3>
              <Link href={{
                pathname: `/animes`,
                query: {
                  sort: EAnimesFileds.StartDate,
                }
              }} >
                Ver todos
              </Link>
            </header>
            <div>
              {mostRecentAnimes.map((anime) => (
                <AnimeCard
                  key={anime.id}
                  anime={anime}
                />
              ))}
            </div>
          </div>
        </Container>
      </GlobalContainer>
    </>
  );
};

export default Animes;