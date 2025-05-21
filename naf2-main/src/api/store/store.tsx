import { configureStore } from '@reduxjs/toolkit'
import auth from '../reducers/auth'
// import crds from '../reducers/crds'

// Create the store with typed reducers
const store = configureStore({
  reducer: {
    auth,
    // crds,
  },
})

// Export store and types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
