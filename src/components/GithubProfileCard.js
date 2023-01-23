import React from "react";
import { useSelector } from "react-redux";
import * as githubSearchReducer from "../redux/githubSearch/githubSearch.reducer";
import spinner from "../assets/img/spinner.gif";

let GithubProfileCard = (props) => {
  let githubSearchInfo = useSelector((state) => {
    return state[githubSearchReducer.githubSearchFeatureKey];
  });

  let { loading, profile } = githubSearchInfo;

  return (
    <React.Fragment>
      <React.Fragment>
        {loading ? (
          <React.Fragment>
            <img src={spinner} className="d-block m-auto" alt="" />
          </React.Fragment>
        ) : (
          <div className="card same-height text-dark">
            <img src={profile.avatar_url} alt="" className="img-fluid" />
            <div className="card-body">
              <p className="h4">{profile.name}</p>
              <small>{profile.bio}</small>
              <br />
              <a
                href={profile.html_url}
                rel="noreferrer"
                target="_blank"
                className="btn btn-success btn-sm m-0 my-2"
              >
                Profile
              </a>
            </div>
          </div>
        )}
      </React.Fragment>
    </React.Fragment>
  );
};
export default GithubProfileCard;
