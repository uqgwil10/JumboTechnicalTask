export type Store = {
  searchQuery: string;
  searchResults: Object[];
  cardBaseUrl: string;
  selectedMovie: Object;
  backDropBaseUrl: string;
  setSearchResults: (newSearchResults: any) => void;
  setConfig: (newBackDropBaseUrl: string, newCardBaseUrl: string) => void;
  setSearchQuery: (searchQuery: string) => void;
};
