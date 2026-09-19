import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoIosTrendingDown } from "react-icons/io";
import { LuLayers } from "react-icons/lu";
import TitleSubtitle from "./shared/TitleSubtitle";
import Card from "./shared/Card";

const Studying = () => {
  return (
    <section className="space-y-6">
      <TitleSubtitle 
      title={"Studying without a system is exhausting"}
      subtitle={"You're not lacking discipline. You're lacking a place where your goals turn into today's tasks."}
      ></TitleSubtitle>

      <div className="max-w-280 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Card  
        icon={FaRegCircleQuestion}
        icontext={"text-yellow-600"} 
        title={"Goals stay vague"} 
        subtitle={`"Get better at math" doesn't tell you what to open your laptop and do this afternoon.`}
        ></Card>

        <Card  
        icon={IoIosTrendingDown} 
        icontext={"text-yellow-600"} 
        title={"Motivation fades fast"} 
        subtitle={` Without something to point at, it's hard to tell if this week actually went anywhere.`}
        ></Card>

        <Card  
        icon={LuLayers} 
        icontext={"text-yellow-600"} 
        title={"Plans live everywhere"} 
        subtitle={`A to-do app, a notes app, a calendar - and none of them talk to each other.`}
        ></Card>
      </div>
      
    </section>
  );
};

export default Studying;
