import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { toast } from "react-toastify";
import axios from "axios";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

interface SetNewPasswordProps {
  email: string;
}

const SetNewPassword = ({email}: SetNewPasswordProps) => {
  const location = useLocation();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  const handleSetNewPassword = async (e: FormEvent) => {
    e.preventDefault();
    try {

      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      const response = await axios.post("https://localhost:7007/api/User/set-new-password", 
        {
          email: email,
          password: password,
        }
      );

      toast.success("Password has been reset successfully");

    } catch (error) {
      console.log(error);
      toast.error("Failed to reset password");
    }
  };

  return (
    <>
      <div className="container flex justify-center items-center h-svh text-[#5B5B5B] ">
        <div className="h-[500px] w-[450px] rounded-[10px] border-black border-[1px] shadow-lg ">
          <div className="mb-[30px] flex justify-center items-end h-1/4 font-semibold text-[40px] text-[#222222]">
            Set new password
          </div>

          <div className="h-2/4 px-[70px]">
            <form onSubmit={handleSetNewPassword}>
              <div className="relative">
                <input
                  id="hs-toggle-password"
                  type="password"
                  className="mt-4 w-full h-[55px] bg-[#f7f7f7] pl-5 rounded-[10px] text-[18px] placeholder:text-[#808080] text-[#5B5B5B] placeholder:font-normal"
                  placeholder="New password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  
                />
                <button
                  type="button"
                  data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
                  className="absolute inset-y-0 end-0 flex items-center z-20 mt-4 mr-1 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
                >
                  <svg
                    className="shrink-0 size-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      className="hs-password-active:hidden"
                      d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                    ></path>
                    <path
                      className="hs-password-active:hidden"
                      d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                    ></path>
                    <path
                      className="hs-password-active:hidden"
                      d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                    ></path>
                    <line
                      className="hs-password-active:hidden"
                      x1="2"
                      x2="22"
                      y1="2"
                      y2="22"
                    ></line>
                    <path
                      className="hidden hs-password-active:block"
                      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                    ></path>
                    <circle
                      className="hidden hs-password-active:block"
                      cx="12"
                      cy="12"
                      r="3"
                    ></circle>
                  </svg>
                </button>
              </div>

              <div className="relative">
                <input
                  id="hs-toggle-password-confirm"
                  type="password"
                  className="mt-4 w-full h-[50px] bg-[#f7f7f7] pl-5 rounded-[10px] text-[18px] placeholder:text-[#808080] text-[#5B5B5B] placeholder:font-normal"
                  placeholder="Confirm password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  data-hs-toggle-password='{
        "target": "#hs-toggle-password-confirm"
      }'
                  className="absolute inset-y-0 end-0 flex items-center z-20 mt-4 mr-1 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
                >
                  <svg
                    className="shrink-0 size-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      className="hs-password-active:hidden"
                      d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                    ></path>
                    <path
                      className="hs-password-active:hidden"
                      d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                    ></path>
                    <path
                      className="hs-password-active:hidden"
                      d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                    ></path>
                    <line
                      className="hs-password-active:hidden"
                      x1="2"
                      x2="22"
                      y1="2"
                      y2="22"
                    ></line>
                    <path
                      className="hidden hs-password-active:block"
                      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                    ></path>
                    <circle
                      className="hidden hs-password-active:block"
                      cx="12"
                      cy="12"
                      r="3"
                    ></circle>
                  </svg>
                </button>
              </div>

              <button
                type="submit"
                className="mt-5 w-full h-[55px] bg-[#F56965] pl-5 rounded-[10px] text-[20px] text-[white] font-semibold"
              >
                Reset password
              </button>
            </form>

            <div className="text-center mt-8 text-[18px]">
              <Link to={"/login"}>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ color: "#6e6e6e" }}
                />

                <span className="ml-3">Back to log in </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetNewPassword;
