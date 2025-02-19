import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Profile Data
const profileData = {
  name: "May Rakgama",
  title: "Passionate IT Professional & Web Developer",
  location: "City of Cape Town, Western Cape, South Africa",
  email: "luckyrakgama@gmail.com",
  phone: "0782944819",
  linkedin: "https://www.linkedin.com/in/may-rakgama-4a9aa4136/",
  github: "https://github.com/mayrakgama",
  portfolio: "https://mayrakgama.dev",
  summary: "With a rich history in Core IT Support, my journey has been a thrilling adventure, marked by growth in fast-paced environments and enriched by experiences at renowned organizations like Vodacom ASOC, SANTAM, and Spacesoft. I specialize in system operations, troubleshooting, and performance optimization, ensuring seamless functionality in IT environments.",
  skills: ["JavaScript", "SQL", "Microsoft SQL Server", ".NET MVC", "C#", "Java", "HTML/CSS/Bootstrap", "Python", "Git", "React.js", "Node.js", "Docker", "AWS"],
  certifications: [
    {
      name: "Introduction to Cloud Computing",
      issuer: "IBM",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/verify/XXXXX",
      image: "https://images.credly.com/images/bc08972c-3c7d-4b99-82a0-c94bcca36674/Badges_v8-07_Practitioner.png"
    },
    {
      name: "Introduction to Software Engineering",
      issuer: "IBM",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/verify/YYYYY",
      image: "https://images.credly.com/images/bc08972c-3c7d-4b99-82a0-c94bcca36674/Badges_v8-07_Practitioner.png"
    },
    {
      name: "Full Stack Web Development",
      issuer: "IBM",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/verify/ZZZZZ",
      image: "https://images.credly.com/images/bc08972c-3c7d-4b99-82a0-c94bcca36674/Badges_v8-07_Practitioner.png"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Senior Developer",
      company: "Tech Corp",
      location: "Cape Town",
      period: "2020 - Present",
      description: "Leading development of enterprise applications",
      technologies: ["React", "Node.js", "AWS"],
      responsibilities: [
        "Led team of 5 developers",
        "Implemented CI/CD pipeline",
        "Reduced system response time by 40%"
      ]
    },
    {
      id: 2,
      company: "EOH/IOCO Contractors",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHRTNJe90ds8A/company-logo_100_100/company-logo_100_100/0/1733991196145/ioco_previously_eoh_logo?e=1747872000&v=beta&t=W4tZxB6lUAdYHmSe3pQq90AUoKAVLXgsFI8p0jq2QVI",
      role: "Core IT Network Fault Management Support Technician",
      duration: "October 2023 - Present",
      location: "Cape Town, Western Cape, South Africa",
      type: "Contract",
      workMode: "On-site",
      description: "As a dedicated Core IT Applications Support Specialist at Vodacom ASOC through IOCO (formerly EOH), specializing in system operations, troubleshooting, and performance optimization.",
      currentClient: {
        name: "Vodacom ASOC",
        logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEZhqd-eccj3w/company-logo_100_100/company-logo_100_100/0/1699590352029?e=1747872000&v=beta&t=6GDylDZEvhlh0m1vZ-NTQ5bMoES5tEaxS00zN2vbUJU"
      },
      responsibilities: [
        "System Operation & Maintenance of critical systems",
        "Escalation Management with precision",
        "Collaboration with development teams",
        "Quality Assurance and system efficiency",
        "Performance Optimization",
        "24/7 Network monitoring and support",
        "Incident management and resolution",
        "System performance analysis and reporting"
      ]
    },
    {
      id: 3,
      company: "SpaceSoft Technology",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFNnUjOqcJHNA/company-logo_100_100/company-logo_100_100/0/1631351154896?e=1747872000&v=beta&t=JOQbVoX_YYGmdJBkoPxopfzPDmOpHV4iY_ov-30jRbQ",
      role: "Junior Software Developer",
      duration: "Mar 2022 - Jun 2023 · 1 yr 4 mos",
      location: "Cape Town, Western Cape, South Africa",
      type: "Contract",
      workMode: "Remote",
      description: "Developed and maintained web applications using .NET framework and modern web technologies.",
      responsibilities: [
        ".NET framework and C# programming",
        "Web application development using ASP.NET",
        "Feature implementation and debugging",
        "Code documentation and review",
        "Front-end development (HTML, CSS, JavaScript)"
      ]
    },
    {
      id: 4,
      company: "Santam Insurance",
      logo: "/images/logos/santam-logo.png",
      role: "Quality Auditor",
      duration: "Mar 2021 - Feb 2022 · 1 yr",
      location: "City of Johannesburg, Gauteng, South Africa",
      type: "Contract",
      workMode: "Remote",
      description: "Served in quality assurance role, ensuring high standards and client satisfaction.",
      responsibilities: [
        "Preparing reports on quality related matters",
        "Plan, execute and close issues on audits (Quality System audits, Process Audits, Product Audits)",
        "Create quality measurements to track improvement in products",
        "Execute quality improvement testing and activities",
        "Developing quality assurance standards and company processes"
      ]
    },
    {
      id: 5,
      company: "Santam Insurance",
      logo: "/images/logos/santam-logo.png",
      role: "Client Consultant Agent",
      duration: "Jan 2020 - Feb 2021 · 1 yr 2 mos",
      location: "Cape Town, Western Cape, South Africa",
      type: "Contract",
      workMode: "Hybrid",
      description: "Provided exceptional customer service and support to clients.",
      responsibilities: [
        "Establishing positive client relationships through efficient customer service assistance",
        "Interacting with clients to identify their needs, answer inquiries",
        "Handle issues and complaints, resolving them promptly and efficiently"
      ]
    }
  ],
  education: [
    {
      school: "IBM & Coursera",
      degree: "Professional Full Stack Developer Certification",
      location: "Online",
      startDate: "2023",
      endDate: "Present",
      status: "In Progress",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_100_100/company-logo_100_100/0/1688684715866/ibm_logo?e=1747872000&v=beta&t=qfmsXdg83T4NG4cNiQWy1P8VcyoBR-WzHDNxi8Tcf7g",
      type: "Professional Certification",
      courses: [
        "Full Stack Web Development",
        "Cloud Computing",
        "DevOps & Software Engineering",
        "Microservices Architecture",
        "Agile Development & Scrum"
      ],
      achievements: [
        "Building enterprise-level applications",
        "Cloud-native development practices",
        "Modern web technologies and frameworks"
      ]
    },
    {
      school: "On The Ball College",
      degree: "System Development NQF5",
      institution: "Pearson & MICTSETA",
      location: "Cape Town, South Africa",
      startDate: "2020",
      endDate: "2022",
      grade: "NQF Level 5",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHdZzjzCf1vnw/company-logo_200_200/company-logo_200_200/0/1732118358972/on_the_ball_college_logo?e=1747872000&v=beta&t=NwuVFv5G675PchmftJCQa-xtyUN2ACdyoMOFXeXkakE",
      type: "Professional Certification",
      courses: [
        "Software Development",
        "Database Design",
        "Systems Analysis",
        "Web Development",
        "Programming Fundamentals"
      ],
      achievements: [
        "Completed advanced programming modules",
        "Developed full-stack applications",
        "Implemented database solutions"
      ]
    },
    {
      school: "Graduate Institute of Financial Sciences",
      degree: "Certificate, Finance (Short Term Insurance)",
      location: "South Africa",
      startDate: "Mar 2021",
      endDate: "Feb 2022",
      logo: "https://gifs.africa/wp-content/themes/neutron/dist/images/logo_b37510a7.png",
      type: "Professional Certification",
      courses: [
        "Financial Services and Products",
        "Intermediary Services",
        "Short Term Insurance Principles",
        "Risk Management",
        "Regulatory Compliance"
      ],
      achievements: [
        "Specialized in short-term insurance products and services",
        "Completed regulatory compliance training"
      ]
    }
  ],
  projects: [
    {
      id: 1,
      name: "Weather Widget",
      description: "Real-time weather updates with location tracking",
      technologies: ["Vue.js", "Tailwind", "OpenWeather API"],
      category: "frontend",
      featured: true
    },
    {
      id: 2,
      name: "Hospital Management",
      description: "Patient and staff management system",
      technologies: [".NET MVC", "SQL Server", "Bootstrap"],
      category: "fullstack",
      featured: true
    },
    {
      id: 3,
      name: "Market Analyzer",
      description: "Stock market data visualization tool",
      technologies: ["Python", "Django", "Pandas"],
      category: "data",
      featured: false
    },
    {
      id: 4,
      name: "Delivery Tracker",
      description: "Real-time package tracking app",
      technologies: ["Flutter", "Firebase", "Maps API"],
      category: "mobile",
      featured: true
    },
    {
      id: 5,
      name: "Invoice Generator",
      description: "Professional invoice creation system",
      technologies: ["Angular", "TypeScript", "SASS"],
      category: "frontend",
      featured: false
    },
    {
      id: 6,
      name: "Inventory System",
      description: "Stock management and tracking",
      technologies: ["ASP.NET Core", "Entity Framework", "MSSQL"],
      category: "fullstack",
      featured: false
    }
  ],
  about: {
    introduction: "Passionate IT professional with a robust background in web development, dedicated to delivering exceptional results. Leveraging a diverse skill set, I infuse creativity and innovation into every project",
    expertise: [
      {
        area: "Technical Leadership",
        description: "Leading development teams and implementing enterprise-level solutions with a focus on scalability and performance."
      },
      {
        area: "Full Stack Development",
        description: "Expertise in modern web technologies including React, Node.js, and cloud platforms, with a track record of delivering robust applications."
      },
      {
        area: "IT Operations",
        description: "Strong background in IT support and system operations, ensuring optimal performance and security of technical infrastructure."
      }
    ],
    keyAchievements: [
      "Reduced system response time by 40% through optimization and architectural improvements",
      "Successfully led and delivered 6+ full-stack projects with 100% client satisfaction",
      "Implemented automated CI/CD pipelines resulting in 60% faster deployment cycles"
    ],
    professionalApproach: "I combine technical expertise with strong problem-solving abilities to deliver innovative solutions that drive business value. My approach emphasizes clean code, scalable architecture, and user-centric design.",
    interests: [
      "Cloud Architecture",
      "DevOps Practices",
      "AI/ML Integration",
      "Performance Optimization"
    ]
  }
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home profile={profileData} />} />
            <Route path="/experience" element={<Experience data={profileData.experience} />} />
            <Route path="/skills" element={<Skills skills={profileData.skills} />} />
            <Route path="/education" element={<Education education={profileData.education} />} />
            <Route path="/certificates" element={<Certificates certificates={profileData.certifications} />} />
            <Route path="/projects" element={<Projects projects={profileData.projects} />} />
            <Route path="/contact" element={<Contact profile={profileData} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
