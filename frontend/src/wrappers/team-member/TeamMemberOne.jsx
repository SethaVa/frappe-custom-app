import clsx from "clsx";
import PropTypes from "prop-types";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import TeamMemberOneSingle from "../../components/team-member/TeamMemberOneSingle";
import teamMemberData from "../../data/team-members/team-member-one.json";

const TeamMemberOne = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("team-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        {/* section title */}
        <SectionTitleTwo
          titleText="Team Members"
          subTitleText="Behind every innovation is a passionate team. At EVCar, our experts bring together their diverse skills, experience, and creativity to drive the electric revolution. From visionary engineers to dedicated customer support, each team member is committed to making your journey to electric seamless and exciting."
          positionClass="text-center"
          spaceClass="mb-60"
        />

        <div className="row">
          {teamMemberData?.map((single, key) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
              <TeamMemberOneSingle data={single} spaceBottomClass="mb-30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

TeamMemberOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default TeamMemberOne;
