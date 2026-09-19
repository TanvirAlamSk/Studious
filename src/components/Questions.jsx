import React from "react";
import TitleSubtitle from "./shared/TitleSubtitle";

const Questions = () => {
  return (
    <div>
      <TitleSubtitle
        title="Frequently asked questions"
        subtitle=""
      ></TitleSubtitle>

      <div className="max-w-180 mx-auto space-y-5 mt-10">
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold text-gray-900">
            Do I need to create an account to try it?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            You can log in with any email to try the app - it's a demo login, no real password check, no verification email.
          </div>
        </div>
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold text-gray-900">
            Where is my data stored?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Everything lives in your browser's local storage. Nothing is sent to a server, so it stays on this device.
          </div>
        </div>
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Can I use StudyFlow for more than one subject?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Yes - add as many subjects as you're studying, each with its own color and completion tracking.
          </div>
        </div>
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            What does the AI day planner actually do?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            It suggests a simple schedule for your open tasks with one click, so you're not staring at a blank plan.
          </div>
        </div>
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Is there a mobile version?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            StudyFlow is a responsive web app - it works on your phone's browser down to a 375px-wide screen.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
