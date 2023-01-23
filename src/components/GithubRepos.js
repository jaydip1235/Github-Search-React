import React from "react";
import { useSelector } from "react-redux";
import * as githubSearchReducer from "../redux/githubSearch/githubSearch.reducer";
import spinner from "../assets/img/spinner.gif";

let GithubRepos = (props) => {
  let githubSearchInfo = useSelector((state) => {
    return state[githubSearchReducer.githubSearchFeatureKey];
  });

  let { loading, profile, repos } = githubSearchInfo;
  repos?.sort(
    (a, b) => parseInt(b.stargazers_count) - parseInt(a.stargazers_count)
  );
  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
          <img src={spinner} className="d-block m-auto" alt="" />
        </React.Fragment>
      ) : (
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <p className="h2 text-uppercase text-muted my-5 ">
                Github repositories Details of {profile.name}
              </p>
              <p className="text-muted h4">
                Total repositories: {repos.length}
              </p>
            </div>
          </div>
          <div className="row py-0">
            <div className="col">
              <React.Fragment>
                <div class="table-responsive shadow">
                  <table class="table shadow table-light  table-bordered table-hover">
                    {/* <caption>List of users</caption> */}
                    <thead className="thead-dark text-uppercase">
                      <th scope="col">repository</th>
                      <th scope="col  ">stars</th>
                      <th scope="col ">watchers</th>
                    </thead>
                    <tbody>
                      {repos.map((repo) => {
                        return (
                          <React.Fragment>
                            <tr>
                              <td>
                                <a
                                  href={repo.html_url}
                                  rel="noreferrer"
                                  target="_blank"
                                  className="h6  text-uppercase"
                                >
                                  {repo.name}
                                </a>
                              </td>
                              <td className="h6 text-center text-uppercase">
                                {repo.stargazers_count}
                              </td>
                              <td className="h6 text-center text-uppercase">
                                {repo.watchers_count}
                              </td>
                            </tr>
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </React.Fragment>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default GithubRepos;
