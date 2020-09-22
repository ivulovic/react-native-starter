import React from 'react';

interface ContextProps {
  locale: string;
  translate(value: string, config?: any): string;
}
export const LanguageContext = React.createContext<ContextProps>({
  locale: 'en',
  translate: (value: string, config?: any): string => '',
});