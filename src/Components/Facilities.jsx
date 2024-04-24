import React from "react";
// import { allData } from '../../allData';
import { useSelector, useDispatch } from "react-redux";

const Facilities = () => {
  const { allData } = useSelector((store) => store.allData);
  return (
    <>
    {allData!==null ? (
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            {allData.homepage.fitness_programs_section_title}
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            {allData.homepage.fitness_programs_section_desc}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {allData.homepage.fitness_programs_section_cards.map(
            (program) => (
              <div className="xl:w-1/3 md:w-1/2 p-4" key={program.program_id}>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    {program.program_title}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {program.program_desc}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
    ) : <></>}
      
    </>
  );
};

export default Facilities;
