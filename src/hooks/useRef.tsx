import React, { createContext, useContext, useRef, ReactNode } from 'react';

interface ScrollContextType {
    scrollToContatos: () => void;
    contatosRef: React.RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
};

interface ScrollProviderProps {
    children: ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
    const contatosRef = useRef<HTMLDivElement>(null);

    const scrollToContatos = () => {
        if (contatosRef.current) {
            window.scrollTo({
                top: contatosRef.current.offsetTop - 50,
                behavior: 'smooth',
            });
        }
    };

    return (
        <ScrollContext.Provider value={{ scrollToContatos, contatosRef }}>
            {children}
        </ScrollContext.Provider>
    );
}
