// High Lighted Card
function HighLightedProjectsCard({ onClick, image, title }) {
  return (
    <div className="aa-hl-card" onClick={onClick}>
      <div className="card">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}


// Work Experience Card
function WorkExperienceCard({company, role, image, date, isLast, isFirst }){
    const svgHeight = "130"; 
    const centerY = parseInt(svgHeight) / 2; 
    return(<div className="d-flex align-items-center">
        <svg
          height={svgHeight}
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          className="me-5"
        >
          {!isFirst && (
            <line
              x1="10"
              y1="0"
              x2="10"
              y2={centerY - 10}
              stroke="#EB5531"
              strokeWidth="2"
            />
          )}
          <circle r="10" cx="10" cy={centerY} fill="#EB5531" />
          {!isLast && (
            <line
              x1="10"
              y1={centerY + 10}
              x2="10"
              y2={svgHeight}
              stroke="#EB5531"
              strokeWidth="2"
            />
          )}
        </svg>
  
        <div className="row rounded-5 py-sm-3 aa-we-container">
          <div className="col-12 col-sm-7 d-flex align-items-center mt-2 mt-sm-0">
            <img src={image} alt={company} />
            <div className="ms-3">
              <h2 className="aa-fs-p-4 mb-0">{company}</h2>
              <p className="mb-0 text-muted aa-fs-p-5">{role}</p>
            </div>
          </div>
          <div className="col-12 col-sm-5 my-auto text-center text-sm-end">
            <p className="text-muted aa-fs-p-5">{date}</p>
          </div>
        </div>
      </div>
    );
}


// Project Card
function ProjectCard({
    onclick,
    image,
    title,
    category,
    year,
    projectOverview,
  }) {
    return (
      <div className="col-md-6 col-lg-4 mt-3">
        <div
          className="card rounded-5 "
          onClick={onclick}
        >
          <div className="card-body">
            <div className="position-relative d-flex align-items-end">
              <img src={image} className="w-100" alt={title} />
              <div className="aa-btn-arrows-con">
                <svg
                  viewBox="0 0 100 100"
                  className="position-absolute aa-btn-arrows-services"
                >
                  <path
                    d="
                M12.5 33.3
                L12.5 83.3
                Q12.5 100 0 100
                L100 100 100 0
                Q100 16.7 87.5 16.7
                L25 16.7
                Q12.5 16.7 12.5 33.3
                Z
                "
                    fill="#fff"
                  />
                </svg>
                <button className="aa-btn-arrows">&rarr;</button>
              </div>
            </div>
            <p className="mt-3 aa-fs-p-4">{category}</p>
            <h1 className="aa-fs-p-2 card-title mt-3 fw-bold">{title}</h1>
            <p className="card-text">{projectOverview}</p>
            {year && <p className="text-muted">Year: {year}</p>}
          </div>
        </div>
      </div>
    );
  }

  function ProjectViewMoreCard({
    onclick,
    image,
    title,
    category,
    year,
    projectOverview,
  }) {
    return (
      <div className="col-sm-6 mt-3">
        <div
          className="card rounded-5 "
          onClick={onclick}
        >
          <div className="card-body">
            <div className="position-relative d-flex align-items-end">
              <img src={image} className="w-100" alt={title} />
              <div className="aa-btn-arrows-con">
                <svg
                  viewBox="0 0 100 100"
                  className="position-absolute aa-btn-arrows-services"
                >
                  <path
                    d="
                M12.5 33.3
                L12.5 83.3
                Q12.5 100 0 100
                L100 100 100 0
                Q100 16.7 87.5 16.7
                L25 16.7
                Q12.5 16.7 12.5 33.3
                Z
                "
                    fill="#fff"
                  />
                </svg>
                <button className="aa-btn-arrows">&rarr;</button>
              </div>
            </div>
            <p className="mt-3 aa-fs-p-4">{category}</p>
            <h1 className="aa-fs-p-2 card-title mt-3 fw-bold">{title}</h1>
            <p className="card-text">{projectOverview}</p>
            {year && <p className="text-muted">Year: {year}</p>}
          </div>
        </div>
      </div>
    );
  }

export { HighLightedProjectsCard, WorkExperienceCard, ProjectCard,ProjectViewMoreCard };
