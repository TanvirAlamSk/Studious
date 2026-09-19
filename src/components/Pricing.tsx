import TitleSubtitle from "./shared/TitleSubtitle";

const Pricing = () => {
  return (
    <section className="my-40">
      <TitleSubtitle
        title="Simple pricing"
        subtitle="Start free. Upgrade if you outgrow it."
      ></TitleSubtitle>
      <div className="flex flex-wrap gap-4 justify-center mt-10">
        <div className="card w-80 bg-white shadow-sm">
          <div className="card-body">
            <span className="text-gray-900 text-lg font-semibold">Free</span>
            <p className="text-md text-gray-400">Everything you need to get organized.</p>
            <div className="">
              <h2 className="text-md text-gray-400 mb-4">
                <span className="text-3xl font-bold text-stone-950">$0</span> /  forever
                </h2>
              
            </div>
            <ul className="mt-6 flex flex-col gap-4 text-sm">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited tasks and goals</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>5 subjects</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Focus timer</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>7-day history</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-block btn-outline hover:text-white text-black br border border-[#0B6553]">Get Start</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-white shadow-sm border-2 border-[#0B6553]">
          <div className="card-body">
            <span className="text-gray-900 text-lg font-semibold">Pro</span>
            <p className="text-md text-gray-400">For students who want the full picture.</p>
            <div className="">
              <h2 className="text-md text-gray-400">
                <span className="text-3xl font-bold text-stone-950">$6</span> /   per month
                </h2>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-sm">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Everything in Free</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited subjects</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>AI day planning</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Full history and insights</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Priority support</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-outline btn-block border-none bg-[#0B6553]">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
