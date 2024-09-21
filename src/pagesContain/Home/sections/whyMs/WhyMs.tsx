import React from 'react';
import WhyMsCard from '@/components/WhyMsCard';
import { AboutU2} from '@/types/type';


const WhyMs = ({ homePage }:{homePage:AboutU2[]}) => {
  const colors = ["blue", "green", "orange", "red", "purple", "yellow"];

  return (
    <>
      {homePage?.map((section) => (
        <section className="container mt-24" key={section.id}>
          <div>
            <h6 className="text-primaryBlue text-lg font-bold mb-7 text-center">
              {section.title}
            </h6>
            <h3 className="font-bold text-2xl mb-10 text-center mx-auto">
              {section.description}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {section.about_us.map((about, index) => {
                const color = colors[index % colors.length];

                return (
                  <WhyMsCard
                    key={about.id}
                    title={about.name}
                    text={about.description}
                    img={about.image_url}
                    className={`${color}`}
                  />
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default WhyMs;
