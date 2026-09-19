import React from "react";
import { IoIosStar } from "react-icons/io";
import TitleSubtitle from "./shared/TitleSubtitle";

const reviews = [
  {
    id: 1,
    name: "Maya R.",
    review:
      "I stopped rewriting the same to-do list every morning. Now I just open StudyFlow and my day is already there.",
    title: "Pre-med, sophomore",
  },
  {
    id: 1,
    name: "Devon L.",
    review:
      "Seeing the progress bar move is honestly the reason I keep coming back. It's a small thing but it works on me.",
    title: "Computer Science, junior",
  },
  {
    id: 1,
    name: "Priya S.",
    review:
      "The focus timer plus subject tracking finally showed me I was neglecting Physics. Fixed that in two weeks.",
    title: "Engineering, freshman",
  },
];

const Reviews = () => {
  return (
   <div>
    <div className="mb-12">
        <TitleSubtitle title="Students are getting more done" subtitle=""></TitleSubtitle>
    </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-280 mx-auto">
      {reviews.map((review) => (
        <div className="card bg-white shadow-sm" key={review.id}>
          <div className="card-body">
            <div className="card-actions justify-start text-[#D99A22] space-y-4">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
            <p>{review.review}</p>
            <span>
              <h2 className="card-title">{review.name}</h2>
              <p className="text-sm text-gray-600">{review.title}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Reviews;

{
  /* <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */
}
