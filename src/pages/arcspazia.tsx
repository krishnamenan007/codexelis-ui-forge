import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import ReactCountryFlag from "react-country-flag";

const Arcspazia = () => {
  const project = {
    id: 2,
    name: "Arcspazia",
    image: "/lovable-uploads/arcspazia.png",
    country: "LK",
    countryName: "Sri Lanka",
    countryColor: "bg-orange-500",
    bgGradient: "from-purple-500/20 to-purple-600/30",
    iconBg: "bg-purple-600",
    title: "Arcspazia Corporate Website",
    description: "Modern corporate website with interactive features and responsive design for global reach.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    liveUrl: "https://arcspazia.com/",
    longDescription: "A modern, responsive corporate website designed for Arcspazia with a focus on user experience and global accessibility. The website features interactive elements, smooth animations, and is optimized for search engines. Built with Next.js and TypeScript for performance and maintainability, with deployment on Vercel for optimal global performance."
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        
        {/* Project Hero */}
        <div className="grid lg:grid-cols-1 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <ReactCountryFlag
                countryCode={project.country}
                svg
                style={{
                  width: '2em',
                  height: '2em',
                }}
                title={project.countryName}
              />
              <span className="text-sm text-muted-foreground">{project.countryName}</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{project.longDescription}</p>
            <div className="flex gap-4">
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  View Live Site <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-bold text-foreground">Technologies Used</h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Details */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold text-foreground">Project Details</h2>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Client</h3>
                <p className="text-muted-foreground">{project.name}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">{project.countryName}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Project Type</h3>
                <p className="text-muted-foreground">Corporate Website</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Status</h3>
                <p className="text-muted-foreground">Completed & Live</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Arcspazia; 