import React, { useState } from "react";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";
import { useDispatch, useSelector } from "react-redux";
import * as githubSearchActions from "../redux/githubSearch/githubSearch.actions";
import * as githubSearchReducer from "../redux/githubSearch/githubSearch.reducer";
let GithubSearchApp = () => {
  let dispatch = useDispatch();

  let githubSearchInfo = useSelector((state) => {
    return state[githubSearchReducer.githubSearchFeatureKey];
  });

  let { profile, repos } = githubSearchInfo;

  let [githubUser, setGithubUser] = useState("");

  let submitSearch = (event) => {
    event.preventDefault();
    dispatch(githubSearchActions.fetchProfileInfo(githubUser));
    dispatch(githubSearchActions.fetchReposInfo(githubUser));
  };

  return (
    <React.Fragment>
      {/*  <pre>{githubUser}</pre>*/}
      <div className="container mt-6">
        <div className="row">
          <div className="col">
            <p className="display-3 heading">Github Profile Search</p>
            <p className="lead">
              Search a Github Profile to see his/her activities
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <form
              className="form-inline justify-content-center"
              onSubmit={submitSearch}
            >
              <div className="form-group ">
                <input
                  style={{ fontWeight: "bold" }}
                  value={githubUser}
                  onChange={(e) => setGithubUser(e.target.value)}
                  size="30"
                  type="text"
                  className="form-control p-4 text-dark "
                  placeholder="Github Username"
                />
              </div>
              <input
                type="submit"
                className="btn btn-secondary   "
                value="Search"
              />
            </form>
          </div>
        </div>
      </div>
      {/* Github Profile Details */}
      <React.Fragment>
        {Object.keys(profile).length > 0 ? (
          <React.Fragment>
            <GithubProfile />
          </React.Fragment>
        ) : null}
      </React.Fragment>
      {/* Github Repos Details*/}
      <div className="row">
        <div className="col">
          {repos.length > 0 ? (
            <React.Fragment>
              <GithubRepos />
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};
export default GithubSearchApp;
