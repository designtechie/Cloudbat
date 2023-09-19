import ProjImg from '../assets/Projects.jpg'

const ProjectsSection = () => {
  return (
    <section className="flex items-center p-8">
      <div className="flex-1 pr-8">
        <h2 className="text-white text-6xl font-bold mb-4">Product display sections</h2>
        <p className="text-white mb-6">
          Subtext describing the projects section goes here.<br></br> You can provide more details about your projects in this section.
        </p>
      </div>
      <div className="flex-1">
        <img 
          src={ProjImg} 
          alt="Project Image"
          className="w-full h-auto rounded"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
