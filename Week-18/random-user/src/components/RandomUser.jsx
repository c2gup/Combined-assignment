import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RandomUser.css"; // Import the external CSS file

const RandomUser = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      const data = await axios.get("https://randomuser.me/api/");

      setUserData(data.data?.results);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("-------->", userData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="random-user-container">
      <h1>RandomUser</h1>
      {loading ? (
        <>
          {userData.map((user, index) => {
            return (
              <>
                <div key={index}>
                  <img src={user.picture.medium} alt="" />

                  <h1>{`${user.name.first} ${user.name.last}`}</h1>
                  <p>{user.email}</p>
                </div>
              </>
            );
          })}
        </>
      ) : (
        <p>Lodading</p>
      )}
    </div>
  );
};

export default RandomUser;
