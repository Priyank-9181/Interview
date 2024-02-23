import React from "react";
import MainRow from "../components/homePage/mainRow/MainRow";
import CategoryRow from "../components/homePage/category/CategoryRow";
import Featured from "../components/homePage/featured/Featured";
import CompaniesRow from "../components/homePage/companies/CompaniesRow";
import AppInfoContainer from "../components/homePage/appRow/AppInfoContainer";
import Footer from "../components/homePage/footer/Footer";
import FooterRights from "../components/homePage/footer/FooterRights";
function HomePage() {
  return (
    <div>
      <MainRow />
      <CategoryRow />
      <Featured />
      <CompaniesRow />
      <AppInfoContainer />
      <Footer />
      <FooterRights />
    </div>
  );
}

export default HomePage;
