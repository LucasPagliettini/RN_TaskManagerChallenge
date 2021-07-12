import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));

// Configuring access to types into the STORE with a personalizated useSelector as "useAppSelector"
type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Enable if needed to use a typed Dispatch
// export type DispatchTypes = typeof store.dispatch
// export const useTypedDispatch = () => useDispatch<DispatchTypes>()
