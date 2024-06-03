import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AgentHeroBanner from "./AgentBanner";
import ExpertSection from "../Utils/ExpertSection";

function AgentDashboard() {

  return (
    <div className="Agent">
      <Header />
      <AgentHeroBanner
          header="Agent One"
          text="Expert dealer in Residential Homes and Luxury apartments. Licensed in Canada and Asia. Trusted by experts and companies with 4.5 rating in Trustpilot."
          // TODO implement: switch over to Contact Agent whenever page is viewed by public user.
          label="Trusted Agent"
        />
        <ExpertSection
        header="Meet Expert Agents"
        text="We have certified experts ready to attend to you"
      />
      <Footer />
    </div>
  );
}

export default AgentDashboard;
