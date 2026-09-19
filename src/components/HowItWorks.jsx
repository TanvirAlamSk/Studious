import { LuSparkles } from "react-icons/lu";
import TitleSubtitle from "./shared/TitleSubtitle";

const steps = [
  {
    id: "01",
    title: "Set a goal",
    subtitle: `"Finish Calculus II with an A." Big, specific, and yours.`,
  },
  {
    id: "02",
    title: "Break it into daily tasks",
    subtitle: `StudyFlow turns that goal into small tasks you can do today.`,
  },
  {
    id: "03",
    title: "Watch your progress move",
    subtitle: `Every task you check off fills the bar a little more.`,
  },
];

const HowItWorks = () => {
  return (
    <div className="max-w-280 mx-auto my-20">
      <TitleSubtitle title="How it works" subtitle=""></TitleSubtitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center my-10">
        {steps.map((step, i) => (
          <div key={i}>
            <h2 className="font-bold text-4xl">{step.id}</h2>
            <h3 className="font-bold text-lg text-gray-900 my-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#14231F] rounded-lg p-12 mt-40">
        <div className="text-[#D99A22] flex items-center text-sm">
          <LuSparkles className="w-6 h-6 m-2" />
          AI day planning
        </div>

        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
            <div className="space-y-2 mt-2" >
                <h3 className="text-3xl font-semibold">
                    Not sure where to start? Let StudyFlow suggest a plan
                </h3>
                <p className="text-gray-300 mt-4 lg:pr-12">
                    One click on "Plan my day" turns your open tasks into a simple, realistic schedule - so the hardest part, starting, is already done for you.
                </p>
            </div>
            <div className="bg-[#202E2A] rounded-xl p-4 text-sm space-y-3 border border-gray-700">
            <p className="text-[#D99A22]">Today's suggested plan</p>
            <p>9:00 - 9:45 Deep work on your hardest task</p>
            <p>10:00 - 10:45 Next task, same subject</p>
            <p>11:00 - 11:30 Quick review and recall</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
