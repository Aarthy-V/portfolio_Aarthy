"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id:1,
        title: "Medical center appointment",
        description: "HTML, CSS, PHP",
        image: "/images/projects/bookappointment.jpg",
        tag: ["All", "Web"],
        giturl: "/"
    },
    {
        id:2,
        title: "Course registration",
        description: "AR section",
        image: "/images/projects/reg.jpeg",
        tag: ["All", "Web"],
        giturl: "/"
    },
    {
        id:3,
        title: "SCZ",
        description: "Machine learning",
        image: "/images/projects/scz.png",
        tag: ["All", "ML"],
        giturl: "/"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project)=>
        project.tag.includes(tag)
    );

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4'> 
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag==="All"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Web" 
                    isSelected={tag==="Web"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="ML" 
                    isSelected={tag==="ML"}
                />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project)=> (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgurl={project.image}
                        giturl={project.giturl}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectsSection