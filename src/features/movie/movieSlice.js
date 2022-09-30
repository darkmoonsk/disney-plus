import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
})

const selectMovies = (state) => state.movie.movies;

export const { setMovies } = movieSlice.actions;

export { selectMovies } 

export default movieSlice.reducer;