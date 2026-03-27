import expertiseFeatures from '@/data/expertiseFeatures'

const ExpertiseSection = () => {
  return (
    <section>
      <div className="bg-white py-8 sm:py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-4xl font-extrabold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              Work with the experts
            </h2>
            <p className="mt-4 text-lg text-pretty text-black dark:text-gray-300">
              Our team has decade of experience with Ruby on Rails development and have a track
              record of building high-quality software.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {expertiseFeatures.map((feature, index) => (
                <div key={`${feature.title}-${index}`} className="flex flex-col">
                  <dt className="text-lg font-extrabold text-gray-900 dark:text-white">
                    <div className="bg-primary-700 dark:bg-primary-500 mb-6 flex size-10 items-center justify-center rounded-lg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-6 text-white"
                      >
                        <path d={feature.iconPath} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base/7 text-black dark:text-gray-400">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection
