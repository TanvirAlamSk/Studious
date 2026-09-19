import TitleSubtitle from "./shared/TitleSubtitle";
import Card from "./shared/Card";
import { GoGoal, GoTasklist } from "react-icons/go";
import { IoBarChartOutline,  } from "react-icons/io5";
import { RiTimer2Line } from "react-icons/ri";
import { LuSparkles } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";

const Feature = () => {
  return (
    <section className="my-30">
      <TitleSubtitle
        title={"Everything a study session needs"}
        subtitle={
          "Nothing you don't need, nothing you have to configure for an hour first."
        }
      ></TitleSubtitle>
      <div className="max-w-280 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Card
          icon={GoTasklist}
          icontext={"text-[#0B6553]"}
          title={"Daily task breakdown"}
          subtitle={`Every goal splits into small tasks you can finish in one sitting.`}
        ></Card>

        <Card
          icon={GoGoal}
          icontext={"text-[#0B6553]"}
          title={"Goal tracking"}
          subtitle={`See exactly how many tasks stand between you and each goal.`}
        ></Card>

        <Card
          icon={FiBookOpen}
          icontext={"text-[#0B6553]"}
          title={"Subject insights"}
          subtitle={`Color-coded subjects show where your time is actually going.`}
        ></Card>

        <Card
          icon={RiTimer2Line}
          icontext={"text-[#0B6553]"}
          title={"Focus timer"}
          subtitle={`A built-in Pomodoro timer to protect a block of real study time.`}
        ></Card>

        <Card
          icon={IoBarChartOutline}
          icontext={"text-[#0B6553]"}
          title={"Visual progress"}
          subtitle={`Streaks, charts and progress bars that move when you do the work.`}
        ></Card>

        <Card
          icon={LuSparkles}
          icontext={"text-[#0B6553]"}
          title={"AI day planning"}
          subtitle={`One click suggests a simple schedule for today's tasks.`}
        ></Card>
      </div>
    </section>
  );
};

export default Feature;
