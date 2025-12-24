import { Helmet } from "react-helmet-async";
import CakeScene from "@/components/cake/CakeScene";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Birthday Celebration</title>
        <meta name="description" content="A warm, intimate birthday cake experience crafted with pure CSS realism." />
      </Helmet>
      <main>
        <CakeScene />
      </main>
    </>
  );
};

export default Index;
