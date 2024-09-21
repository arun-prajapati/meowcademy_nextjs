import StatisticsCard from "@/components/StatisticsCard"

const StatisticSection = ({homePage}:{homePage:any}) => {
  return (
    <>
     {homePage?.[0]?.heading?.map((heading:any) => (
        <section className="container mt-24" key={heading.id}>
          <div className="text-center">
            <h6 className="text-primaryBlue text-lg font-bold mb-5">
              {heading.title}
            </h6>
            <h3 className="font-bold text-2xl md:text-4xl mb-7">
              {heading.description}
            </h3>
            <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {heading?.about_us?.map((about:any) => (
                <StatisticsCard
                key={about.id}
                  count={about.name}
                  text={about.description}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default StatisticSection
