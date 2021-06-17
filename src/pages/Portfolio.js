import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import PortfolioView from '../components/PortfolioView';

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(9);

  useEffect(() => {
    let mounted = true;
    axios.get('/api/portfolios').then((response) => {
      if (mounted) {
        setPortfolio(response.data);
      }
    });
    return () => (mounted = false);
  }, [portfolio]);

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
