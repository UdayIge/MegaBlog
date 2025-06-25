import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  const linkProps = {
    className: "text-base text-gray-900 hover:text-blue-700 dark:text-gray-200"
  };

  return (
    <section className="w-full relative overflow-hidden py-10 border-t-2 border-t-black bg-white  dark:bg-gray-900">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width='90px' /> 
              </div>
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-base font-semibold uppercase text-gray-500 dark:text-white">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <Link {...linkProps} to="/">
                    Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link {...linkProps} to="/">
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link {...linkProps} to="/">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link {...linkProps} to="/">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-base font-semibold uppercase text-gray-500 dark:text-white">
                Support
              </h3>
              <ul>
                <li className="mb-2">
                  <Link {...linkProps} to="/">
                    Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link {...linkProps} to="/">
                    Help
                  </Link>
                </li>
                <li className="mb-2">
                  <Link {...linkProps} to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link {...linkProps} to="/">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-base font-semibold uppercase text-gray-500 dark:text-white">
                Legals
              </h3>
              <ul>
                <li className="mb-2">
                  <Link {...linkProps} to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link {...linkProps} to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link {...linkProps} to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer