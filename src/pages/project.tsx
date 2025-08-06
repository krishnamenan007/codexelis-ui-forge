import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Globe, Smartphone, Settings, Users, BarChart3, Shield, MessageSquare, Clock, DollarSign, CheckCircle, TrendingUp, Database, Zap, Target, Award, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import ReactCountryFlag from "react-country-flag";

const Project = () => {
  const { id } = useParams();
  
  const projects = [
    {
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
    },
    {
      id: 1,
      name: "Mathan Electronics",
      image: "/lovable-uploads/mathanelec.png",
      showcaseImages: [
        {
          src: "/lovable-uploads/10.webp",
          alt: "Customer Portal Dashboard",
          title: "Customer Portal Dashboard",
          description: "User-friendly interface for customers to submit repair requests and track job progress"
        },
        {
          src: "/lovable-uploads/11.webp",
          alt: "Technician Workflow Management",
          title: "Technician Workflow Management",
          description: "Intelligent job allocation system with real-time status updates and progress tracking"
        },
        {
          src: "/lovable-uploads/12.webp",
          alt: "Analytics & Reporting Dashboard",
          title: "Analytics & Reporting Dashboard",
          description: "Comprehensive business intelligence with performance metrics and financial reporting"
        },
        {
          src: "/lovable-uploads/13.webp",
          alt: "Mobile Responsive Interface",
          title: "Mobile Responsive Interface",
          description: "Optimized mobile experience for technicians and customers on-the-go"
        }
      ],
      country: "NZ",
      countryName: "New Zealand",
      countryColor: "bg-blue-500",
      bgGradient: "from-purple-500/20 to-purple-600/30",
      iconBg: "bg-purple-600",
      title: "Electronic Repair Shop Job Management System",
      description: "Comprehensive digital solution for New Zealand's electronic repair industry",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "SMS Gateway"],
      liveUrl: "https://mathanelectronics.nz/",
      longDescription: "A comprehensive digital solution designed for New Zealand's electronic repair industry, revolutionizing how repair shops manage customer jobs, technician workflows, and business operations through automated job tracking, communication, and reporting capabilities.",
      // Detailed content for Mathan Electronics
      overview: {
        title: "Electronic Repair Shop Job Management System",
        subtitle: "New Zealand Electronics Service Provider",
        description: "A comprehensive digital solution designed for New Zealand's electronic repair industry, revolutionizing how repair shops manage customer jobs, technician workflows, and business operations through automated job tracking, communication, and reporting capabilities."
      },
      keyFeatures: [
        {
          title: "Customer Portal",
          icon: Users,
          features: [
            "Job Creation Interface: User-friendly portal allowing customers to submit repair requests",
            "Device Registration: Comprehensive device cataloging including make, model, serial numbers",
            // "Photo Upload: Visual documentation system for device condition and fault evidence",
            // "Service History: Complete customer service history with previous repairs",
            // "Real-time Tracking: Live job status updates accessible 24/7"
          ]
        },
        {
          title: "Shop Management System",
          icon: Settings,
          features: [
            "Job Acceptance Workflow: Streamlined process for managers to review and quote",
            "Technician Assignment: Intelligent job allocation system matching skills",
            "Workload Management: Visual dashboard showing technician availability",
            "Priority Management: Job prioritization system with urgent repair fast-tracking",
            "Resource Planning: Parts inventory integration with automatic ordering"
          ]
        },
        {
          title: "Job Tracking & Status Management",
          icon: Clock,
          features: [
            "Real-time Status Updates: Live tracking through multiple repair stages",
           // "Progress Documentation: Photo and note capabilities for repair progress",
           // "Time Tracking: Accurate labor time recording for precise cost calculation",
           // "Quality Control: Built-in quality checkpoints ensuring repair standards",
            "Parts Management: Component tracking with cost allocation"
          ]
        },
        {
          title: "Cost Management & Invoicing",
          icon: DollarSign,
          features: [
            "Dynamic Pricing: Flexible pricing structure for different repair types",
            "Cost Breakdown: Detailed cost analysis including labor and parts",
            "Quote Generation: Automated quote creation with customer approval",
            "Invoice Creation: Professional invoice generation with templates",
            //"Payment Processing: Integration with payment gateways"
          ]
        },
        {
          title: "Insurance & Warranty Management",
          icon: Shield,
          features: [
            "Insurance Claims: Automated insurance report generation",
           // "Warranty Tracking: Comprehensive warranty management for repairs",
           // "Compliance Reporting: New Zealand consumer protection compliance",
           // "Claim Documentation: Detailed repair documentation for claims"
          ]
        },
        // {
        //   title: "Communication System",
        //   icon: MessageSquare,
        //   features: [
        //     "Automated Notifications: Email and SMS alerts for status changes",
        //     "Customer Updates: Regular progress communications",
        //     "Manager Alerts: System notifications for urgent jobs",
        //     "Technician Communications: Internal messaging system"
        //   ]
        // },
        {
          title: "Analytics & Reporting",
          icon: BarChart3,
          features: [
            "Job Performance Analytics: Comprehensive metrics on repair times",
            "Technician Performance: Individual performance tracking",
            //"Financial Reporting: Revenue analysis and profit margins",
            //"Customer Analytics: Customer behavior analysis",
            "Operational Insights: Business intelligence dashboards"
          ]
        }
      ],
      technicalArchitecture: {
        systemDesign: [
        //  "Cloud-based Platform: Scalable SaaS solution with 99.9% uptime guarantee",
          "Multi-user Architecture: Role-based access supporting customers, technicians, managers",
          "Mobile-responsive Design: Optimized experience across all devices",
          "Real-time Synchronization: Live data updates ensuring current information"
        ],
        integrations: [
          //"POS System Integration: Seamless connection with existing point-of-sale systems",
         // "Parts Supplier APIs: Direct integration with electronic component suppliers",
          //"Payment Gateway Integration: Support for major New Zealand payment processors",
          "Email Services: Integration with communication platforms",
        //  "Accounting Software: Connection with popular New Zealand accounting systems"
        ]
      },
      // businessImpact: {
      //   operationalEfficiency: [
      //     "Process Automation: Reduced administrative overhead by 65%",
      //     "Job Tracking: Eliminated lost jobs and improved completion rates by 40%",
      //     "Resource Optimization: Improved technician utilization by 35%",
      //     "Communication Efficiency: Reduced customer inquiries by 50%"
      //   ],
      //   customerExperience: [
      //     "Transparency: Complete visibility increasing customer satisfaction by 85%",
      //     "Convenience: 24/7 job submission and tracking",
      //     "Professional Service: Automated communications enhancing service perception",
      //     "Faster Turnaround: Streamlined processes reducing repair time by 30%"
      //   ],
      //   financialPerformance: [
      //     "Revenue Growth: Improved job completion rates contributing to 25% revenue increase",
      //     "Cost Control: Accurate time and parts tracking improving profit margins by 20%",
      //     "Cash Flow: Faster invoicing and payment processing improving cash flow by 40%",
      //     "Insurance Claims: Streamlined claim processing increasing success rate by 60%"
      //   ]
      // },
      keyAchievements: [
        "Successful Deployment: Implemented across multiple New Zealand electronic repair shops",
        "User Adoption: 95% customer portal adoption rate within first month",
        "Performance Metrics: Average job completion time reduced from 10 days to 7 days",
        //"Customer Satisfaction: Net Promoter Score increased by 40 points",
        "Business Growth: Client shops reporting 30% increase in repeat customers"
      ],
   
      roiMetrics: {
        quantifiableBenefits: [
          "Administrative Time Savings: 15 hours per week reduction in manual tasks",
          "Customer Retention: 35% improvement in customer retention rates",
          "Job Completion Rate: 98% job completion rate with systematic tracking",
          "Invoice Processing: 80% reduction in invoice generation time",
          "Insurance Claim Success: 90% success rate on insurance claims"
        ],
        costSavings: [
          "Reduced Phone Calls: 60% reduction in status inquiry calls",
          "Paperwork Elimination: 90% reduction in paper-based documentation",
          "Error Reduction: 75% reduction in job-related errors",
          "Inventory Optimization: 25% reduction in parts inventory carrying costs"
        ]
      }
    },
    {
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
    }
  ];

  const project = projects[parseInt(id || '0')];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        
        {/* Project Hero */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
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
          
          <div className="relative">
            <div className={`rounded-lg overflow-hidden bg-gradient-to-br ${project.bgGradient}`}>
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Showcase Images - Only for Mathan Electronics */}
        {project.id === 1 && project.showcaseImages && (
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <ImageIcon className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Project Showcase</CardTitle>
              </div>
              <p className="text-muted-foreground">Explore the key interfaces and features of our Electronic Repair Shop Management System</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {project.showcaseImages.map((image, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-border/50 hover:border-primary/50 transition-all duration-300">
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="font-semibold text-lg mb-1">{image.title}</h4>
                        <p className="text-sm text-gray-200">{image.description}</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

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

        {/* Detailed Content for Mathan Electronics */}
        {project.id === 1 && project.overview && (
          <>
            {/* Project Overview */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">Project Overview</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.overview.title}</h3>
                <p className="text-muted-foreground mb-4">{project.overview.subtitle}</p>
                <p className="text-foreground">{project.overview.description}</p>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">Key Features</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.keyFeatures.map((feature, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <feature.icon className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {feature.features.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Architecture */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Database className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">Technical Architecture</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">System Design</h4>
                    <ul className="space-y-2">
                      {project.technicalArchitecture.systemDesign.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Integration Capabilities</h4>
                    <ul className="space-y-2">
                      {project.technicalArchitecture.integrations.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

          

            {/* Key Achievements */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">Key Achievements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.keyAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </>
        )}

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

export default Project;