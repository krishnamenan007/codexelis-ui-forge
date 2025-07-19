import React from 'react';
import { Settings, Smartphone, Globe, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import ReactCountryFlag from "react-country-flag";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      name: "Sterling Petroleum",
      icon: Settings,
      country: "GB",
      countryName: "United Kingdom",
      countryColor: "bg-green-500",
      bgGradient: "from-purple-500/20 to-purple-600/30",
      iconBg: "bg-purple-600",
      title: "Sterling Petroleum Website & Management System",
      description: "Complete web platform with advanced management system for petroleum operations in the UK.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      liveUrl: "https://www.sterlingpetroleum.co.uk/"
    },
    {
      name: "Mathan Electronics",
      icon: Smartphone,
      country: "NZ",
      countryName: "New Zealand",
      countryColor: "bg-blue-500",
      bgGradient: "from-purple-500/20 to-purple-600/30",
      iconBg: "bg-purple-600",
      title: "Mathan Electronics Platform & Management",
      description: "E-commerce platform with inventory management system for electronics retailer in New Zealand.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe"],
      liveUrl: "https://mathanelectronics.nz/"
    },
    {
      name: "Arcspazia",
      icon: Globe,
      country: "LK",
      countryName: "Sri Lanka",
      countryColor: "bg-orange-500",
      bgGradient: "from-purple-500/20 to-purple-600/30",
      iconBg: "bg-purple-600",
      title: "Arcspazia Corporate Website",
      description: "Modern corporate website with interactive features and responsive design for global reach.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
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
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-title">
            OUR PROJECTS PORTFOLIO
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've successfully delivered 10+ innovative projects for clients across England, New Zealand, and globally. 
            Here are some of our featured works showcasing our expertise in web development and management systems.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#8A0C1E] mb-2">{stat.number}</div>
              <p className="text-[#000D4C] font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className={`relative h-48 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center`}>
                <div className="text-center">
                  <div className={`w-16 h-16 ${project.iconBg} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className={`font-semibold ${project.iconBg === 'bg-blue-600' ? 'text-blue-700' : project.iconBg === 'bg-emerald-600' ? 'text-emerald-700' : 'text-purple-700'}`}>
                    {project.name}
                  </p>
                </div>
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
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live Site <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 