import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Modal from 'react-modal';
import { projectItem } from "./../../../data";
import go from './../../../assets/img/go2.svg';
import full from './../../../assets/img/full.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Modal.setAppElement('#root');

export default function ProjectDetiles() {
  
  const { id } = useParams();
  const project = projectItem.find(item => item.id === parseInt(id));

  // استبعاد المشروع الحالي من القائمة
  const otherProjects = projectItem.filter(item => item.id !== parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false);

  // فتح الـ Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // إغلاق الـ Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-col bg-gradient-to-r from-blue-50 via-blue-100 to-white dark:from-[#1E293B] dark:via-[#334155] dark:to-[#0F172A]'>
      <Nav/>
      <div className='mt-32 flex flex-col items-center pt-8 px-16 container mx-auto '>
        <div className='flex flex-col lg:flex-row w-full gap-5'>
          <div className='w-full lg:w-2/4'>
            <div className='relative group'>
              <img className='rounded-3xl w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105' src={project.projectimg} alt={project.projectname} />
              <div className='absolute inset-0 flex gap-14 justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <Link to={project.demoProject}>
                  <img src={go} alt="Go to project" className='w-12 h-12' />
                </Link>
                <button onClick={openModal}>
                  <img src={full} alt="Full Image" className='w-12 h-12' />
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-6 w-full lg:w-2/4'>
            <div className='pr-0 lg:pr-10'>
              <div>
                <div className='flex justify-between items-center'>
                  <h1 className='dark:text-white text-2xl lg:text-4xl font-semibold'>{project.projectname}</h1>
                </div>
              </div>
              <h1 className='text-gray-400 mt-3'>{project.date}</h1>
              <p className='dark:text-gray-300 mt-3'>{project.desc}</p>
            </div>
            <div className=''>
              <h2 className='dark:text-white text-xl lg:text-2xl font-medium mt-4 mb-2'>Basic Languages:</h2>
              <p className='dark:text-gray-300'>{project.technologiesused}</p>
            </div>
            <div>
              <Link to={project.github} className='w-full lg:w-44 h-14 bg-customPurple flex items-center justify-center rounded-2xl text-white'>Github Repo</Link>
            </div>
          </div>
        </div>

        {/* عرض باقي المشاريع */}
        <div className='mt-10 w-full'>
          <h2 className='text-2xl lg:text-3xl font-semibold mb-6 dark:text-white'>Other Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
            {otherProjects.map(el => (
              <div key={el.id} className='flex flex-col gap-10 w-full'>
                <div className='flex flex-col bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative group'>
                  <Link to={`/project-details/${el.id}`} className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <img className='w-full h-48 object-cover' src={el.projectimg} alt={el.projectname} />
                  </Link>
                  <img className='w-full h-48 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105' src={el.projectimg} alt={el.projectname} />
                  <div className='p-4'>
                    <h1 className='font-semibold text-xl mb-2'>{el.projectname}</h1>
                    <div className='bg-gradient-to-r from-customPurple to-violet-500 text-white rounded-2xl p-2 text-center'>
                      <h2 className='text-sm'>{el.technologies}</h2>
                      <h1 className='text-xl'>{el.technologiesused}</h1>
                    </div>
                  </div>
                </div>
                <div className='flex justify-between pt-5'>
                  <h1 className='font-semibold text-2xl dark:text-white'>{el.title}</h1>
                  <Link to={`/project-details/${el.id}`}>
                    <img src={go} alt="Go to details" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>

      {/* Modal لتكبير الصورة */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Full Image Modal"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
      >
        <div className="relative bg-white p-4 rounded-lg">
          <button  className="absolute top-2/4  right-0 m-2">
          <h1 onClick={closeModal}  className="text-4xl text-customPurple"><FontAwesomeIcon icon="fa-solid fa-x" /></h1>
          </button>
          <img className='rounded-lg w-3/4 h-auto' src={project.projectimg} alt={project.projectname} />
        </div>
      </Modal>
    </div>
  );
}