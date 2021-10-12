import { useContext } from 'react';
import { ContextAplication } from '../../context';
import { Container } from './styles';

export function Card({ cardProps }) {
  const { viewingOption } = useContext(ContextAplication);
  console.log(viewingOption, cardProps);

  if (!cardProps) {
    return null;
  }

  return (
    <Container type={cardProps.title.toLowerCase()}>
      <div className="card__content">
        <section className="first__section">
          <span className="title">{cardProps.title}</span>
          <button className="options__menu" />
        </section>

        <section className="second__section">
          <span className="time">
            {cardProps.timeframes[viewingOption].current}hrs
          </span>

          <span className="previous__content">
            Last Week - {cardProps.timeframes[viewingOption].previous}hrs
          </span>
        </section>
      </div>
    </Container>
  );
}
