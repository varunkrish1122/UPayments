import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from '@/Store/middlewares/sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  // Adding Saga As Middleware
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
    }),
    sagaMiddleware,
  ],
});

// Including Root Sagas to Run
sagaMiddleware.run(rootSaga);

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
