import * as githubSearchActions from "./githubSearch.actions";

export const githubSearchFeatureKey = "githubSearch";

export let initialState = {
  loading: false,
  errorMessage: "",
  profile: {},
  repos: [],
};

export const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    // for profile data
    case githubSearchActions.FETCH_PROFILE_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case githubSearchActions.FETCH_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: payload,
        errorMessage: "success",
      };
    case githubSearchActions.FETCH_PROFILE_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    // for repos data
    case githubSearchActions.FETCH_REPOS_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case githubSearchActions.FETCH_REPOS_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: payload,
      };
    case githubSearchActions.FETCH_REPOS_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
