'use client';

import { useContext } from 'react';

import { LocalizationContext } from './localization-provider';

// ----------------------------------------------------------------------

export function useLocales() {
  const context = useContext(LocalizationContext);

  if (!context) {
    throw new Error('useLocales must be used within a LocalizationProvider');
  }

  return context;
}
