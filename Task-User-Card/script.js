const users = [
  {
    id: 1,
    bgCoverImg: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Arjun Mehta",
    role: "Frontend Developer",
    description: "3+ years of experience building responsive and interactive web applications using React and modern CSS.",
    themeColor: "#3B82F6",
    nameColor: "#1E40AF"
  },
  {
    id: 2,
    bgCoverImg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    role: "UI/UX Designer",
    description: "Creative designer with 4 years of experience in crafting user-centered designs and wireframes.",
    themeColor: "#d3297e",
    nameColor: "#44001b"
  },
  {
    id: 3,
    bgCoverImg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Rahul Verma",
    role: "Backend Developer",
    description: "Experienced in Node.js and databases with 5 years of backend architecture and API development.",
    themeColor: "#10B981",
    nameColor: "#065F46"
  },
  {
    id: 4,
    bgCoverImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    profilePic: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Sneha Patel",
    role: "Full Stack Developer",
    description: "Worked on multiple MERN stack projects with strong problem-solving and debugging skills.",
    themeColor: "#F59E0B",
    nameColor: "#92400E"
  },
  {
    id: 5,
    bgCoverImg: "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Aman Singh",
    role: "JavaScript Developer",
    description: "2+ years of experience specializing in JavaScript, DOM manipulation, and performance optimization.",
    themeColor: "#8B5CF6",
    nameColor: "#4C1D95"
  },
  {
    id: 6,
    bgCoverImg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Neha Gupta",
    role: "Software Engineer",
    description: "Focused on scalable web solutions and clean architecture with strong coding standards.",
    themeColor: "#EF4444",
    nameColor: "#7F1D1D"
  },
  {
    id: 7,
    bgCoverImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    profilePic: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Vikram Das",
    role: "DevOps Engineer",
    description: "Expert in CI/CD pipelines, Docker, and cloud deployment with 4 years of experience.",
    themeColor: "#14B8A6",
    nameColor: "#134E4A"
  },
  {
    id: 8,
    bgCoverImg: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    profilePic: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Anjali Roy",
    role: "Mobile App Developer",
    description: "Developed cross-platform mobile applications using React Native and Flutter.",
    themeColor: "#F43F5E",
    nameColor: "#881337"
  },
  {
    id: 9,
    bgCoverImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    profilePic: "https://randomuser.me/api/portraits/men/88.jpg",
    name: "Karan Malhotra",
    role: "Data Analyst",
    description: "Skilled in data visualization, SQL, and Python with 3 years of analytics experience.",
    themeColor: "#22C55E",
    nameColor: "#003013"
  },
  {
    id: 10,
    bgCoverImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    profilePic: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Riya Sen",
    role: "Cloud Engineer",
    description: "Hands-on experience with AWS and cloud infrastructure automation for 5 years.",
    themeColor: "#6366F1",
    nameColor: "#04015e"
  }
];

let main = document.querySelector('main')

let clutter = ''

users.forEach((elem)=>{
    clutter += `<section class="card" >
            <div class="bgimg">
                <img src="${elem.bgCoverImg}" alt="">
            </div>
            <div class="content" style="background-color: ${elem.themeColor};">
                <img src="${elem.profilePic}" alt="">
                <h1 style="color: ${elem.nameColor};">${elem.name}</h1>
                <h3>${elem.role}</h3>
                <p> ${elem.description} </p>
                <div class="social">
                    <i class="ri-instagram-line"></i>
                    <i class="ri-twitter-line"></i>
                    <i class="ri-facebook-line"></i>
                    <i class="ri-linkedin-line"></i>
                </div>
            
            </div>
        </section>`
        
        
    })
    main.innerHTML = clutter
