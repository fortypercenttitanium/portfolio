import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import PortfolioView from '../components/PortfolioView';
import portfolioData from '../data/portfolioData.json';

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(9);

  useEffect(() => {
    setPortfolio(portfolioData.sort((a, b) => a.id - b.id));
  }, []);

  const indexOfLastPortfolio = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolio = indexOfLastPortfolio - portfoliosPerPage;
  const currentPortfolio = portfolio.slice(
    indexOfFirstPortfolio,
    indexOfLastPortfolio,
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Alex Younger Personal Portfolio Page"
        />
      </Helmet>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Portfolio" />
          {<PortfolioView portfolio={currentPortfolio} />}
          {!(portfolio.length > portfoliosPerPage) ? null : (
            <Pagination
              className="mt-50"
              itemsPerPage={portfoliosPerPage}
              totalItems={portfolio.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Portfolio;
