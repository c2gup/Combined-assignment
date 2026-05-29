import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RandomUser.css"; // Import the external CSS file

const RandomUser = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=5`,
      );
      setUserData((prevUsers) => [...prevUsers, ...response.data.results]);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("-------->", userData);

  useEffect(() => {
    fetchData();
  }, [page]);

  const handelMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="random-user-container">
      <h1>Random Users</h1>
      {!loading ? (
        <>
          {userData?.map((user, index) => {
            return (
              <div className=" users-list">
                <div key={index}>
                  <img src={user.picture.medium} alt="" />

                  <h1>{`${user.name.first} ${user.name.last}`}</h1>
                  <p>{user.email}</p>
                </div>
              </div>
            );
          })}

          <div>
            <button onClick={handelMore}>Load More Users</button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomUser;
