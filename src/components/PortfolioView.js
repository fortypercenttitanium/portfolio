import React from 'react';
import Portfolio from './Portfolio';

function PortfolioView({ portfolio }) {
  return (
    <div className="row mt-30-reverse">
      {portfolio.map((portfolioItem) => (
        <div className="col-lg-4 col-md-6 col-12 mt-30" key={portfolioItem.id}>
          <Portfolio content={portfolioItem} />
        </div>
      ))}
    </div>
  );
}

export default PortfolioView;
