import { Layout } from "../components/Layout";
import { Projects } from "../data/projectsData";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProjectCard } from "../components/card";
export default function MyProjects() {
  {
    /* === Category === */
  }
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(Projects.map((item) => item.category))];
  const filteredServices =
    selectedCategory === "All"
      ? Projects
      : Projects.filter((item) => item.category === selectedCategory);

  {
    /* === Sort Order === */
  }
  const [sortOrder, setSortOrder] = useState("latest");
  const sortedAndFilteredServices = [...filteredServices].sort((a, b) => {
    if (sortOrder === "latest") {
      return b.overview.year - a.overview.year;
    } else {
      return a.overview.year - b.overview.year;
    }
  });
  const navigate = useNavigate();
  const handleCardClick = (title) => {
    navigate(`/project/${title}`);
  };
  return (
    <Layout>
      <section className="aa-bg-white rounded-bottom-5" id="project">
        <span className="mx-3 mx-sm-4 mx-md-5">
          {" "}
          <Link to="/home" className="aa-text-accent">
            Home
          </Link>{" "}
          | My Projects
        </span>
        <div className="row g-0 mx-3 mx-sm-4 mx-md-5  ">
          <h1 className="aa-fs-header-2">My Works</h1>
          <div className="d-flex justify-content-end">
            <div className="d-flex align-items-center">
              <span className="mx-1">Sortby:</span>
              <select
                className="form-select mx-1"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="latest">Latest - Oldest</option>
                <option value="oldest">Oldest - Latest</option>
              </select>
              <span className="mx-1">ProjectType:</span>
              <select
                className="form-select mx-1"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="row g-0 mx-3 mx-sm-4 mx-md-5 pb-5">
          {sortedAndFilteredServices.map((items, index) => (
            <ProjectCard
              key={index}
              image={items.image}
              title={items.title}
              category={items.category}
              projectOverview={items.projectOverview}
              year={items.year}
              onclick={() => handleCardClick(items.title)}
            />
          ))}
        </div>
      </section>
      {/* Footer */}
      <section className="" id="footer">
        <div className="footer">
          <div className="row g-0 justify-content-center py-5 aa-bg-primary aa-text-white  text-center w-100">
            <div className="col-lg-8 px-3">
              <h1 className="aa-fs-header-1 mt-5 mb-4">
                Let's <span className="aa-text-accent">Work Together?</span>
              </h1>
              <p className="mb-4 fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <Link
                  to="/contacts"
                  className="aa-btn-accent "
                  aria-label="Contact me"
                >
                  LET'S TALK
                </Link>
                <a
                  href="./assets/icon/aa_b.png"
                  download="aa_b.png"
                  className="aa-btn-outline "
                  aria-label="Download my CV"
                >
                  DOWNLOAD RESUME
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
