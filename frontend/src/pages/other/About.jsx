import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";

const About = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="About us"
        description="About page of evcar eCommerce"
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: "/" },
            { label: "About us", path: pathname },
          ]}
        />

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

        {/* team member */}
        <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

export default About;
