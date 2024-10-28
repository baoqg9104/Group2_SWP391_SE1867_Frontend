
const MentorTransactionHistory = () => {
  return (
    <>
        <div className="flex flex-col p-10 h-[90svh]">
          <div
            className="-m-1.5 overflow-x-auto p-5 bg-white"
            style={{ boxShadow: "0 0 8px #bbbbbb" }}
          >
            <div className="relative">
              <div
                id="date-range-picker"
                className="flex items-center justify-start mb-2"
              >
                <div className="relative">
                  <input type="date" placeholder="Select date start" />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <input type="date" placeholder="Select date end" />
                </div>
                <div className="relative ml-5">
                  <button
                    className="flex items-center rounded bg-[#6AD9C2] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:shadow-none hover:bg-[#58efd0] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 mr-1.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y bg-white">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-[#443C3F] uppercase"
                      >
                        Transaction
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-[#443C3F] uppercase"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-[#443C3F] uppercase"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-[#443C3F] uppercase"
                      >
                        Time
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-[#443C3F] uppercase"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-[#443C3F] uppercase"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-gray-200 divide-">
                    {/* <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        Receive
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500 font-semibold">
                        + 1
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        07-10-2024
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        10:50:50
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        Group 1 - SE1867
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex justify-center">
                        <span className="text-[#209526]  font-medium w-[80px] h-[35px] flex items-center justify-center bg-[#e7fae3] rounded-[20px]">
                          Success
                        </span>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        Receive
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500 font-semibold">
                        + 1
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        07-10-2024
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        10:50:50
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        Group 1 - SE1867
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex justify-center">
                        <span className="text-[#C81C15] font-medium w-[80px] h-[35px] flex items-center justify-center bg-[#FCE4E4] rounded-[20px]">
                          Failed
                        </span>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default MentorTransactionHistory;
