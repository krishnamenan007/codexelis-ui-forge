import React from 'react';
import { Settings, Smartphone, Globe, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import ReactCountryFlag from "react-country-flag";
import { Link } from 'react-router-dom';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      name: "Sterling Petroleum",
      image: "/lovable-uploads/sterling.png",
      country: "GB",
      countryName: "United Kingdom",
      countryColor: "bg-green-500",
      bgGradient: "from-purple-500/20 to-purple-600/30",
      iconBg: "bg-purple-600",
      title: "Sterling Petroleum Website & Management System",
      description: "Complete advance daily log management system for daily petroleum operations in UK and landing website.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      liveUrl: "https://www.sterlingpetroleum.co.uk/"
    },
    {
      name: "Mathan Electronics",
      image: "/lovable-uploads/mathanelec.png",
      country: "NZ",
      countryName: "New Zealand",
      countryColor: "bg-blue-500",
      bgGradient: "from-purple-500/20 to-purple-600/30",
      iconBg: "bg-purple-600",
      title: "Mathan Electronics Platform & Management",
      description: "Complete advance Repair job and employee management system for daily job tracking and landing website",
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe"],
      liveUrl: "https://mathanelectronics.nz/"
    },
    {
      name: "Arcspazia",
      image: "/lovable-uploads/arcspazia.png",
      country: "LK",
      countryName: "Sri Lanka",
      countryColor: "bg-orange-500",
      bgGradient: "from-purple-500/20 to-purple-600/30",
      iconBg: "bg-purple-600",
      title: "Arcspazia Website & Search Engine Optimization",
      description: "A visually immersive corporate website that reflects Arcspazia’s design philosophy and a responsive layout to engage a global audience.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      liveUrl: "https://arcspazia.com/"
    }
  ];

  const stats = [
    { number: "10+", label: "Completed Projects" },
    { number: "5+", label: "Countries" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight font-title">
            OUR PROJECTS PORTFOLIO
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've successfully delivered 10+ innovative projects for clients across England, New Zealand, and globally. 
            Here are some of our featured works showcasing our expertise in web development and management systems.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-[#8A0C1E] mb-2">{stat.number}</div>
              <p className="text-[#000D4C] font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className={`relative h-90 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center`}>
              
                 
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                 
                  {/* <p className={`font-semibold ${project.iconBg === 'bg-blue-600' ? 'text-blue-700' : project.iconBg === 'bg-emerald-600' ? 'text-emerald-700' : 'text-purple-700'}`}>
                    {project.name}
                  </p> */}
              
                <div className="absolute top-4 right-4">
                  <div className= "p-1 rounded-full">
                    <ReactCountryFlag
                      countryCode={project.country}
                      svg
                      style={{
                          width: '2em',
                          height: '2em',
                      }}
                      title={project.countryName}
                    />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <Link to={`/project/${index}`} className="block">
                  <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">{project.title}</h3>
                </Link>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary/10 text-[#8A0C1E] px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-row gap-2">
              {project.name !== "Arcspazia" && (
                <Button variant="outline" size="sm" asChild>
                  <a href={`/project/${index}`} rel="noopener noreferrer">
                    View Portfolio <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              )}
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live Site <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
             
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 