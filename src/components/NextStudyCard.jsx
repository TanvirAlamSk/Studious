import { FaArrowRight } from "react-icons/fa6";
import TitleSubtitle from "./shared/TitleSubtitle";

const NextStudyCard = () => {
  return (
    <div className="my-25 bg-white max-w-280 mx-auto py-12 text-center">
      <TitleSubtitle
        title={"Your next study session could be the one that sticks"}
        subtitle={
          "Set your first goal in under two minutes. No credit card required."
        }
      ></TitleSubtitle>
      <button className="bg-[#0B6553] text-white px-4 py-3 rounded-lg text-md font-lg my-8">
        Start for Free <FaArrowRight className="inline ml-1" />
      </button>
    </div>
  );
};

export default NextStudyCard;
