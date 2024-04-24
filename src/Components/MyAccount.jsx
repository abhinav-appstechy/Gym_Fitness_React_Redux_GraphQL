import React from "react";
// import { allData } from "../../allData";
import { useSelector } from "react-redux";

const MyAccount = () => {
  const { allData } = useSelector((store) => store.allData);
  return (
    <>
    {allData!==null ? (
      <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-1/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={allData.my_account.user_image_avatar}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, {JSON.parse(localStorage.getItem("user")).name}
          </h1>

          <h1 className="title-font sm:text-xl text-3xl mt-10 mb-4 font-medium text-gray-900">
            Your Details
          </h1>

          <div className="flex justify-center">
            <div className="relative overflow-x-auto shadow-md">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="p-4">
                      <img
                        src={allData.my_account.custom_icons.name}
                        className="w-12 md:w-12 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Name
                    </th>
                    <td className="px-6 py-4">
                      {JSON.parse(localStorage.getItem("user")).name}
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="p-4">
                      <img
                        src={allData.my_account.custom_icons.email}
                        className="w-12 md:w-12 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Email
                    </th>
                    <td className="px-6 py-4">
                      {JSON.parse(localStorage.getItem("user")).email}
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="p-4">
                      <img
                        src={allData.my_account.custom_icons.contact_number}
                        className="w-12 md:w-12 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Contact Number
                    </th>
                    <td className="px-6 py-4">
                      {JSON.parse(localStorage.getItem("user")).phone_number}
                    </td>
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="p-4">
                      <img
                        src={allData.my_account.custom_icons.company}
                        className="w-12 md:w-12 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Current Company
                    </th>
                    <td className="px-6 py-4">
                      {JSON.parse(localStorage.getItem("user")).company}
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="p-4">
                      <img
                        src={allData.my_account.custom_icons.plan}
                        className="w-12 md:w-12 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Purchased Plan
                    </th>
                    <td className="px-6 py-4">Premium</td>
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="p-4">
                      <img
                        src={allData.my_account.custom_icons.points}
                        className="w-12 md:w-12 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Points Earned
                    </th>
                    <td className="px-6 py-4">2200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    ) : <></>}
      
    </>
  );
};

export default MyAccount;
