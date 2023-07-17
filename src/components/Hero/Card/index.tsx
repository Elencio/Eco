import { Cards, CardDescription, CardTitle, Technologies, Technology } from './styles';
import { CardsData } from './db';

export function CardComponent() {
  return (
    <>
      {CardsData.map((info, index) => (
        <Cards key={index}   hoverable>
          <CardTitle>{info.title}</CardTitle>
          <CardDescription>{info.description}</CardDescription>
          <Technologies>
            {info.technology.map((technology, index) => (
              <Technology key={index}>{technology}</Technology>
            ))}
          </Technologies>
          <span>{info.status}</span>
          <img src={info.image} alt='something' />
        </Cards>
      ))}
    </>
  );
}
