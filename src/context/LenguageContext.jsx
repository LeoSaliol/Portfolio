/* eslint-disable react/prop-types */

import { createContext } from 'react';
import { useState } from 'react';

export const ContextLenguage = createContext();

function LenguageProvider({ children }) {
    const [lenguageES, setLenguageES] = useState(false);
    return (
        <ContextLenguage.Provider value={{ lenguageES, setLenguageES }}>
            {children}
        </ContextLenguage.Provider>
    );
}

export default LenguageProvider;
