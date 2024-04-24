import React from "react";
// import { allData } from "../../allData";
import { useSelector } from "react-redux";

const PlanPage = () => {
  const { allData } = useSelector((store) => store.allData);
  return (
    <>
    {allData!==null ? (
      <>
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-4/6 md:w-3/6 w-5/6 object-cover object-center rounded"
            alt="hero"
            src={allData.plan.hero_section_image}
          />
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              {allData.plan.hero_section_title}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              {allData.plan.hero_section_desc}
            </p>
            <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
              <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
                {allData.plan.plan_first_btn}
              </button>
              <button className="py-1 px-4 focus:outline-none">
                {allData.plan.plan_second_btn}
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {allData.plan.plan_cards.map((plan, idx) => (
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full" key={idx}>
                <div
                  className={`h-full p-6 rounded-lg border-2 ${
                    plan.plan_name == "PREMIUM"
                      ? "border-indigo-500"
                      : "border-gray-300"
                  }  flex flex-col relative overflow-hidden`}
                >
                  {plan.plan_name == "PREMIUM" ? (
                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                      POPULAR
                    </span>
                  ) : (
                    <></>
                  )}
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    {plan.plan_name}
                  </h2>
                  <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                    {plan.plan_price}
                  </h1>

                  {plan.plan_highlights.map((feature, idx) => (
                    <p
                      className={`flex items-center text-gray-600 ${
                        idx + 1 == plan.plan_highlights.length ? "mb-6" : "mb-2"
                      }`}
                      key={idx}
                    >
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      {feature}
                    </p>
                  ))}

                  <button className={`flex items-center mt-auto text-white ${plan.plan_name == "PREMIUM" ?"bg-indigo-500" : "bg-gray-400"} border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded`}>
                    {plan.plan_button_value}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
    ) : <></>}
      
    </>
  );
};

export default PlanPage;
