import { createSlice } from "@reduxjs/toolkit";

import { getCamperById, getCampers } from "./operations";
const initialState = {
    data: [],
    item: {},
    status: 'idle',
    error: false,
    savedData: [],
    filteredData: {
        equipment: [], 
        form: [],    
        location: ''  
    },
    filteredCampers: []
}


const campersSlice = createSlice({
    name: 'campers',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        addToFavorites: (state, action) => {
            const camper = state.data.find(c => c.id === action.payload);
            if (camper && !state.savedData.some(i => i.id === camper.id)) {
                state.savedData.push(camper);
            }
        },
        removeFromFavorites: (state, action) => {
            state.savedData = state.savedData.filter(i => i.id !== action.payload);
        },
        setFilteredData: (state, action) => {
            const { category, value } = action.payload;

            if (category === 'location') {
                state.filteredData.location = value;
                return;
            }

            if (Array.isArray(state.filteredData[category])) {
                if (state.filteredData[category].includes(value)) {
                    state.filteredData[category] = state.filteredData[category].filter(
                        item => item !== value
                    );
                } else {
                    state.filteredData[category].push(value);
                }
            }
        },
        clearFilters: (state) => {
            state.filteredData = { equipment: [], form: [], location: '' };
        }, 
        setFilteredCampers: (state, action) => {
            state.filteredCampers = action.payload;
        }
    },
    extraReducers: builder =>
        builder.addCase(getCampers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.error = false;
        })
            .addCase(getCampers.rejected, state => {
                state.error = true;
            })
            .addCase(getCamperById.fulfilled, (state, action) => {
                state.item = action.payload;
                state.error = false;
            })
            .addCase(getCamperById.rejected, state => {
                state.error = false;
            })
});

export const { setData, addToFavorites, removeFromFavorites, setFilteredData, clearFilters, setFilteredCampers } = campersSlice.actions;
export default campersSlice.reducer;