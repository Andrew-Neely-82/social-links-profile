import Jessica from "../../../assets/images/avatar-jessica.jpeg";
import React from "react";

const Bio = () => {
  const bioInfo = [
    {
      name: "Jessica Randall",
      location: "London, United Kingdom",
      quote: `"Front-end developer and avid reader"`,
    },
  ];

  return (
    <div className="bio-container">
      <img src={Jessica} alt="jessica avatar"></img>
      {bioInfo.map((info, key) => {
        return (
          <React.Fragment key={key}>
            <h1 className="name">{info.name}</h1>
            <span className="location">{info.location}</span>
            <p className="quote">{info.quote}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default Bio;
