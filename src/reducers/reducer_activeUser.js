import { USER_SELECTED } from "../actions/index";

export default function (state = null, action) {
  // state qui concerne le reducer, pas l'app
  switch (action.type) {
    case USER_SELECTED:
      return action.payload;
  }
  return state;
}
