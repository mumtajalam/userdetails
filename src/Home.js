import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Home = () => {
  const errorRef = useRef();
  const [user, setUser] = useState([]);
  const [inputid, setInputid] = useState(0);
  const navigate = useNavigate();

  const searchFn = async (e) => {
    e.preventDefault();
    const userid = parseInt(inputid);
    if (userid < 1 || userid > 12) {
      errorRef.current.textContent = "Please Enter userid should be 1 to 12";
    } else {
      const response = await axios.get(
        `https://reqres.in/api/users/${inputid}`
      );
      errorRef.current.textContent = "";
      console.log(response.data.data);
      const userDetails = response.data.data;
      navigate(`/user/${userid}`, { state: userDetails });
    }
  };

  const callapi = async () => {
    const result = await axios.get("https://reqres.in/api/users");
    setUser(result.data.data);
  };
  useEffect(() => {
    callapi();
  }, []);
  return (
    <>
      <div className="container" style={{ backgroundColor: "gray" }}>
        <div className="row">
          <div className="col-lg-12 card-margin">
            <div className="card search-form">
              <div className="card-body p-0">
                <form id="search-form">
                  <div className="row">
                    <div className="col-12">
                      <div className="row no-gutters">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>User</option>
                            <option>name</option>
                            <option>name</option>
                            <option>name</option>
                            <option>name</option>
                            <option>name</option>
                            <option>name</option>
                          </select>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                          <input
                            type="number"
                            placeholder="Search..."
                            className="form-control"
                            id="search"
                            name="search"
                            onChange={(e) => {
                              setInputid(e.target.value);
                            }}
                            value={inputid}
                          />
                        </div>

                        <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                          <button
                            type="submit"
                            class="btn btn-base"
                            onClick={searchFn}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-search"
                            >
                              <circle cx="11" cy="11" r="8"></circle>
                              <line
                                x1="21"
                                y1="21"
                                x2="16.65"
                                y2="16.65"
                              ></line>
                            </svg>
                          </button>
                        </div>
                        <p className="text-danger" ref={errorRef}></p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {user &&
          user.map((item) => (
            <div className="row">
              <div className="col-12">
                <div className="card card-margin">
                  <div className="card-body">
                    <div className="result-body">
                      <div className="table-responsive">
                        <table className="table widget-26">
                          <tbody>
                            <tr>
                              <td>
                                <div className="widget-26-job-emp-img">
                                  <img src={item.avatar} alt="Company" />
                                </div>
                              </td>
                              <td>
                                <div class="widget-26-job-title">
                                  <Link to="/">
                                    {item.first_name + " " + item.last_name}
                                  </Link>
                                </div>
                              </td>
                              <td>
                                <div class="widget-26-job-info">
                                  {item.email}
                                </div>
                              </td>

                              <td>
                                <div class="widget-26-job-category bg-soft-base">
                                  <i class="indicator bg-base"></i>
                                  <span>Software Development</span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;

{
  /* <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter userid"
          onChange={(e) => {
            setInputid(e.target.value);
          }}
          value={inputid}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={searchFn}
        >
          Search
        </button>
      </div> */
}
