const developers = [
    {
        "id": "b8878c6c-eda2-35ee-f621-91f9b7af14dc",
        "name": "Kiss Lajos",
        "email": "KissLajos@webler.hu",
        "job": "Frontend Developer",
        "age": 35,
        "salary": 350000,
        "image": "https://randomuser.me/api/portraits/men/1.jpg",
        "skills": [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Figma",
            "Sketch",
            "Interaction Design",
            "Visual Design"
        ]
    },
    {
        "id": "a49335ca-d76a-02d1-2a6c-fdab1a3f8c0a",
        "name": "Tony Stark",
        "email": "mrstark@starkindustries.com",
        "job": "Frontend Developer",
        "age": 23,
        "salary": 2500000,
        "image": "https://randomuser.me/api/portraits/men/2.jpg",
        "skills": [
            "JavaScript",
            "React",
            "CSS",
            "HTML",
            "Redux"
        ]
    },
    {
        "id": "d255b2e3-9fde-c833-1cda-fa9ee62e851c",
        "name": "John Doe",
        "email": "JohnDoe@greenwave.hu",
        "job": "Frontend Developer",
        "age": 35,
        "salary": 1556000,
        "image": "https://randomuser.me/api/portraits/men/3.jpg",
        "skills": [
            "HTML",
            "Vue.js",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "id": "20ef4e13-94db-8a96-ca02-4f65a2a545d2",
        "name": "Robert Smith",
        "email": "RobertSmith@greenwave.hu",
        "job": "Fullstack Developer",
        "age": 40,
        "salary": 999000,
        "image": "https://randomuser.me/api/portraits/men/4.jpg",
        "skills": [
            "Node.js",
            "Express",
            "MongoDB",
            "React",
            "RESTful APIs"
        ]
    },
    {
        "id": "e31bc524-918f-a7dc-6b36-0be9c7181a11",
        "name": "James Alexander Mitchell",
        "email": "jam@alphatech.com",
        "job": "Backend Developer",
        "age": 30,
        "salary": 406000,
        "image": "https://randomuser.me/api/portraits/men/5.jpg",
        "skills": [
            "Python",
            "Django",
            "Flask",
            "RESTful APIs"
        ]
    },
    {
        "id": "fbdc476a-eedf-de7e-bac6-2563dd40b0ab",
        "name": "Rose Parker",
        "email": "RoseParker@alphatech.com",
        "job": "Frontend Developer",
        "age": 40,
        "salary": 250000,
        "image": "https://randomuser.me/api/portraits/women/6.jpg",
        "skills": [
            "JavaScript",
            "Angular",
            "HTML",
            "CSS"
        ]
    },
    {
        "id": "575bc89b-907f-3410-0fd2-cc119004b7ed",
        "name": "Sophia Grace",
        "email": "SophiaGrace@alphatech.com",
        "job": "Backend Developer",
        "age": 60,
        "salary": 345000,
        "image": "https://randomuser.me/api/portraits/women/7.jpg",
        "skills": [
            "Java",
            "Spring Boot",
            "SQL"
        ]
    },
    {
        "id": "b83254e1-8893-666a-1185-17cfab8d9a5c",
        "name": "Kovács András",
        "email": "KovacsAndras@alphatech.com",
        "job": "Architect",
        "age": 34,
        "salary": 1500000,
        "image": "https://randomuser.me/api/portraits/men/8.jpg",
        "skills": [
            "Angular",
            "TypeScript"
        ]
    },
    {
        "id": "c9878a6c-7ba3-45ee-f619-91f9a7ef23dc",
        "name": "Egres Kata",
        "email": "EgresKata@starsolutions.net",
        "job": "Data Scientist",
        "age": 28,
        "salary": 520000,
        "image": "https://randomuser.me/api/portraits/women/9.jpg",
        "skills": [
            "Python"
        ]
    },
    {
        "id": "d49337ca-d78a-12e1-3a5d-fdab2b3f9d2a",
        "name": "Nagy Péter",
        "email": "NagyPeter@starsolutions.net",
        "job": "DevOps Engineer",
        "age": 42,
        "salary": 620000,
        "image": "https://randomuser.me/api/portraits/men/10.jpg",
        "skills": [
            "Docker",
            "Kubernetes",
            "CI/CD"
        ]
    },
    {
        "id": "e255a2b3-9fde-d833-1dfa-fa9fe62e85fc",
        "name": "Linda Parker",
        "email": "LindaParker@starsolutions.net",
        "job": "Project Manager",
        "age": 37,
        "salary": 460000,
        "image": "https://randomuser.me/api/portraits/women/11.jpg",
        "skills": [
            "Agile Methodologies",
            "Scrum",
            "JIRA"
        ]
    },
    {
        "id": "f0ef5e14-93db-7c96-da32-4e65b2a655d2",
        "name": "Thomas Evans",
        "email": "ThomasEvans@starsolutions.net",
        "job": "Machine Learning Engineer",
        "age": 31,
        "salary": 730000,
        "image": "https://randomuser.me/api/portraits/men/12.jpg",
        "skills": [
            "Python"
        ]
    },
    {
        "id": "g41bc623-818f-b8dc-5b26-0af8c5184a12",
        "name": "Anna Scott",
        "email": "AnnaScott@starsolutions.net",
        "job": "Security Analyst",
        "age": 29,
        "salary": 395000,
        "image": "https://randomuser.me/api/portraits/women/13.jpg",
        "skills": [
            "Network Security"
        ]
    },
    {
        "id": "h3dc376b-f8df-ce7e-ba76-2574dd30b0ab",
        "name": "Emily White",
        "email": "EmilyWhite@starsolutions.net",
        "job": "Software Tester",
        "age": 34,
        "salary": 410000,
        "image": "https://randomuser.me/api/portraits/women/14.jpg",
        "skills": [
            "Automated Testing",
            "Selenium",
            "Manual Testing"
        ]
    },
    {
        "id": "i28bc12d-5c93-1b56-3d91-754fe2d8a2b1",
        "name": "Márton István",
        "email": "MartonIstvan@techsphere.net",
        "job": "Cloud Solutions Architect",
        "age": 45,
        "salary": 750000,
        "image": "https://randomuser.me/api/portraits/men/15.jpg",
        "skills": [
            "AWS",
            "Azure",
            "GCP"
        ]
    },
    {
        "id": "j7f32f1b-4d7a-8b94-8e41-dc93e76b4c71",
        "name": "Balázs Zoltán",
        "email": "BalazsZoltan@techsphere.net",
        "job": "Data Scientist",
        "age": 39,
        "salary": 680000,
        "image": "https://randomuser.me/api/portraits/men/16.jpg",
        "skills": [
            "SQL",
            "Database Optimization"
        ]
    },
    {
        "id": "k8fc3d2a-6e39-4d9f-9b11-579fbb64b701",
        "name": "Bartos Gábor",
        "email": "BartosGabor@techsphere.net",
        "job": "Security Analyst",
        "age": 33,
        "salary": 400000,
        "image": "https://randomuser.me/api/portraits/men/17.jpg",
        "skills": [
            "Business Analysis",
            "Data Analysis"
        ]
    }
]

function calculateAverageAge(developers){
    const totalAge = developers.reduce((sum,dev) =>sum + dev.age,0 )
    return avgAge = totalAge / developers.length
}

const Q1 = document.getElementById("Q1")
Q1.textContent = "Átlagéletkor: " + calculateAverageAge(developers).toFixed(1)


function calculateFrontendAverageSalary(developers) {
  const frontendDevs = developers.filter(dev => dev.job === 'Frontend Developer')
  const totalSalary = frontendDevs.reduce((sum, dev) => sum + dev.salary, 0)
  return  totalSalary / frontendDevs.length 
}

const Q2 = document.getElementById("Q2")
Q2.textContent = "Átlag frontend fizetés: "+ calculateFrontendAverageSalary(developers).toFixed(1)

function mostSkilled(developers){
    const maxDev =  developers.reduce((maxDev, currentDev) =>
  currentDev.skills.length > (maxDev.skills?.length || 0) ? currentDev : maxDev
, {});
    return maxDev.name
}

const Q3 = document.getElementById("Q3")
Q3.textContent = "legskillesebb developer: " + mostSkilled(developers)

function maxCompany(developers){
      const domains = developers.map(dev => dev.email.split('@')[1]);

  // Számoljuk meg, hányszor fordul elő az egyes domainek
  const counts = domains.reduce((acc, domain) => {
    acc[domain] = (acc[domain] || 0) + 1;
    return acc;
  }, {});

  // Kikeressük a legtöbbször előforduló domaint
  let maxDomain = null;
  let maxCount = 0;
  for (const domain in counts) {
    if (counts[domain] > maxCount) {
      maxCount = counts[domain];
      maxDomain = domain;
    }
  }
    company: maxDomain
  return  maxDomain
}

const Q4 = document.getElementById("Q4")
Q4.textContent = maxCompany(developers)

function findYoungestDeveloper(developers) {
  let youngest = developers[0]; // Kezdjük az első fejlesztővel

  for (let i = 1; i < developers.length; i++) {
    if (developers[i].age < youngest.age) {
      youngest = developers[i];
    }
  }

  return youngest;
}

const G5 = document.getElementById("Q5")
Q5.textContent = findYoungestDeveloper(developers).name + " : " + findYoungestDeveloper(developers).salary


function findOldest(developers) {
  let oldest = developers[0];
  for (let i = 1; i < developers.length; i++) {
    if (developers[i].age > oldest.age) {
      oldest = developers[i];
    }
  }
  return oldest;
}

function salaryDifference(developers) {
  const youngest = findYoungestDeveloper(developers);
  const oldest = findOldest(developers);
  return Math.abs(oldest.salary - youngest.salary);
}

const Q6 = document.getElementById("Q6")
Q6.textContent = salaryDifference(developers)

function averageSalaryByJob(developers) {
  const sums = {};
  const counts = {};

  for (const dev of developers) {
    const job = dev.job;
    sums[job] = (sums[job] || 0) + dev.salary;
    counts[job] = (counts[job] || 0) + 1;
  }

  const averages = {};
  for (const job in sums) {
    averages[job] = sums[job] / counts[job];
  }

  return averages;
}

const Q7 = document.getElementById("Q7");
const avgByJob = averageSalaryByJob(developers);

for (const job in avgByJob) {
  const p = document.createElement("p");
  p.textContent = `${job}: ${avgByJob[job].toFixed(0)} Ft`;
  Q7.appendChild(p);
}





const tbody = document.getElementById("developersTableBody");

developers.forEach(dev => {
  const tr = document.createElement("tr");

  // Image (30x30, kör alak)
  const tdImage = document.createElement("td");
  const img = document.createElement("img");
  img.src = dev.image;
  img.alt = dev.name;
  img.style.width = "30px";
  img.style.height = "30px";
  img.style.borderRadius = "50%";
  tdImage.appendChild(img);
  tr.appendChild(tdImage);

  // Name
  const tdName = document.createElement("td");
  tdName.textContent = dev.name;
  tr.appendChild(tdName);

  // Email mailto link
  const tdEmail = document.createElement("td");
  const emailLink = document.createElement("a");
  emailLink.href = `mailto:${dev.email}`;
  emailLink.textContent = dev.email;
  tdEmail.appendChild(emailLink);
  tr.appendChild(tdEmail);

  // Job
  const tdJob = document.createElement("td");
  tdJob.textContent = dev.job;
  tr.appendChild(tdJob);

  // Age
  const tdAge = document.createElement("td");
  tdAge.textContent = dev.age;
  tr.appendChild(tdAge);

  // Salary + badge + HUF
  const tdSalary = document.createElement("td");
  const badge = document.createElement("span");

  // Badge szín meghatározása
  if (dev.salary < 400000) {
    badge.className = "badge bg-danger";  // piros
  } else if (dev.salary < 700000) {
    badge.className = "badge bg-warning text-dark";  // sárga
  } else {
    badge.className = "badge bg-success";  // zöld
  }

  badge.textContent = dev.salary.toLocaleString("hu-HU") + " HUF";
  tdSalary.appendChild(badge);
  tr.appendChild(tdSalary);

  tbody.appendChild(tr);
});

