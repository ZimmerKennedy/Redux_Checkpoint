import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBalloonsAsync = createAsyncThunk("/balloons", async() => {
  const {data} = await axios.get('/balloons')
  return data
})

export const addBalloonAsync = createAsyncThunk("/balloons/add", async (color) => {
  const { data } = await axios.post('/balloons', {color});
  return data
});

export const balloonsSlice = createSlice({
  name: 'balloons',
  initialState: {
    balloons: [],
    error: null,
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchBalloonsAsync.fulfilled, (state, action)=>{
        state.balloons = action.payload
    });
    builder.addCase(addBalloonAsync.fulfilled, (state, action)=>{
        state.balloons.push(action.payload) 
    })
    builder.addCase(fetchBalloonsAsync.rejected, (state, action)=>{
      state.error = action.error 
    });
    
}
});

export const store = configureStore({
  reducer: {
    balloons: balloonsSlice.reducer,
  },
});
