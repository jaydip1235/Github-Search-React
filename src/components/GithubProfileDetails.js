import React from "react";
import { useSelector } from "react-redux";
import * as githubSearchReducer from "../redux/githubSearch/githubSearch.reducer";
import spinner from "../assets/img/spinner.gif";

let GithubProfileDetails = (props) => {
  let githubSearchInfo = useSelector((state) => {
    return state[githubSearchReducer.githubSearchFeatureKey];
  });

  let { loading, profile } = githubSearchInfo;

  const Notfound = () => {
    return (
      <>
        <span className="text-danger opacity-50">sorry- no data</span>
      </>
    );
  };

  return (
    <React.Fragment>
      <React.Fragment>
        {loading ? (
          <React.Fragment>
            <img src={spinner} className="d-block m-auto" alt="" />
          </React.Fragment>
        ) : (
          <div className="card same-height">
            <div className="card-tilte p-4">
              <span className="badge badge-primary m-2 p-2 rounded">
                {profile.followers} Followers
              </span>
              <span className="badge badge-primary m-2 p-2 rounded">
                {profile.public_repos} Repos
              </span>
              <span className="badge badge-primary m-2 p-2 rounded">
                {profile.public_gists} Gists
              </span>
              <span className="badge badge-primary m-2 p-2 rounded">
                {profile.following} Following
              </span>
            </div>
            <div className="card-body profile-details">
              <ul className="list-group">
                <li className="list-group-item   text-dark border-0">
                  <span className="text-uppercase text-muted">NAME : </span>{" "}
                  <span className="font-weight-bold">{profile.name}</span>
                </li>
                <li className="list-group-item   text-dark border-0">
                  <span className="text-uppercase text-muted">Location : </span>{" "}
                  <span className="font-weight-bold ">{profile.location}</span>
                </li>
                <li className="list-group-item   text-dark border-0">
                  <span className="text-uppercase text-muted">Email : </span>{" "}
                  <span className="font-weight-bold ">
                    {profile.email ? profile.email : <Notfound />}
                  </span>
                </li>
                <li className="list-group-item   text-dark border-0">
                  <span className="text-uppercase text-muted">Company : </span>{" "}
                  <span className="font-weight-bold ">
                    {profile.company ? profile.company : <Notfound />}
                  </span>
                </li>
                <li className="list-group-item   text-dark border-0">
                  <span className="text-uppercase text-muted">Website : </span>{" "}
                  <span className="font-weight-bold ">
                    <a href={profile.blog} rel="noreferrer" target="_blank">
                      Link
                    </a>
                  </span>
                </li>
                <li className="list-group-item   text-dark border-0">
                  <span className="text-uppercase text-muted">Member : </span>{" "}
                  Since{" "}
                  <span className="font-weight-bold ">
                    {profile.created_at}
                  </span>
                </li>
                <li className="list-group-item   text-dark border-0">
                  <span className="text-uppercase text-muted">
                    Profile URL :{" "}
                  </span>{" "}
                  <span className="font-weight-bold ">
                    <a href={profile.html_url} rel="noreferrer" target="_blank">
                      {profile.html_url}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </React.Fragment>
    </React.Fragment>
  );
};
export default GithubProfileDetails;
