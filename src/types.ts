export type Store = {
  searchQuery: string;
  searchResults: Object[];
  filePath: any;
  cardBaseUrl: string;
  selectedMovie: Object;
  backDropBaseUrl: string;
  loadingData: boolean;
  setSearchResults: (newSearchResults: any) => void;
  setConfig: (newBackDropBaseUrl: string, newCardBaseUrl: string) => void;
  setSearchQuery: (searchQuery: string) => void;
};
