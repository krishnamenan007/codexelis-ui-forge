import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import ReactCountryFlag from "react-country-flag";

const SterlingPetroleum = () => {
  const project = {
    id: 0,
    name: "Sterling Petroleum",
    image: "/lovable-uploads/sterling.png",
    country: "GB",
    countryName: "United Kingdom",
    countryColor: "bg-green-500",
    bgGradient: "from-purple-500/20 to-purple-600/30",
    iconBg: "bg-purple-600",
    title: "Sterling Petroleum Website & Management System",
    description: "Complete web platform with advanced management system for petroleum operations in the UK.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    liveUrl: "https://www.sterlingpetroleum.co.uk/",
    longDescription: "A comprehensive web platform designed specifically for Sterling Petroleum's operations in the United Kingdom. This project includes an advanced management system that handles petroleum operations, inventory tracking, customer management, and reporting capabilities. The system provides real-time data analytics and secure access controls for different user roles within the organization."
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
                <p className="text-muted-foreground">Web Development & Management System</p>
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

export default SterlingPetroleum; 