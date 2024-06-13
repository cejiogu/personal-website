import React from 'react';

const ProjectImage = (props: {img: string; title: string}) => {
  const imageStyles = {
    width: "100%",
    height: '100%',
    borderRadius: "10%",
  }

  return (
    <div className="image-container">
      <img className="project-image" style={imageStyles} src={props.img} alt={ `This is the face of the project ${props.title}`} />
    </div>
  );
}

export default ProjectImage; 