import Link from '@/components/Link'

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <Link
          href="/blog"
          className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          role="alert"
        >
          <br />
          <span className="bg-primary-700 mr-3 rounded-full px-4 py-1.5 text-xs text-white">
            New
          </span>{' '}
          <span className="text-sm font-medium">Checkout our latest blog posts</span>
          <svg
            className="ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <h1 className="mb-4 text-4xl leading-none font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Ninefold Solutions is a{' '}
          <span
            className="bg-primary-700 m-0 rounded-lg bg-clip-text p-0 text-transparent"
            id="typer"
          >
            Ruby on Rails
          </span>
          <span className="blink text-primary-700 font-extrabold" style={{ visibility: 'hidden' }}>
            |
          </span>{' '}
          consulting company
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-700 sm:px-16 lg:text-xl xl:px-48 dark:text-gray-300">
          Whether you're a startup looking to launch your MVP or an established company seeking to
          enhance your existing Ruby on Rails application, we have the expertise to help you
          succeed.
        </p>
        <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href="/about"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
          >
            Talk to us
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
