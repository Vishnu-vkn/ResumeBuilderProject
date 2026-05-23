import { useState } from "react";

const ResumeData = {
    name: {
        first:'First',
        second:'Second'
    },
    title: "Software Engineer",
    contact: {
        email: "abc@gmail.com",
        phone: "123456789",
        location: "India",
        linkedin: "linkedin.com/in/",
        github: "github.com/",
    },

    summary:
    "Passionate software engineer skilled in React.js and backend development.",

  education: [
    {
      college: "XYZ University",
      degree: "B.Tech Computer Science",
      year: "2022 - 2026",
    },
  ],

  skills: [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
  ],

  projects: [
    {
      title: "Resume Builder",
      description:
        "Built a dynamic resume builder using React.js.",
    },
  ],

  certifications: [
    "Frontend Development Certification",
    "React.js Bootcamp",
  ],

  additionalInformation: {
    languages: ["English", "Hindi"],
    visaStatus: "Visit Visa",
    nationality: "Indian",
  }

};
