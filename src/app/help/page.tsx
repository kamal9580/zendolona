import React from 'react';
import { helpData } from '../../data/helpdata';
import Image from 'next/image';

const Help = () => {
  return (
    <div className='p-2 max-w-4xl mx-auto '>
      {/* Logo */}
      <div className='flex justify-center'>
        <Image
          src='/map-logo.svg'
          alt='Map Logo'
          width={250}
          height={250}
         
        />
      </div>

      {/* Title & Description */}
      <h1 className='text-6xl font-bold mb-4 mt-5 w-full text-center'>
        <p className='w-auto'>
        {helpData.title}

        </p>
        </h1>
      <div className='mt-19'></div>
      <p className='text-gray-700 mb-6 text-2xl'>{helpData.description}</p>

      {/* Contents with Anchor Links */}
      <h2 className='text-3xl font-semibold mt-10 mb-2'>Contents</h2>
      <hr className='border-t-4 border-black my-4' />
      <ul className='list-disc list-inside text-gray-600 text-2xl'>
        {helpData.contents.map((item, index) => (
          <li key={index}>
            <a href={`${item.key}`} className='text-blue-500 hover:underline'>
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Sections */}
      {helpData.sections.map((section, index) => (
        <section key={index} id={section.key} className='mt-8'>
          <h2 className='text-3xl font-semibold'>{section.title}</h2>
          <hr className='border-t-4 border-black my-4' />
          {section.description && (
            <p className='text-gray-700 text-2xl mt-2'>{section.description}</p>
          )}
          {section.img && (
            <div className='flex justify-center mt-4'>
              <Image src={section.img} alt='Map' width={800} height={800} />
            </div>
          )}
         {section.features && (
  <ul className="list-disc list-outside mt-2 text-gray-600 text-2xl w-full pl-5">
    {section.features.map((feature, idx) => (
      <li key={idx}>{feature}</li>
    ))}
  </ul>
)}

          {section.controls && (
            <ul className='list-disc list-inside mt-2 text-gray-600 text-2xl pl-5'>
              {section.controls.map((control, idx) => (
                <li key={idx}>{control}</li>
              ))}
            </ul>
          )}

          <div className='mt-4 flex flex-row justify-center gap-x-32 w-full'>
            {section.control && (
              <p className='font-semibold'>Control: {section.control}</p>
            )}

            {section.developers && (
              <div className='ml-4' w-full>
                <h3 className='text-xl font-semibold'>Developers</h3>
                <ul className='list-disc list-inside text-gray-600'>
                  {section.developers.map((dev, idx) => (
                    <li key={idx}>{dev}</li>
                  ))}
                </ul>
              </div>
            )}

            {section.mentors && (
              <div className='ml-4' w-full>
                <h3 className='text-xl font-semibold'>Mentors</h3>
                <ul className='list-disc list-inside text-gray-600'>
                  {section.mentors.map((mentor, idx) => (
                    <li key={idx}>{mentor}</li>
                  ))}
                </ul>
              </div>
            )}

            {section.testers && (
              <div className='ml-4' w-full>
                <h3 className='text-xl font-semibold'>Testers</h3>
                <ul className='list-disc list-inside text-gray-600'>
                  {section.testers.map((tester, idx) => (
                    <li key={idx}>{tester}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Go to Top Button */}

          <div className='mt-6 flex justify-center'>
            <a href='' className='w-full'>
              <button className='w-full bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded'>
                Go to Top
              </button>
            </a>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Help;
