import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-lg">
      <figure>
        <img src={photoUrl} alt="user-image" />
      </figure>
      <div className="card-body mt-[-25px]">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + " " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center mt-2">
          <button className="btn btn-soft btn-secondary">Ignore</button>
          <button className="btn btn-soft btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
