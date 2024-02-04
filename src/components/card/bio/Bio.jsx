import Jessica from "../../../assets/avatar-jessica.jpeg";

const Bio = () => {
  const bioInfo = [{
    name: "Jessica Randall",
    location: "London, United Kingdom",
    quote: `"Front-end developer and avid reader"`,
  }];

  return (
    <div className="bio-container">
      <img src={Jessica} alt="jessica avatar"></img>
      {bioInfo.map((info) => {
        return (
          <>
            <span className="name">{info.name}</span>
            <span className="location">{info.location}</span>
            <p className="quote">{info.quote}</p>
          </>
        );
      })}
    </div>
  );
};
export default Bio;
