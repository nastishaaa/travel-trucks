import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCampers = createAsyncThunk(
    'campers/get',
    async (_, thunkAPI) => {
        try {
            const data = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
            
            return data.data.items;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getCamperById = createAsyncThunk(
    'camper/get',
    async (payload, thunkAPI) => {
        try {
            const res = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${payload}`)
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        
    }
)