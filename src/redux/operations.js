import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCampers = createAsyncThunk(
    'campers/get',
    async (_, thunkAPI) => {
        try {
            const data = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
            console.log(data.data.items);
            
            return data.data.items;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)