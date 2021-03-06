import { success, pending, error, resetNull } from './reducerHelpers';

const initialState = {
  newGame: null,
  err: {},
  loading: false
};

const horseActions = {
  POST_NEW_GAME: (state, action) => success(state, action, 'newGame'),
  POST_NEW_GAME_PENDING: (state) => pending(state),
  POST_NEW_GAME_ERROR: (state, action) => error(state, action),
  RESET: (state) => resetNull(state, 'newGame')
};

export default function reducer(state = initialState, action) {
  const transformer = horseActions[action.type] || (() => state);
  return transformer(state, action);
}

