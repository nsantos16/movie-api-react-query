import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FilterCtxProvider } from './context/filterContext';
import { MovieListCtxProvider } from './context/movieListContext';
import Home from './pages/Home';
import Movie from './pages/Movie';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterCtxProvider>
        <MovieListCtxProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:movieId" element={<Movie />} />
            </Routes>
          </BrowserRouter>
        </MovieListCtxProvider>
      </FilterCtxProvider>
    </QueryClientProvider>
  );
}

export default App;
