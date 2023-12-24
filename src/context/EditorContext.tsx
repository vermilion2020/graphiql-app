import { createContext, useState } from 'react';
import { BASIC_TYPES_QUERY } from '../model/queries';

export interface IEditorContext {
  query: string;
  vars: string;
  headers: string;
  collapsed: boolean;
  visibleTab: 'vars' | 'headers';
  setQuery: (vars: string) => void;
  setVars: (vars: string) => void;
  setHeaders: (headers: string) => void;
  setCollapsed: (collapsed: boolean) => void;
  setVisibleTab: (visibleTab: 'vars' | 'headers') => void;
}

export const EditorContext = createContext<IEditorContext>({
  query: BASIC_TYPES_QUERY,
  vars: '',
  headers: '',
  collapsed: false,
  visibleTab: 'vars',
  setQuery: () => {},
  setVars: () => {},
  setHeaders: () => {},
  setCollapsed: () => {},
  setVisibleTab: () => {},
});

export const EditorState = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState(BASIC_TYPES_QUERY);
  const [vars, setVars] = useState('');
  const [headers, setHeaders] = useState('');
  const [collapsed, setCollapsed] = useState(false);
  const [visibleTab, setVisibleTab] = useState<'vars' | 'headers'>('vars');

  return (
    <EditorContext.Provider
      value={{
        query,
        setQuery,
        vars,
        setVars,
        headers,
        setHeaders,
        collapsed,
        setCollapsed,
        visibleTab,
        setVisibleTab,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
