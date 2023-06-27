import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <div className="img-container">
          <img src={imageUrl} alt={title} className="centered-image" />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
