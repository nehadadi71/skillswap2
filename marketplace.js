const skills = [
  {
    title: "JavaScript Fundamentals",
    category: "programming",
    level: "Beginner",
    instructor: "Sarah Johnson",
    rating: 4.8,
    description: "Learn variables, data types, and functions.",
    
    image:"images/js-fundamentals.png.jpg"
// ✅ correct local path
  },


  
  {
    title: "Responsive Web Design",
    category: "design",
    level: "Intermediate",
    instructor: "Michael Chen",
    rating: 4.9,
    description: "Create adaptable websites using modern CSS.",
    image: "https://source.unsplash.com/400x300/?webdesign"
  },
  {
    title: "Digital Marketing Strategy",
    category: "marketing",
    level: "Advanced",
    instructor: "Emily Rodriguez",
    rating: 4.7,
    description: "Develop SEO and social media strategies.",
    image: "https://source.unsplash.com/400x300/?marketing"
  },
  {
    title: "Conversational Spanish",
    category: "language",
    level: "Beginner",
    instructor: "Carlos Ramirez",
    rating: 4.6,
    description: "Master common phrases and conversation skills.",
    image: "https://source.unsplash.com/400x300/?spanish"
  },
  {
    title: "Startup Pitching 101",
    category: "business",
    level: "Intermediate",
    instructor: "Linda Park",
    rating: 4.5,
    description: "Learn how to pitch ideas to investors.",
    image: "https://source.unsplash.com/400x300/?business"
  },
  {
    title: "Guitar for Beginners",
    category: "music",
    level: "Beginner",
    instructor: "Jake Lee",
    rating: 4.4,
    description: "Learn chords and popular songs.",
    image: "https://source.unsplash.com/400x300/?guitar"
  }
];

const container = document.getElementById("skills-container");
const buttons = document.querySelectorAll(".filter-btn");

function displaySkills(filter) {
  container.innerHTML = "";
  const filtered = filter === "all" ? skills : skills.filter(skill => skill.category === filter);
  filtered.forEach(skill => {
    container.innerHTML += `
      <div class="skill-card">
        <img src="${skill.image}" alt="${skill.title}" />
        <div class="skill-content">
          <div class="skill-tags">
            <span class="tag">${capitalize(skill.category)}</span>
            <span class="tag">${skill.level}</span>
          </div>
          <h3>${skill.title}</h3>
          <p>${skill.description}</p>
          <div class="skill-meta">
            <span>👤 ${skill.instructor}</span>
            <span>⭐ ${skill.rating}</span>
          </div>
          <div class="btn-group">
            <button class="view">View Details</button>
            <button class="request">Request Swap</button>
          </div>
        </div>
      </div>`;
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    displaySkills(btn.dataset.category);
  });
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

window.onload = () => displaySkills("all");