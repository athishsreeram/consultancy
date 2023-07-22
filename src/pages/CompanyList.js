import React from "react";
import Card from "./component/card";

const CompanyList = () => {
  const handleApply = (title) => {
    alert(`Applied for ${title} position!`);
  };

  // Create an array of data objects representing the companies
  const companies = Array.from({ length: 50 }, (v, i) => ({
    title: `Company Name ${i + 1}`,
    description: `Short Description
     ${i + 1}.`,
    imageUrl:
      "https://media.licdn.com/dms/image/D560BAQGPqcLbSdtTrA/company-logo_200_200/0/1685710564115?e=1697068800&v=beta&t=2l6A0c1fHETMngCcOZ4TJx8ndo1hQy08KY13hSuc0HE",
  }));

  // Group companies into rows with 5 companies each
  const rows = [];
  for (let i = 0; i < companies.length; i += 5) {
    const row = companies.slice(i, i + 5);
    rows.push(row);
  }

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((company, index) => (
            <div className="column" key={index}>
              <Card
                title={company.title}
                description={company.description}
                imageUrl={company.imageUrl}
                onApply={() => handleApply(company.title)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CompanyList;
