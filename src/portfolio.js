/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Priyanshu Singh",
  title: "Hi all, I'm Priyanshu",
  subTitle: 
    "A passionate Front End Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ,
  resumeLink:
    "https://drive.google.com/file/d/1e2qRBpQrlrOPJbSj45qMf2Y64kroEBBl/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/priyanshusingh92",
  linkedin: "https://www.linkedin.com/in/priyanshu1singh/",
  gmail: "singhpriyanshu896@gmail.com",
  facebook: "https://www.facebook.com/priyanshu.iam/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FRONT END DEVELOPER WHO BUILDS STUFF",
  skills: [
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ,
   "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
  
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Uttar Pradesh Technical University",
      logo: require("./assets/images/uptu.PNG"),
      subHeader: "Bachelor's Degree in Electronics & Instrumentation",
      duration: "September 2010 - June 2014",
      desc: "Secured 72% in 8 semesters",
      descBullets: [

      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React JS", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Angular",
      progressPercentage: "90%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "85%"
    },
    {
      Stack: "HTML",
      progressPercentage: "90%"
    },
    {
      Stack: "CSS",
      progressPercentage: "90%"
    },
    {
      Stack: "Typescript",
      progressPercentage: "85%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Staff Engineer",
      company: "Nagarro",
      companylogo: require("./assets/images/nagarro.jpg"),
      date: "Aug 2021 – Present",
      desc: "Leading design and development of robust and scalable front end applications for client in logistics domain . Currently leading team of 4 developers"

    },
    {
      role: "Technical Lead",
      company: "HCL",
      companylogo: require("./assets/images/hcl.jpeg"),
      date: "Nov 2020 – Aug 2021",
      desc: "Worked on building an ecommerce website using React.js and improved site performance by optimisation techniques and reduced loading time by 20% increasing sales by 8% .",
 
    },
    {
      role: "IT Analyst",
      company: "Tata Consultancy Services Pvt Ltd",
      companylogo: require("./assets/images/tcs.jpg"),
      date: "Dec 2018 – Nov 2020",
      desc: "Developed internal tool - a SPA application in Angular for banking domain employees improving their productivity by 30% by reducing manual efforts"
    },
    {
      role: "Systems Engineer",
      company: "Infosys Pvt Ltd",
      companylogo: require("./assets/images/infosys.jpg"),
      date: "Jul 2014 – Dec 2018",
      desc: "Development of web pages using angular components"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "FEW OF THE PROJECTS THAT I CREATED ",
  projects: [
    {
      image: require("./assets/images/youtube.png"),
      projectName: "Youtube Clone",
      projectDesc: "Clone website youtube.com built using React.js, Redux , React router , Tailwindcss (live chat , search results and real time data)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://youtube-clone-live.netlify.app"
        }
      ]
    },
    {
      image: require("./assets/images/food.png"),
      projectName: "Food Ordering App",
      projectDesc: "Small food ordering app built in React.js utilizing concepts like Redux, Context ,State etc.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://foodorder-ui.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/expense.png"),
      projectName: "Expense Tracker",
      projectDesc: "Tracker Application for tracking and graphically analysing expenses (built in React.js)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://expense-tracker-ui.netlify.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title:"Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "70-480",
      subtitle:
        "70-480 Programming in HTML5 with JavaScript and CSS3",
      image: require("./assets/images/microsoft.jpg"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/in/priyanshu1singh/overlay/1589810433857/single-media-viewer/"
        }
      ]
    },
    {
      title: "98-383",
      subtitle:
        "Introduction to Programming using HTML & CSS",
      image: require("./assets/images/microsoft.jpg"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/in/priyanshu1singh/overlay/1589810398569/single-media-viewer/"
        }
      ]
    },

    {
      title: "A team Award",
      subtitle: "A team award for outstanding performance and exceptional work ",
      image: require("./assets/images/nagarro.jpg"),
      imageAlt: "Nagarro Logo",
      footerLink: [
        {name: "Award Letter 2022", url: "https://www.linkedin.com/feed/update/urn:li:activity:6971042119167692800/"},
        {name: "Award Letter 2021", url: "https://www.linkedin.com/in/priyanshu1singh/overlay/1635476443814/single-media-viewer/"}

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle:    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ,

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8668540424",
  email_address: "singhpriyanshu896@gmail.com"
};
// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
