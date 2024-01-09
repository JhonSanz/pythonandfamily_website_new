'use client';

import { useState, createContext } from 'react';
import TemporaryDrawer from '@/components/mainLayout';
import { MATH } from '@/utils/const';


export const ThemeProvider = createContext(null);

export function Providers({ children }) {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState(MATH);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") === null ? EN : localStorage.getItem("language")
  );
  return (
    <ThemeProvider.Provider value={{
      open, setOpen,
      subject, setSubject,
      language, setLanguage
    }}>
      <TemporaryDrawer />
      {children}
    </ThemeProvider.Provider>
  );
}
