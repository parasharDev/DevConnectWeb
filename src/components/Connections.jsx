import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addConnections } from "../utils/connectionSlice";
import { useDispatch, useSelector } from "react-redux";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
      console.log("ressss", res.data.data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0)
    return <h1 className="text-bold text-2xl">No Connections Found</h1>;

  return (
    <div className="flex justify-center m-10 flex-col items-center gap-5">
      <h1 className="text-bold text-2xl">Connections</h1>
      <div className="flex flex-col gap-5">
        {connections.map((connection) => {
          const { firstName, lastName, photoUrl, age, gender, about } =
            connection;
          console.log(firstName, lastName, photoUrl, age, gender, about);
          return (
            <div className="card bg-base-300 w-96 shadow-lg p-4 mx-4">
              <div className="flex gap-6 items-center">
                <img
                  alt="photo"
                  src={photoUrl}
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <span className="font-bold text-xl">{firstName + " " + lastName}</span>
                  {age && gender && <p>{age} {gender}</p>}
                  <p>{about}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
