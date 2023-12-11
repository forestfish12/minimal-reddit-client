import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  hasError: false,
};

export const getPosts = createAsyncThunk(
  'homepage/getPosts',
  async (arg, thunkAPI) => {
    // debugger;
    const response = await fetch('https://www.reddit.com/r/popular.json');
    const json = await response.json();
    // console.log(json);
    return json.data.children;
  }
)

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action)=> {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.posts = action.payload;
        // console.log(action.payload);
      })
  },
  selectors: {
    selectPosts: (state) => state.posts,
  }
});

export const { selectPosts } = homepageSlice.selectors;
export default homepageSlice.reducer;