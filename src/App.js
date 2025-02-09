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
      link: "https://www.coursera.org/account/accomplishments/verify/XXXXX"
    },
    {
      name: "Introduction to Software Engineering",
      issuer: "Microsoft",
      date: "2023",
      link: "https://learn.microsoft.com/en-us/users/mayrakgama/credentials/XXXXX"
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2022",
      link: "https://www.freecodecamp.org/certification/mayrakgama/XXXXX"
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "https://www.credly.com/badges/XXXXX"
    }
  ],
  experience: [
    {
      company: "EOH",
      role: "Service Desk Technician",
      duration: "October 2023 - Present",
      location: "Cape Town, South Africa"
    },
    {
      company: "Vodacom ASOC",
      role: "Core IT Network Fault Management Support Technician",
      duration: "Multiple Years",
      location: "South Africa"
    },
    {
      company: "Spacesoft Technology",
      role: "Junior Software Developer",
      duration: "March 2022 - June 2023",
      location: "Cape Town, South Africa"
    }
  ],
  education: [
    {
      institution: "Pearson Professional South Africa",
      degree: "Higher National Diploma in Information Technology",
      years: "2020 - 2022",
      description: "Comprehensive program focusing on modern software development, database management, and IT infrastructure.",
      achievements: [
        "Graduated with distinction",
        "Led team projects in web development",
        "Developed multiple full-stack applications"
      ],
      courses: [
        "Advanced Web Development",
        "Database Design",
        "Software Engineering",
        "Network Security",
        "Cloud Computing",
        "Mobile App Development"
      ]
    },
    {
      institution: "University of South Africa",
      degree: "ICT - Information Technology",
      years: "2017 - 2018",
      description: "Foundation studies in Information and Communication Technology with focus on programming and systems analysis.",
      achievements: [
        "Dean's List for academic excellence",
        "Participated in coding competitions",
        "Student mentor for first-year programming students"
      ],
      courses: [
        "Programming Fundamentals",
        "Computer Architecture",
        "Data Structures",
        "Systems Analysis",
        "Web Technologies",
        "IT Project Management"
      ]
    }
  ],
  projects: [
    {
      name: "AI Resume Builder",
      description: "A web application that generates resumes using AI-powered templates.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/mayrakgama/ai-resume-builder"
    },
    {
      name: "E-Commerce Platform",
      description: "A full-stack web application for online shopping with integrated payment processing.",
      technologies: ["React", "Redux", "Firebase", "Stripe API"],
      link: "https://github.com/mayrakgama/ecommerce-platform"
    }
  ]
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
      </div>
    </Router>
  );
}

export default App;