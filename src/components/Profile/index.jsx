import { useContext } from 'react';
import profileImage from '../../assets/image-jeremy.png';
import { ContextAplication } from '../../context';

import { Container } from './styles';

const viewingOptionsList = ['Daily', 'Weekly', 'Monthly'];

export function Profile() {
  const { viewingOption, setViewingOption } = useContext(ContextAplication);

  return (
    <Container>
      <div className="profile">
        <img src={profileImage} alt="profile" />
        <div className="profile__text">
          <span>Report for</span>
          <span className="profile__name">Jeremy Robson</span>
        </div>
      </div>
      <div className="viewing__options">
        {viewingOptionsList.map((option) => (
          <button
            onClick={() => setViewingOption(option.toLowerCase())}
            className={viewingOption.toLowerCase() === option.toLowerCase() && 'active'}
          >
            {option}
          </button>
        ))}
      </div>
    </Container>
  );
}
