

const HomePage = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="px-5">
        <Banner></Banner>
        <Status></Status>
        <Studying></Studying>
        <Feature></Feature>
        <HowItWorks></HowItWorks>
        <Reviews></Reviews>
        <Pricing></Pricing>
        <Questions></Questions>
        <NextStudyCard></NextStudyCard>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
