import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { useState } from "react";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>
          Tailwind Starter Template - Landing Page Template: Tailwind Toolbox
        </title>
        <meta name="description" content="Simple landind page" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
      </Head>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal cursor-pointer">
        <label className="modal-box" htmlFor="">
          <div className="tails-selected-element xs:shadow-md h-auto w-full flex-col overflow-hidden rounded-lg bg-white md:relative md:flex md:flex-row md:overflow-visible md:rounded-none md:bg-transparent">
            <a
              href="#_"
              className="block inline-flex h-16 w-auto items-center px-6 text-xl font-black leading-none text-gray-900 md:hidden"
            >
              tails<span className="text-indigo-600">.</span>
            </a>
            <div className="flex w-full flex-col items-start justify-center space-x-6 text-center md:mt-0 md:w-2/3 md:flex-row md:items-center lg:space-x-8">
              <a
                href="#_"
                className="mx-0 ml-6 inline-block w-full py-2 text-left font-medium text-indigo-600 md:mx-2 md:ml-0 md:w-auto md:px-0 md:text-center lg:mx-3"
              >
                Home
              </a>
              <a
                href="#_"
                className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3"
              >
                Features
              </a>
              <a
                href="#_"
                className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3"
              >
                Message
              </a>
              <a
                href="#_"
                className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3"
              >
                Blog
              </a>
              <a
                href="#_"
                className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3"
              >
                Contact
              </a>
              <a
                href="#_"
                className="absolute left-0 top-0 ml-10 mr-2 mt-6 hidden py-2 text-gray-600 md:relative md:ml-2 md:mt-0 lg:mx-3 lg:inline-block"
              >
                <svg
                  className="inline h-5 w-5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </a>
            </div>
            <div className="flex w-full flex-col items-start justify-end pt-4 md:w-1/3 md:flex-row md:items-center md:py-0">
              <a
                href="#"
                className="mr-0 w-full px-3 py-2 text-gray-700 md:mr-2 md:w-auto lg:mr-3"
              >
                Sign In
              </a>
              <a
                href="#_"
                className="inline-flex w-full items-center bg-indigo-600 px-6 py-3 text-sm font-medium leading-4 text-white hover:bg-indigo-500 focus:outline-none focus:ring-0 focus:ring-indigo-600 focus:ring-offset-2 md:w-auto md:rounded-full md:px-3 md:focus:ring-2 lg:px-5"
              >
                Sign Up
              </a>
            </div>
          </div>
        </label>
      </label>
      <main>
        <section className="tails-selected-element w-full bg-white px-6 pb-12 antialiased">
          <div className="mx-auto max-w-7xl">
            <nav className="relative z-50 h-24 select-none">
              <div className="container relative mx-auto flex h-24 flex-wrap items-center justify-between overflow-hidden border-b border-gray-200 font-medium sm:px-4 md:overflow-visible md:px-2 lg:justify-center lg:px-0">
                <div className="flex h-full w-1/4 items-center justify-start pr-4">
                  <a href="#_" className="inline-block py-4 md:py-0">
                    <span className="p-1 text-xl font-black leading-none text-gray-900">
                      DQP.
                    </span>
                  </a>
                </div>
                <div
                  className={`left-0 top-0 hidden h-full w-full items-start bg-gray-900 bg-opacity-50 p-4 text-sm md:absolute md:relative md:flex md:w-3/4 md:items-center md:bg-transparent md:p-0 lg:text-base ${
                    showMenu ? "fixed flex" : "hidden"
                  }`}
                  style={{ zIndex: 100 }}
                >
                  <div className="h-auto w-full flex-col overflow-hidden rounded-lg bg-white md:relative md:flex md:flex-row md:overflow-visible md:rounded-none md:bg-transparent">
                    <a
                      href="#_"
                      className="block inline-flex h-16 w-auto items-center px-6 text-xl font-black leading-none text-gray-900 md:hidden"
                    >
                      DQP<span className="text-indigo-600">.</span>
                    </a>
                    <div className="flex w-full flex-col items-start justify-center space-x-6 text-center md:mt-0 md:w-2/3 md:flex-row md:items-center lg:space-x-8">
                      <a
                        href="#_"
                        className="mx-0 ml-6 inline-block w-full py-2 text-left font-medium text-indigo-600 md:mx-2 md:ml-0 md:w-auto md:px-0 md:text-center lg:mx-3"
                      >
                        Home
                      </a>
                      <a
                        href="#_"
                        className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3"
                      >
                        Features
                      </a>
                      <a
                        href="#_"
                        className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3"
                      >
                        Message
                      </a>
                      <a
                        href="#_"
                        className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3"
                      >
                        Blog
                      </a>
                      <a
                        href="#_"
                        className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3"
                      >
                        Contact
                      </a>
                      <a
                        href="#_"
                        className="absolute left-0 top-0 ml-10 mr-2 mt-6 hidden py-2 text-gray-600 md:relative md:ml-2 md:mt-0 lg:mx-3 lg:inline-block"
                      >
                        <svg
                          className="inline h-5 w-5"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="flex w-full flex-col items-start justify-end pt-4 md:w-1/3 md:flex-row md:items-center md:py-0">
                      <a
                        href="#"
                        className="mr-0 w-full px-3 py-2 text-gray-700 md:mr-2 md:w-auto lg:mr-3"
                      >
                        Sign In
                      </a>
                      <a
                        href="#_"
                        className="inline-flex w-full items-center bg-indigo-600 px-6 py-3 text-sm font-medium leading-4 text-white hover:bg-indigo-500 focus:outline-none focus:ring-0 focus:ring-indigo-600 focus:ring-offset-2 md:w-auto md:rounded-full md:px-3 md:focus:ring-2 lg:px-5"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>

                <label
                  onClick={toggleShowMenu}
                  htmlFor="my-modal"
                  className="absolute right-0 flex h-10 w-10 cursor-pointer flex-col items-end items-center justify-center rounded-full bg-white hover:bg-gray-100 md:hidden"
                >
                  <svg
                    className="h-6 w-6 text-gray-700"
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{
                      display: !showMenu ? "block" : "none",
                    }}
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                  <svg
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: showMenu ? "block" : "none",
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </label>
              </div>
            </nav>

            <div className="container mx-auto mt-px max-w-lg px-4 py-32 text-left md:max-w-none md:text-center">
              <h1 className="text-left text-5xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none md:text-center md:text-6xl lg:text-7xl">
                <span className="inline md:block">Start Crafting Your</span>{" "}
                <span className="relative mt-2 bg-gradient-to-br from-indigo-600 to-indigo-500 bg-clip-text text-transparent md:inline-block">
                  Next Great Idea
                </span>
              </h1>
              <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
                Simplifying the creation of landing pages, blog pages,
                application pages and so much more!
              </div>
              <div className="mt-12 flex flex-col items-center text-center">
                <span className="relative inline-flex w-full md:w-auto">
                  <a
                    href="#_"
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-indigo-600 px-8 py-4 text-base font-bold leading-6 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 md:w-auto"
                  >
                    {" "}
                    Join Now{" "}
                  </a>
                </span>
                <a href="#_" className="mt-3 text-sm text-indigo-500">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="min-w-screen animation-fade animation-delay tails-selected-element relative bg-white py-16">
        <div className="container mx-auto px-0 px-8 sm:px-12 xl:px-5">
          <p
            className="sm:text-normal text-left text-xs font-bold uppercase text-pink-500 sm:mx-6 sm:text-center sm:font-bold"
            data-primary="pink-500"
          >
            Got a Question? We’ve got answers.
          </p>
          <h3 className="mt-1 text-left text-2xl font-bold text-gray-800 sm:mx-0 sm:mx-6 sm:text-center sm:text-3xl md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h3>
          <div
            className="mx-auto mt-10 w-full rounded-lg border border-gray-200 bg-white px-6 py-6 sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3"
            data-rounded="rounded-lg"
            data-rounded-max="rounded-full"
          >
            <h3
              className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl"
              data-primary="purple-500"
            >
              How does it work?
            </h3>
            <p className="md:text-normal mt-2 text-base text-gray-600 sm:text-lg">
              Our platform works with your content to provides insights and
              metrics on how you can grow your business and scale your
              infastructure.
            </p>
          </div>
          <div
            className="mx-auto mt-10 w-full rounded-lg border border-gray-200 bg-white px-6 py-6 sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3"
            data-rounded="rounded-lg"
            data-rounded-max="rounded-full"
          >
            <h3
              className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl"
              data-primary="purple-500"
            >
              Do you offer team pricing?
            </h3>
            <p className="md:text-normal mt-2 text-base text-gray-600 sm:text-lg">
              Yes, we do! Team pricing is available for any plan. You can take
              advantage of 30% off for signing up for team pricing of 10 users
              or more.
            </p>
          </div>
          <div
            className="mx-auto mt-10 w-full rounded-lg border border-gray-200 bg-white px-6 py-6 sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3"
            data-rounded="rounded-lg"
            data-rounded-max="rounded-full"
          >
            <h3
              className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl"
              data-primary="purple-500"
            >
              How do I make changes and configure my site?
            </h3>
            <p className="md:text-normal mt-2 text-base text-gray-600 sm:text-lg">
              You can easily change your site settings inside of your site
              dashboard by clicking the top right menu and clicking the settings
              button.
            </p>
          </div>
          <div
            className="mx-auto mt-10 w-full rounded-lg border border-gray-200 bg-white px-6 py-6 sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3"
            data-rounded="rounded-lg"
            data-rounded-max="rounded-full"
          >
            <h3
              className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl"
              data-primary="purple-500"
            >
              How do I add a custom domain?
            </h3>
            <p className="md:text-normal mt-2 text-base text-gray-600 sm:text-lg">
              You can easily change your site settings inside of your site
              dashboard by clicking the top right menu and clicking the settings
              button.
            </p>
          </div>
        </div>
      </section>
      <section className="body-font tails-selected-element bg-white text-gray-700">
        <div className="container mx-auto flex max-w-7xl flex-col items-center px-8 py-8 sm:flex-row">
          <a
            href="#_"
            className="logo select-none text-xl font-black leading-none text-gray-900"
          >
            DQP<span className="text-indigo-600">.</span>
          </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l sm:border-gray-200 sm:pl-4">
            © 2021 DQP - Peer to Peer Quantum Proof Messaging
          </p>
          <span className="mt-4 inline-flex justify-center space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Dribbble</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
