import React, { useState, createContext,  } from 'react';

const FavoritesContext = createContext([{}, () => {}]);

const FavoritesContextProvider = (props) => {
    const [state, setState] = useState({});
    return (
        <FavoritesContext.Provider value={[state, setState]}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export {FavoritesContext, FavoritesContextProvider};

