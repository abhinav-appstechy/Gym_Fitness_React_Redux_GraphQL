import React from "react";
import { useSelector } from "react-redux";
// import { allData } from "../../allData";

const AboutUsPage = () => {
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
            src={allData.about_us.hero_section_image}
          />
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {allData.about_us.hero_section_title}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {allData.about_us.hero_section_desc}
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {allData.about_us.our_team_members_card.map((member, idx)=>(
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={idx}>
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={member.member_avatar_image}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      {member.member_name}
                    </h2>
                    <p className="text-gray-500">
                      {member.member_role}
                    </p>
                  </div>
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

export default AboutUsPage;
