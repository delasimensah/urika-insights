import React from "react";

const TeamCard = ({ name, position, children }) => {
  return (
    <div className="space-y-2 transition duration-200 ease-in cursor-pointer md:p-5 lg:hover:shadow-lg lg:hover:rounded-md ">
      <h1 className="text-lg font-semibold">{name}</h1>
      <h2 className="text-sm">{position}</h2>
      <p className="text-gray-600">{children}</p>
    </div>
  );
};

export default TeamCard;
