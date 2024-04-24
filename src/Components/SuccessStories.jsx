import React from "react";
import { useSelector } from "react-redux";
// import { allData } from '../../allData';

const SuccessStories = () => {
  const { allData } = useSelector((store) => store.allData);
  return (
    <>
    {allData!==null ? (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {allData.homepage.success_stories_section_title}
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              {allData.homepage.success_stories_section_desc}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {allData.homepage.success_stories_section_cards.map(
              (user) => (
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" key={user.card_id}>
                  <div className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src={user.user_avatar_img}
                    />
                    <p className="leading-relaxed">{user.user_review}</p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      {user.user_name}
                    </h2>
                    <p className="text-gray-500">{user.user_role}</p>
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

export default SuccessStories;
