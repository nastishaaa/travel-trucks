import { createSlice } from "@reduxjs/toolkit";

import { getCampers } from "./operations";

// const initialState = {
//     data: {id: null,
//     name: '',
//     price: 0,
//     rating: 0,
//     location: '',
//     description: '',
//     form: '',
//     length: '',
//     width: '',
//     height: '',
//     tank: '',
//     consumption: '',
//     transmission: '',
//     engine: '',
//     AC: false,
//     bathroom: false,
//     kitchen: false,
//     TV: false,
//     radio: false,
//     refrigerator: false,
//     microwave: false,
//     gas: false,
//     water: false,
//     gallery: [],
//     reviews: [],
//     }
// }

const initialState = {
    data: [],
    status: 'idle',
    error: false,
}


const campersSlice = createSlice({
    name: 'campers',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(getCampers.fulfilled, (state, action) => {
            state.data = action.payload;
        })
            .addCase(getCampers.rejected, state => {
                state.error = true;
            })
});

export default campersSlice.reducer;