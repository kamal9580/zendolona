import React from "react";
import { helpData } from "../../data/helpdata";
import Image from "next/image";

const Help = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">

        <div className="flex justify-center ">

          <Image src="/map-logo.svg" 
          alt="Map Logo"
           width={250} height={250}
           className=" "
      
       tabIndex={-1} />

       </div>
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{helpData.title}</h1>

     
      <p className="text-gray-700 mb-6">{helpData.description}</p>

     
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contents</h2>
      <ul className="list-disc list-inside text-gray-600">
        {helpData.contents.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Feature List */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">{helpData.feature_list.title}</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {helpData.feature_list.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Opening the Map */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">{helpData.opening_map.title}</h2>
        <p className="text-gray-700 mt-2">{helpData.opening_map.description}</p>
      </section>

      {/* Search */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">{helpData.search.title}</h2>
        <p className="text-gray-700 mt-2">{helpData.search.description}</p>
      </section>

      {/* Movement */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">{helpData.movement.title}</h2>
        <p className="text-gray-700 mt-2">{helpData.movement.description}</p>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {helpData.movement.controls.map((control, index) => (
            <li key={index}>{control}</li>
          ))}
        </ul>
      </section>

      {/* Zooming */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">{helpData.zooming.title}</h2>
        <p className="text-gray-700 mt-2">{helpData.zooming.description}</p>
        <p className="font-semibold mt-2">Control: {helpData.zooming.control}</p>
      </section>

      {/* Inbound Navigation */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">{helpData.inbound_navigation.title}</h2>
        <p className="text-gray-700 mt-2">{helpData.inbound_navigation.description}</p>
      </section>

      {/* Adjustable Pointer */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">{helpData.adjustable_pointer.title}</h2>
        <p className="text-gray-700 mt-2">{helpData.adjustable_pointer.description}</p>
      </section>

      {/* Distance Finder */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">{helpData.distance_finder.title}</h2>
        <p className="text-gray-700 mt-2">{helpData.distance_finder.description}</p>
      </section>

      {/* Credits */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">{helpData.credits.title}</h2>
        
        <h3 className="text-xl font-semibold mt-4">Developers</h3>
        <ul className="list-disc list-inside text-gray-600">
          {helpData.credits.developers.map((dev, index) => (
            <li key={index}>{dev}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-4">Mentors</h3>
        <ul className="list-disc list-inside text-gray-600">
          {helpData.credits.mentors.map((mentor, index) => (
            <li key={index}>{mentor}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-4">Testers</h3>
        <ul className="list-disc list-inside text-gray-600">
          {helpData.credits.testers.map((tester, index) => (
            <li key={index}>{tester}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Help;
