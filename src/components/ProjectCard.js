import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank"); // This opens the URL in a new tab
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
