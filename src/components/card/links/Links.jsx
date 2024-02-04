const Links = () => {
  const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

  return (
    <div className="links-container">
      {links.map((link, key) => {
        return <button className="link" key={key}>{link}</button>;
      })}
    </div>
  );
};
export default Links;
