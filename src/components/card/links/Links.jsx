const Links = () => {
  const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

  return (
    <div className="links-container">
      {links.map((link) => {
        return <button className="link">{link}</button>;
      })}
    </div>
  );
};
export default Links;
