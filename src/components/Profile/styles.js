import styled from 'styled-components';

export const Container = styled.div`
  height: fit-content;

  display: flex;
  flex-direction: column;

  background-color: var(--dark-blue);
  margin-bottom: 1rem;

  border-radius: 15px;
  
  .profile {
    padding: 2rem;
    display: flex;
    align-items: center;

    background-color: var(--blue);

    border-radius: 15px;

    img {
      height: 4rem;
      border-radius: 90q;
      border: 3px solid white;
    }

    .profile__text {
      display: flex;
      flex-direction: column;

      margin-left: 1rem;
      font-size: 0.8rem;

      .profile__name {
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
  }

  .viewing__options {
    display: flex;
    justify-content: space-between;

    padding: 1.5rem 2rem;
    color: var(--desaturated-blue);
    font-weight: 400;

    
    
    button {
      background: none;
      border: none;
      cursor: pointer;
      transition: color 0.3s;
      outline: none;

      &:hover {
        color: white;
      }
      
      &.active {
        color: white;
      }
    }

  }

  @media (min-width: 440px) {
    .profile {
      align-items: start;
      flex-direction: column;
      
      .profile__text {
        margin: 1.5rem 0 0 0;
      }
    }
    
    .viewing__options {
      gap: 1rem;
      align-items: start;
      flex-direction: column;
    }
  }

  @media (min-width: 640px) {
    height: calc(100% - 1.5rem);
    .profile {
      height: 100%;
    }
  }
`;
