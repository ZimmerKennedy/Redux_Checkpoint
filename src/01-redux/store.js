import { configureStore, createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
    name: "state",
    initialState: {
        dogs: [],
        cats: [],
        petToAdopt: {},
        petToPreview: {},
    },

    reducers: {
        addNewDog(state, action) {
            state.dogs.push(action.payload);
        },
        addNewCat(state, action) {
            state.cats.push(action.payload);
        },
        adoptPet(state, action) {
            state.petToAdopt = action.payload;
        },
        previewPet(state, action) {
            state.petToPreview = action.payload;
        },
        removeDog(state, action) {
            state.dogs = state.dogs.filter((dog) => dog.id != action.payload);
        },
        removeCat(state, action) {
            state.cats = state.cats.filter((cat) => cat.id != action.payload);
        },
    },
}); //replace {} with your code

export const store = configureStore({
    reducer: {
        stateValues: stateSlice.reducer,
    },
}); //replace {} with your code