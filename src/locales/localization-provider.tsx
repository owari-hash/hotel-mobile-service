'use client';

import React, { useMemo, createContext } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// ----------------------------------------------------------------------

type LocalesContextType = {
  currentLang: {
    value: string;
    label: string;
    icon: string;
  };
  onChangeLang: (newLang: string) => void;
};

export const LocalizationContext = createContext<LocalesContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export default function LocalizationProvider({ children }: Props) {
  const memoizedValue = useMemo(
    () => ({
      currentLang: { value: 'en', label: 'English', icon: '/assets/icons/flags/ic_flag_en.svg' },
      onChangeLang: (newLang: string) => {
        console.log('Language changed to:', newLang);
      },
    }),
    []
  );

  return (
    <LocalizationContext.Provider value={memoizedValue}>
      <MuiLocalizationProvider dateAdapter={AdapterDateFns}>{children}</MuiLocalizationProvider>
    </LocalizationContext.Provider>
  );
}
