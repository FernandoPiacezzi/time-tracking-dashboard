import ellipsisIcon from '../../assets/icon-ellipsis.svg';

import { Container } from './styles';

export function Card({cardProps, viewingOption}) {

  if(!cardProps) {
    return null;
  }

  return (
    <Container type={cardProps.title.toLowerCase()}>

      <div className="card__content">

        <section className="first__section">
          <span className="title">{cardProps.title}</span>
          <button className="options__menu">
            <img src={ellipsisIcon} alt="menu-icon" />
          </button>
        </section>

        <section className="second__section">
          <span className="time">{cardProps.timeframes[viewingOption].current}hrs</span>

          <span className="previous__content">Last Week - {cardProps.timeframes[viewingOption].previous}hrs</span>
        </section>
      </div>
    </Container>
  );
}
