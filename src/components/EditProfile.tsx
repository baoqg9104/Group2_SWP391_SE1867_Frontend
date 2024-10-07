import {
  faPhone,
  faEnvelope,
  faGift,
  faUser,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Select from "react-select";

const skills = [
  // Frontend Development
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" },
  { value: "responsive_design", label: "Responsive Design" },
  { value: "sass_scss", label: "SASS/SCSS" },
  { value: "bootstrap", label: "Bootstrap" },
  { value: "tailwind_css", label: "Tailwind CSS" },
  { value: "material_ui", label: "Material-UI" },
  { value: "jquery", label: "jQuery" },
  { value: "web_accessibility", label: "Web Accessibility (WCAG)" },

  // Frontend Frameworks & Libraries
  { value: "react_js", label: "React.js" },
  { value: "angular_js", label: "Angular.js" },
  { value: "vue_js", label: "Vue.js" },
  { value: "svelte", label: "Svelte" },
  { value: "next_js", label: "Next.js" },
  { value: "nuxt_js", label: "Nuxt.js" },

  // Backend Development
  { value: "node_js", label: "Node.js" },
  { value: "express_js", label: "Express.js" },
  { value: "asp_net_core", label: "ASP.NET Core" },
  { value: "django", label: "Django" },
  { value: "flask", label: "Flask" },
  { value: "ruby_on_rails", label: "Ruby on Rails" },
  { value: "php", label: "PHP" },
  { value: "laravel", label: "Laravel" },
  { value: "spring_boot", label: "Spring Boot (Java)" },
  { value: "graphql", label: "GraphQL" },

  // Version Control
  { value: "git", label: "Git" },
  { value: "github", label: "GitHub" },
  { value: "gitlab", label: "GitLab" },
  { value: "bitbucket", label: "Bitbucket" },

  // Database & Data Handling
  { value: "sql", label: "SQL" },
  { value: "mysql", label: "MySQL" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "mongodb", label: "MongoDB" },
  { value: "firebase", label: "Firebase Realtime Database" },
  { value: "sqlite", label: "SQLite" },
  { value: "redis", label: "Redis" },

  // API Integration
  { value: "rest_api", label: "RESTful APIs" },
  { value: "graphql_api", label: "GraphQL APIs" },
  { value: "json_xml", label: "JSON & XML" },
  { value: "websockets", label: "WebSockets" },
  { value: "axios", label: "Axios / Fetch" },

  // Build Tools & Package Managers
  { value: "webpack", label: "Webpack" },
  { value: "babel", label: "Babel" },
  { value: "npm", label: "NPM (Node Package Manager)" },
  { value: "yarn", label: "Yarn" },
  { value: "gulp", label: "Gulp" },
  { value: "parcel", label: "Parcel" },

  // Testing
  { value: "jest", label: "Jest" },
  { value: "mocha", label: "Mocha" },
  { value: "chai", label: "Chai" },
  { value: "cypress", label: "Cypress" },
  { value: "jasmine", label: "Jasmine" },
  { value: "react_testing_library", label: "React Testing Library" },
  { value: "selenium", label: "Selenium" },

  // Web Performance Optimization
  { value: "lazy_loading", label: "Lazy Loading" },
  { value: "code_splitting", label: "Code Splitting" },
  { value: "caching", label: "Caching (Service Workers)" },
  { value: "minification", label: "Minification (CSS/JS)" },
  { value: "image_compression", label: "Image Compression" },

  // Security
  { value: "https_ssl", label: "HTTPS/SSL" },
  { value: "xss_prevention", label: "Cross-Site Scripting (XSS) Prevention" },
  { value: "sql_injection_prevention", label: "SQL Injection Prevention" },
  {
    value: "csrf_prevention",
    label: "Cross-Site Request Forgery (CSRF) Prevention",
  },
  { value: "content_security_policy", label: "Content Security Policy (CSP)" },

  // DevOps & Deployment
  {
    value: "ci_cd",
    label: "CI/CD (Continuous Integration/Continuous Deployment)",
  },
  { value: "docker", label: "Docker" },
  { value: "nginx", label: "Nginx" },
  { value: "apache", label: "Apache" },
  { value: "aws", label: "AWS (Amazon Web Services)" },
  { value: "heroku", label: "Heroku" },
  { value: "netlify", label: "Netlify" },
  { value: "vercel", label: "Vercel" },

  // CMS (Content Management Systems)
  { value: "wordpress", label: "WordPress" },
  { value: "joomla", label: "Joomla" },
  { value: "drupal", label: "Drupal" },
  { value: "ghost", label: "Ghost" },
  { value: "contentful", label: "Contentful" },

  // Web Animation
  { value: "css_animations", label: "CSS Animations" },
  { value: "greensock_gsap", label: "GreenSock (GSAP)" },
  { value: "framer_motion", label: "Framer Motion" },
  { value: "three_js", label: "Three.js (WebGL)" },

  // PWA (Progressive Web Apps)
  { value: "service_workers", label: "Service Workers" },
  { value: "web_app_manifest", label: "Web App Manifest" },
  { value: "push_notifications", label: "Push Notifications" },
];

const levels = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "proficient", label: "Proficient" },
  { value: "advanced", label: "Advanced" },
  { value: "expert", label: "Expert" },
];

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const EditProfile = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <div className="p-14 pt-7">
        <div className="space-y-8">
          <div>
            <div className="mt-10">
              <div className="w-[80%]">
                <div className="mt-2 flex items-center w-full gap-10 shadow p-7 pt-5 rounded-[10px] bg-white">
                  <div className="w-[20%]">
                    <div className="size-[120px] bg-gray-200 rounded-full border-[3px] border-white shadow-lg"></div>
                  </div>
                  <div className="w-[75%]">
                    <div className="text-[25px] font-medium mt-2 mb-3">
                      Full name
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="size-4 mr-2"
                        />
                        Male
                      </div>

                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faGift}
                          className="size-4 mr-2 text-gray-500"
                        />
                        <span className="text-gray-500">Date of birth</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="size-4 mr-2 text-gray-500"
                        />
                        <span className="text-gray-500">Email</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="size-4 mr-2 text-gray-500"
                        />
                        <span className="text-gray-500">Phone</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-[5%]">
                    <div
                      className="relative bottom-[25px] rounded-full size-[40px] bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-center"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="hs-scale-animation-modal"
                      data-hs-overlay="#hs-scale-animation-modal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="size-5"
                      >
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </div>

        <div className="w-[80%] mt-7 bg-white shadow-md p-7 pt-5 flex rounded-[10px]">
          <div className="w-[90%] flex-col">
            <h1 className="text-2xl font-semibold">Skills</h1>
            <hr className="mt-5 mb-3" />
            <div className="mt-6">
              <h3 className="font-semibold">Expert</h3>
              <div className="mt-3 ml-1 flex gap-x-4">
                <span className="py-[4px] px-[12px] rounded-[20px] bg-[#F7F7F7] shadow">
                  React
                </span>
                <span className="py-[4px] px-[12px] rounded-[20px] bg-[#F7F7F7] shadow">
                  ASP.NET
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold">Advanced</h3>
              <div className="mt-3 ml-1 flex gap-x-4">
                <span className="py-[4px] px-[12px] rounded-[20px] bg-[#F7F7F7] shadow">
                  React
                </span>
                <span className="py-[4px] px-[12px] rounded-[20px] bg-[#F7F7F7] shadow">
                  ASP.NET
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold">Proficient</h3>
              <div className="mt-3 ml-1 flex gap-x-4">
                <span className="py-[4px] px-[12px] rounded-[20px] bg-[#F7F7F7] shadow">
                  React
                </span>
                <span className="py-[4px] px-[12px] rounded-[20px] bg-[#F7F7F7] shadow">
                  ASP.NET
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Intermediate</h3>
              <div className="mt-3 ml-1 flex gap-x-4">
                <span className="py-[4px] px-[12px] rounded-[20px] bg-[#F7F7F7] shadow">
                  React
                </span>
                <span className="py-[4px] px-[12px] rounded-[20px] bg-[#F7F7F7] shadow">
                  ASP.NET
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Beginner</h3>
              <div className="mt-3 ml-1 flex gap-x-4">
                <span className="py-[4px] px-[12px] rounded-[20px] bg-[#F7F7F7] shadow">
                  React
                </span>
                <span className="py-[4px] px-[12px] rounded-[20px] bg-[#F7F7F7] shadow">
                  ASP.NET
                </span>
              </div>
            </div>
          </div>
          <div className="w-[10%] flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-6 cursor-pointer"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="hs-scale-animation-modal-skills"
              data-hs-overlay="#hs-scale-animation-modal-skills"
            >
              <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z" />
            </svg>
          </div>
        </div>
      </div>

      <div
        id="hs-scale-animation-modal"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="hs-scale-animation-modal-label"
      >
        <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h2
                id="hs-scale-animation-modal-label"
                className="font-bold text-gray-800 text-[18px]"
              >
                Personal Information
              </h2>
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                aria-label="Close"
                data-hs-overlay="#hs-scale-animation-modal"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex flex-col justify-center items-center">
              <div className="w-full flex justify-center flex-col items-center">
                <div className="size-[120px] border-[3px] border-white bg-gray-200 rounded-full shadow-lg"></div>

                <div className="flex justify-center items-center w-[40%] mt-3">
                  <div className="w-[50%] flex items-center justify-center cursor-pointer">
                    <FontAwesomeIcon
                      icon={faCamera}
                      className="size-4 mr-1 text-gray-700"
                    />
                    Edit
                  </div>
                  <div className="w-[50%] flex items-center justify-center cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="size-4 inline-block mr-1"
                    >
                      <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                    </svg>
                    Delete
                  </div>
                </div>
              </div>
              <div className="w-full mt-6">
                <form className="flex flex-col gap-3">
                  <div className="relative">
                    <input
                      type="text"
                      className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2"
                      placeholder="Full name"
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

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <select
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                      </select>

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
                </form>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-overlay="#hs-scale-animation-modal"
              >
                Close
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Skills */}
      <div
        id="hs-scale-animation-modal-skills"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-y-auto overflow-x-hidden pointer-events-none"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="hs-scale-animation-modal-label-skills"
      >
        <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 lg:w-[50%] sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h3
                id="hs-scale-animation-modal-label-skills"
                className="font-bold text-gray-800 text-[18px]"
              >
                Skills
              </h3>
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                aria-label="Close"
                data-hs-overlay="#hs-scale-animation-modal-skills"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex flex-col justify-center items-center">
              {/* <div className="w-full flex justify-center flex-col items-center">
                <div className="size-[120px] border-[3px] border-white bg-gray-200 rounded-full shadow-lg"></div>

                <div className="flex justify-center items-center w-[40%] mt-3">
                  <div className="w-[50%] flex items-center justify-center cursor-pointer">
                    <FontAwesomeIcon
                      icon={faCamera}
                      className="size-4 mr-1 text-gray-700"
                    />
                    Edit
                  </div>
                  <div className="w-[50%] flex items-center justify-center cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="size-4 inline-block mr-1"
                    >
                      <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                    </svg>
                    Delete
                  </div>
                </div>
              </div> */}
              <div className="w-full mt-6">
                <form className="">
                  <div className="flex gap-3">
                    <Select
                      options={skills}
                      placeholder="Search skills"
                      className="w-[50%]"
                    />

                    <Select
                      options={levels}
                      placeholder="Select level"
                      className="w-[30%]"
                    />
                    <div
                      className="flex items-center justify-center cursor-pointer border border-[red] py-3 rounded-md w-[20%] text-red-500 font-semibold hover:bg-red-50"
                      onClick={() => {
                        console.log("OK");
                      }}
                    >
                      Add
                    </div>
                  </div>
                </form>
                <div className="mt-6">
                  <h3 className="font-semibold">Expert</h3>
                  <div className="mt-3 ml-1 flex gap-x-4">
                    <span className="flex items-center py-[4px] px-[12px] rounded-[20px] border border-[#aeaeae] hover:border-black cursor-pointer">
                      React
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="size-[15px] inline-block ml-1 fill-slate-500 hover:fill-slate-800"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </span>
                    <span className="flex items-center py-[4px] px-[12px] rounded-[20px] border border-[#aeaeae] hover:border-black cursor-pointer">
                      ASP.NET
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="size-[15px] inline-block ml-1 fill-slate-500 hover:fill-slate-800"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold">Advanced</h3>
                  <div className="mt-3 ml-1 flex gap-x-4">
                    <span className="flex items-center py-[4px] px-[12px] rounded-[20px] border border-[#aeaeae] hover:border-black cursor-pointer">
                      React
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="size-[15px] inline-block ml-1 fill-slate-500 hover:fill-slate-800"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </span>
                    <span className="flex items-center py-[4px] px-[12px] rounded-[20px] border border-[#aeaeae] hover:border-black cursor-pointer">
                      ASP.NET
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="size-[15px] inline-block ml-1 fill-slate-500 hover:fill-slate-800"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold">Proficient</h3>
                  <div className="mt-3 ml-1 flex gap-x-4">
                    <span className="flex items-center py-[4px] px-[12px] rounded-[20px] border border-[#aeaeae] hover:border-black cursor-pointer">
                      React
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="size-[15px] inline-block ml-1 fill-slate-500 hover:fill-slate-800"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </span>
                    <span className="flex items-center py-[4px] px-[12px] rounded-[20px] border border-[#aeaeae] hover:border-black cursor-pointer">
                      ASP.NET
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="size-[15px] inline-block ml-1 fill-slate-500 hover:fill-slate-800"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold">Intermediate</h3>
                  <div className="mt-3 ml-1 flex gap-x-4">
                    <span className="flex items-center py-[4px] px-[12px] rounded-[20px] border border-[#aeaeae] hover:border-black cursor-pointer">
                      React
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="size-[15px] inline-block ml-1 fill-slate-500 hover:fill-slate-800"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </span>
                    <span className="flex items-center py-[4px] px-[12px] rounded-[20px] border border-[#aeaeae] hover:border-black cursor-pointer">
                      ASP.NET
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="size-[15px] inline-block ml-1 fill-slate-500 hover:fill-slate-800"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold">Beginner</h3>
                  <div className="mt-3 ml-1 flex gap-x-4">
                    <span className="flex items-center py-[4px] px-[12px] rounded-[20px] border border-[#aeaeae] hover:border-black cursor-pointer">
                      React
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="size-[15px] inline-block ml-1 fill-slate-500 hover:fill-slate-800"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </span>
                    <span className="flex items-center py-[4px] px-[12px] rounded-[20px] border border-[#aeaeae] hover:border-black cursor-pointer">
                      ASP.NET
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="size-[15px] inline-block ml-1 fill-slate-500 hover:fill-slate-800"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-overlay="#hs-scale-animation-modal-skills"
              >
                Close
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;