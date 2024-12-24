import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

function Footer() {
    return (
        <footer className="bg-dark-blue border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex item-center">
                            <img src={logo} alt="logo" className="mr-3 h-16" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow Us</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/CodeWithPiyush0" className="hover:underline" target="_blank" rel="noreferrer">GitHub</a>
                                </li>
                                <li>
                                    <a href='https://www.linkedin.com/in/piyush-kumar-9b9618289' className="hover:underline">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow Us</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center">© 2025
                        <a href="#" className="hover:underline">
                            CodeWithPiyush
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">

                        <a href='https://www.linkedin.com/in/piyush-kumar-9b9618289/' className="text-white hover:text-gray-300">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.227.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.728V1.727C24 .774 23.21 0 22.23 0ZM7.2 20.452H3.64V9h3.56v11.452ZM5.42 7.548A2.07 2.07 0 1 1 5.419 3.41a2.07 2.07 0 0 1 0 4.138ZM20.452 20.452H16.88v-5.65c0-1.348-.027-3.086-1.88-3.086-1.88 0-2.17 1.466-2.17 2.98v5.756H9.26V9h3.42v1.56h.048c.478-.907 1.646-1.862 3.39-1.862 3.63 0 4.3 2.39 4.3 5.494v6.26Z" />
                            </svg>
                            <span className="sr-only">LinkedIn Profile</span>
                        </a>

                        <a href='https://www.hackerrank.com/profile/piyushpk835' className="text-white hover:text-gray-300">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M11.998 0 3.064 6v12l8.934 6 8.934-6V6L11.998 0zm2.518 16.721-2.482 1.855-2.515-1.855v-3.778l-2.452-1.83 2.452-1.831V6.334l2.515-1.856 2.482 1.856v3.778l2.452 1.831-2.452 1.83v3.778z" />
                            </svg>
                            <span className="sr-only">HackerRank Profile</span>
                        </a>


                        <a href="#" className="text-white hover:text-gray-300">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter Page</span>
                        </a>
                        <a href='https://github.com/CodeWithPiyush0' className="text-white hover:text-gray-300">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href='https://leetcode.com/u/Piyush_00/' className="text-white hover:text-gray-300">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 48 48"
                            >
                                <path d="M24.335 42.662c-5.874-.002-10.68-2.056-14.328-6.116-2.572-2.891-3.93-6.38-4.016-10.308-.088-3.942 1.18-7.44 4.146-10.53 2.573-2.675 5.884-4.535 9.31-5.647 2.195-.728 4.423-1.307 6.674-1.86 3.088-.757 6.146-1.578 8.882-2.98 1.4-.724 2.41-1.75 2.83-3.208.284-1.062.302-2.124-.067-3.18-.528-1.49-1.608-2.408-3.17-2.734-2.067-.425-4.077.092-5.86 1.43-.553.406-1.053.882-1.633 1.355-1.352 1.095-3.18.42-3.637-1.25-.32-1.247-.165-2.343.736-3.305.916-.977 1.94-1.885 3.088-2.566C26.728.457 28.858-.04 31.063.003c4.093.08 7.573 1.697 10.034 4.872 1.693 2.124 2.72 4.526 3.174 7.18.43 2.535.07 5.022-1.037 7.396-1.005 2.187-2.606 4.02-4.662 5.307-2.172 1.34-4.58 2.28-6.996 3.115-2.06.69-4.12 1.366-6.146 2.128-3.05 1.107-5.962 2.408-8.64 4.19-1.297.87-2.382 1.944-3.12 3.3-.747 1.366-.79 2.76-.144 4.14.516 1.084 1.32 1.877 2.466 2.296 1.4.49 2.736.33 4.014-.33.738-.38 1.405-.907 2.087-1.415 1.296-1.046 3.085-.482 3.552 1.16.342 1.25.01 2.41-.71 3.38-.964 1.28-2.29 2.3-3.648 3.25-2.02 1.414-4.284 2.263-6.87 2.63-1.08.165-2.174.23-3.26.282z" />
                            </svg>
                            <span className="sr-only">LeetCode Profile</span>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer