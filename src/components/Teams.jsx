import Section from "./Section";
import Heading from "./Heading";
import GlowCard from "./design/GlowCard";
import { teamCards } from "../constants";

const Teams = () => (
  <Section
    className="lg:pt-[12rem] pt-[4rem] pb-24 -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="teams"
  >
    <div className="container">
      {/* ── header ── */}
      <Heading
        title="The team behind your success"
        text="Six disciplines. One cohesive unit. All focused on making your product exceptional."
      />

      {/* ── grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {teamCards.map((card, i) => (
          <GlowCard key={i} {...card} background="#0e0c15" />
        ))}
      </div>
    </div>
  </Section>
);

export default Teams;
