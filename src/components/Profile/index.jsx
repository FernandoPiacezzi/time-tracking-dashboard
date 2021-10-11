import profileImage from '../../assets/image-jeremy.png';

import './styles.css';

export function Profile() {
  return (
    <div className="profile__container">
      <div className="profile">
        <img src={profileImage} alt="profile" />
        <div className="profile__text">
          <span>Report for</span>
          <span className="profile__name">Jeremy Robson</span>
        </div>
      </div>
      <div className="viewing__options">
        <span>Daily</span>
        <span className="active">Weekly</span>
        <span>Monthly</span>
      </div>
    </div>
  );
}
