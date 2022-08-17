import { useState, createContext, useEffect, useContext } from "react";

export interface CatTypes {
  id: string;
  name: string;
  description: string;
  image: { url: string };
  child_friendly: number;
}

// Całą definicje kontekstu wyniósł bym jako osobny komponent
// Tutaj przykład: https://kentcdodds.com/blog/how-to-use-react-context-effectively
export interface AppContext {
  cats: CatTypes[];
  getMore: () => void;
  setCats: (value: CatTypes[]) => void;
  hasMore: boolean;
}

type CatsProviderProps = { children: React.ReactNode };

// Tą wartość można było odrazu w jakiś sposób zainicjalować

export const CatsContext = createContext<AppContext | undefined>(undefined);

function CatsProvider({ children }: CatsProviderProps) {
  const [cats, setCats] = useState<CatTypes[]>([]);
  const [pageNum, setPageNum] = useState<number>(2);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const loadCats = async () => {
      const res = await fetch(
        `https://api.thecatapi.com/v1/breeds?page=1&limit=4`
      );
      const data: CatTypes[] = await res.json();
      setCats(data);
    };
    loadCats();
  }, []);

  const fetchMoreCats = async () => {
    const res = await fetch(
      `https://api.thecatapi.com/v1/breeds?page=${pageNum}&limit=4`
    );
    const data = await res.json();
    return data;
  };

  const getMore = async () => {
    const newCats = await fetchMoreCats();

    setCats([...cats, ...newCats]);

    if (newCats.length < 4) {
      setHasMore(false);
    }
    setPageNum((prev) => prev + 1);
  };

  return (
    <CatsContext.Provider value={{ cats, setCats, getMore, hasMore }}>
      {children}
    </CatsContext.Provider>
  );
}

function useCats() {
  const context = useContext(CatsContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { CatsProvider, useCats };
