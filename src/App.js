import FooterSection from "./Component/FooterSection/FooterSection";
import HeadSection from "./Component/HeadSection/HeadSection";
import Packages from "./Component/Packages/Packages";
import Progress from "./Component/Progress/Progress";
import Streamline from "./Component/Streamline/Streamline";
import Testmonials from "./Component/Testimonials/Testimonials";

function App() {
  return (
    <>
      <HeadSection></HeadSection>
      <Progress></Progress>
      <Streamline></Streamline>
      <Packages></Packages>
      <Testmonials></Testmonials>
      <FooterSection></FooterSection>
    </>
  );
}

export default App;
