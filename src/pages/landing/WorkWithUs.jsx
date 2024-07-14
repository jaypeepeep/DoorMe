import React from 'react';
import PicCards from '../../components/cards/PicCards';
import icon1 from '../../assets/Icon1.png';
import icon2 from '../../assets/Icon2.png';
import icon3 from '../../assets/Icon3.png';

const WorkWithUs = () => {
  const cardsData = [
      {icon: icon1, title: 'Wide Range of Properties', description: 'We offer a wide range of properties to suit students need.', },
      {icon: icon2, title: 'Listing Your Home', description: 'We list your home in the marketplace for renters to see.',},
      {icon: icon3, title: 'Trusted by Thousands', description: 'We are trusted by thousands of students and alumni.',},
  ];
  return (
    <div className="w-full px-[10%] py-20 flex flex-col  gap-7 justify-center items-center ">
        <div className='flex flex-col gap-1 justify-center items-center'>
            <h1 className="font-montserrat text-center text-4xl font-semibold">
                Why You Should Work With Us
            </h1>
            <p className="font-montserrat text-center text-xl leading-[32px]">
                We showcase housing units to college students.
            </p>
        </div>
        <div className="flex sm:flex-row flex-col justify-center gap-8">
          {cardsData.map((card, index) => (
            <PicCards key={index} icon={card.icon} title={card.title} description={card.description}/>
          ))}
        </div>
    </div>
  )
}

export default WorkWithUs
