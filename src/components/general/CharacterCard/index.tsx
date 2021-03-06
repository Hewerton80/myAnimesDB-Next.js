import Image from 'next/image';
import Link from 'next/link';
import { ICharacter } from '../../../models/character';

import { Container, heightCharacterImage, widthCharacterImage } from './styles';

interface CharacterCardProps {
  character: ICharacter;
}

function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Container
      title={character.attributes.canonicalName}
    >
      <div>
        {character?.attributes?.image?.original &&
          <Link href={'#'}>
            <a>
              <Image
                width={widthCharacterImage}
                height={heightCharacterImage}
                draggable={false}
                src={character?.attributes?.image?.original}
                alt={character.attributes.canonicalName}
              />
            </a>
          </Link>
        }
      </div>
      <p>{character.attributes.canonicalName}</p>
      {/* <div className='character-footer'>
        <span>#{character.attributes.ratingRank || '?'}</span>
        <span><AiFillStar size={16} color={colors.yellow2} /> {getScoreFormat(character.attributes.averageRating) || '?'}</span>
        <span><FaUserAlt size={10} color={colors.yellow2} /> {character.attributes.userCount}</span>
      </div> */}
    </Container>
  );
};

export default CharacterCard;
