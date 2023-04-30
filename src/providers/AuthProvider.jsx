import React from 'react';
import { createContext } from 'react';

export const authContext = createContext(null);

const AuthProvider = ({children}) => {


    const authInfo = {}

    return (
        <div>
            <authContext.Provider value={authInfo}>

            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;