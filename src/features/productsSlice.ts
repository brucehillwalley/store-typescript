import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'



// Define a type for the slice state
interface ProductsState {
  value: number
}

// Define the initial state using that type
const initialState: ProductsState = {
  value: 0,
}

export const productsSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
      
  }
    // Use the PayloadAction type to declare the contents of `action.payload`
   
  
})

export const { } = productsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.products.value

export default productsSlice.reducer