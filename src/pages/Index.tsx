import { Helmet } from "react-helmet-async";
import BirthdayExperience from "@/components/experience/BirthdayExperience";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Happy Birthday</title>
        <meta name="description" content="A warm, intimate birthday celebration experience." />
      </Helmet>
      <main>
        <BirthdayExperience />
      </main>
    </>
  );
};

export default Index;
