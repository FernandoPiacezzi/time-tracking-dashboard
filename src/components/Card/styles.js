import styled from 'styled-components';
import exerciseIcon from '../../assets/icon-exercise.svg';
import workIcon from '../../assets/icon-work.svg';
import playIcon from '../../assets/icon-play.svg';
import socialIcon from '../../assets/icon-social.svg';
import studyIcon from '../../assets/icon-study.svg';
import selfCareIcon from '../../assets/icon-self-care.svg';

const parseBackgroundImageByType = (type) => {
  const option = {
    work: workIcon,
    exercise: exerciseIcon,
    play: playIcon,
    study: studyIcon,
    'self care': selfCareIcon,
    social: socialIcon,
  }

  return option[type] || '';
}

const parseBackgroundColorByType = (type) => {
  const option = {
    work: 'var(--orange)',
    exercise: 'var(--lime-green)',
    play: 'var(--soft-blue)',
    study: 'var(--light-red)',
    'self care': 'var(--soft-orange)',
    social: 'var(--violet)',
  }

  return option[type] || '';
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${({type}) => parseBackgroundImageByType(type)});
  background-repeat: no-repeat;
  background-position: calc(100% - 1rem) 0;
  background-color: ${({type}) => parseBackgroundColorByType(type)};
  border-radius: 15px;
  margin-bottom: 1.5rem;
  
  .card__content {
    margin-top: 3rem;
    background-color: var(--dark-blue);
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem;

    .first__section {
      display: flex;
      justify-content: space-between;
      color: white;
      font-weight: 500;

      button {
        border: none;
        background: none;
      }
    }

    .second__section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;

      .time {
        font-size: 2rem;
      }
    }
  } 
`;

// .card__container > .card__content > .current__content > .title{
//   font-weight: 500;
// } 

// .card__container > .card__content > .current__content > .time{
//   font-weight: 300;
//   font-size: 1.5rem;
// } 