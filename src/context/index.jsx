import { createContext, useState } from 'react';

export const ContextAplication = createContext(null);

const AplicationProvider = ({ children }) => {

  const [viewingOption, setViewingOption] = useState('daily')

  const context = {
    viewingOption, 
    setViewingOption
  }

  return (
    <>
      <ContextAplication.Provider value={context}>
        {children}
      </ContextAplication.Provider>
    </>
  );
};


export default AplicationProvider;