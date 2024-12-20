import { toast } from "react-toastify";
import {
  Dialog,
  Transition,
  DialogPanel,
  TransitionChild,
  DialogTitle,
} from "@headlessui/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//fmconst buttonStyle ='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded';
import { useLocation } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useEffect, useState, useContext, Fragment } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import axiosInstance from "./axiosInstance";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

interface Student {
  studentId: string;
  studentName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
}

export default function ManageStudents() {
  const location = useLocation();
  useEffect(() => {
    window.HSStaticMethods.autoInit();
    getStudents();
  }, [location.pathname]);

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext is undefined");
  }
  const { authData, setAuthData } = authContext;
  const [specStu, setSpecStu] = useState<string>("");

  const [openDel, setDel] = useState<boolean>(false);
  const [openEdit, setEdit] = useState<boolean>(false);

  const [data, setData] = useState<Student[]>([]);

  const [fullName, setFullName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");

  function closeDelModal() {
    setDel(false);
  }

  function openDelModal(n: string) {
    setDel(true);
    setSpecStu(n);
  }

  function closeEditModal() {
    setEdit(false);
  }

  function openEditModal(n: Student) {
    setFullName(n.studentName);
    setGender(n.gender);
    setEmail(n.email);
    setPhone(n.phone);
    setDateOfBirth(n.dateOfBirth);
    setSpecStu(n.studentId);
    setEdit(true);
  }

  const getStudents = async () => {
    try {
      const response = await axiosInstance.get(
        `https://localhost:7007/api/Student/all`,
        {
          headers: {
            Authorization: `Bearer ${authData?.token}`,
          },
        }
      );

      setData(response.data);
      console.log(data);
    } catch (error) {
      console.log("Can not get student list", error);
      toast.error("Can not get student list");
    }
  };

  const deleteStudents = async (id: string) => {
    try {
      const response = await axios
        .delete(`https://localhost:7007/api/Student/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${authData?.token}`,
          },
        })
        .then((response) => {
          console.log(specStu);
          console.log(response.data);
          getStudents();
        });
    } catch (err) {
      console.log(specStu);
    }
  };

  const handleSave = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const data = {
        role: "Student",
        id: specStu,
        name: fullName,
        email: email,
        phone: phone,
        gender: gender,
        dateOfBirth: dateOfBirth,
      };

      if (dateOfBirth >= new Date().toISOString().split("T")[0]) {
        toast.error("Invalid date of birth!");
        return;
      }
      console.log(data);
      const response = await axios.put(
        "https://localhost:7007/api/User/update-user",
        data,
        {
          headers: {
            Authorization: `Bearer ${authData?.token}`,
          },
        }
      );

      toast.success("Update successful!");
      getStudents();
      //setRefresh(!refresh);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data);
        //console.log(data);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  const formatDate = (isoDate: string): string => {

    if (!isoDate) {
      return "";
    }

    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <div className="px-2 grid grid-cols-1 gap-4 py-2">
        {data.map((students) => (
          <div
            key={students.studentId}
            className="grid grid-cols-5 py-2 border-4 rounded-lg "
          >
            <div className="col-span-1 ">
              <div className="flex justify-center items-center gap-x-2 py-3 px-4">
                <FontAwesomeIcon icon={faUser} size="8x" />
              </div>
            </div>
            <div className="col-span-2 border-l px-4">
              ID: {students.studentId}
              <br></br>
              Name: {students.studentName}
              <br></br>
              Email: {students.email}
              <br></br>
              Gender: {students.gender}
              <br></br>
              Phone: {students.phone}
              <br></br>
            </div>
            {/* Buttons  */}
            <div className="col-span-2">
              <div className="flex justify-end items-center gap-x-2 py-3 px-4">
                {/* Edit button code */}
                <button
                  onClick={() => {
                    openEditModal(students);
                  }}
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  View
                </button>
                {/* Edit button code */}

                {/*Delete button code */}
                <button
                  onClick={() => {
                    openDelModal(students.studentId);
                  }}
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Delete
                </button>
                {/*Delete button code */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*  Modals Code */}

      {/*Del Modal*/}
      <Transition appear show={openDel} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeDelModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Confirm Deleting {specStu}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete selected mentor
                    </p>
                  </div>

                  <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                    <button
                      type="button"
                      className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      onClick={() => {
                        deleteStudents(specStu);
                        closeDelModal();
                      }}
                    >
                      Confirm Delete
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/*Delete Modal*/}

      {/*Edit Modal*/}
      <Transition appear show={openEdit} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeEditModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Student Details {specStu}
                  </DialogTitle>
                  <form className="flex flex-col gap-3" onSubmit={handleSave}>
                    <div className="p-4 overflow-y-auto flex flex-col justify-center items-center">
                      <div className="w-full mt-6">
                        <div className="relative">
                          <input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            readOnly
                            className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                              focus:pt-6
                              focus:pb-2
                              [&:not(:placeholder-shown)]:pt-6
                              [&:not(:placeholder-shown)]:pb-2
                              autofill:pt-6
                              autofill:pb-2"
                            placeholder="Full name"
                            required
                          />
                          <label
                            className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                              peer-focus:scale-90
                              peer-focus:translate-x-0.5
                              peer-focus:-translate-y-1.5
                              peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                              peer-[:not(:placeholder-shown)]:scale-90
                              peer-[:not(:placeholder-shown)]:translate-x-0.5
                              peer-[:not(:placeholder-shown)]:-translate-y-1.5
                              peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                          >
                            Full name
                          </label>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="relative">
                            <input
                              value={gender}
                              readOnly
                              onChange={(e) => setGender(e.target.value)}
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                                focus:pt-6
                                focus:pb-2
                                [&:not(:placeholder-shown)]:pt-6
                                [&:not(:placeholder-shown)]:pb-2
                                autofill:pt-6
                                autofill:pb-2"
                            >
                            </input>

                            <label
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                peer-focus:scale-90
                                peer-focus:translate-x-0.5
                                peer-focus:-translate-y-1.5
                                peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                                peer-[:not(:placeholder-shown)]:scale-90
                                peer-[:not(:placeholder-shown)]:translate-x-0.5
                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                            >
                              Gender
                            </label>
                          </div>

                          <div className="relative">
                            <input
                              required
                              value={email}
                              readOnly
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                                focus:pt-6
                                focus:pb-2
                                [&:not(:placeholder-shown)]:pt-6
                                [&:not(:placeholder-shown)]:pb-2
                                autofill:pt-6
                                autofill:pb-2"
                              placeholder="Email"
                            />
                            <label
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                peer-focus:scale-90
                                peer-focus:translate-x-0.5
                                peer-focus:-translate-y-1.5
                                peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                                peer-[:not(:placeholder-shown)]:scale-90
                                peer-[:not(:placeholder-shown)]:translate-x-0.5
                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                            >
                              Email
                            </label>
                          </div>

                          <div className="relative">
                            <input
                              readOnly
                              pattern="^(0[1-9][0-9]{8}|(\+84[1-9][0-9]{8}))$"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              type="text"
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                                focus:pt-6
                                focus:pb-2
                                [&:not(:placeholder-shown)]:pt-6
                                [&:not(:placeholder-shown)]:pb-2
                                autofill:pt-6
                                autofill:pb-2"
                              placeholder="Phone"
                            />
                            <label
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                peer-focus:scale-90
                                peer-focus:translate-x-0.5
                                peer-focus:-translate-y-1.5
                                peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                                peer-[:not(:placeholder-shown)]:scale-90
                                peer-[:not(:placeholder-shown)]:translate-x-0.5
                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                            >
                              Phone
                            </label>
                          </div>

                          <div className="relative">
                            <input
                              readOnly
                              value={formatDate(dateOfBirth)}
                              onChange={(e) => setDateOfBirth(e.target.value)}
                              type="date"
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                                focus:pt-6
                                focus:pb-2
                                [&:not(:placeholder-shown)]:pt-6
                                [&:not(:placeholder-shown)]:pb-2
                                autofill:pt-6
                                autofill:pb-2"
                              placeholder="Date of Birth"
                            />
                            <label
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                peer-focus:scale-90
                                peer-focus:translate-x-0.5
                                peer-focus:-translate-y-1.5
                                peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                                peer-[:not(:placeholder-shown)]:scale-90
                                peer-[:not(:placeholder-shown)]:translate-x-0.5
                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                            >
                              Date of Birth
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        onClick={() => {
                          closeEditModal();
                        }}
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Save changes
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/*Edit Modal*/}

      {/*  Modals Code ends */}
    </>
  );
}
