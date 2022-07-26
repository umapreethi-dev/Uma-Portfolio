import Mentor from "../images/mm1.png";
import Movie from "../images/movie1.png";
import Hov from "../images/hovv.png";
import ecom from "../images/e-com-page.png";
import travel from "../images/tra-app.png";

const data = [
  {
    id: "1",
    subtitle: "Front-End Web App",
    title: "HEART OF THE VALLEY",
    skill: "REACT,BOOTSTRAP",
    content:
      " Heart Of the Valley is a non-profit organization whose mission is to bring exposure to local bay area artists. I worked in developing a mapping platform for arts in bay area using React for Front-End, using Mapbox GL and using API to get the arts location, description ,image and more details to show it to the user. I am also Developing the search functionality to provide the data. ",
    live: "",
    github: "https://github.com/codeforsanjose/heartofthevalley",
    img: Hov,
    color: "bgColor1",
  },
  {
    id: "2",
    subtitle: "Front-End Web App",
    title: "Travel App",
    skill: "HTML,CSS,JS,NODEJS,EXPRESS,WEBPACK,JEST",
    content:
      " This project is a travel app that, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs. The app has a form that gets arrival,departure place from user and also departure and return date. The user can will get the details of image of the location , duration of the travel, days for the travel and weather information for the future 16 days of the place. Additionally, the user can also get to know the flight details. ",
    live: "",
    github: "https://github.com/umapreethi-dev/Travel-app-capstone-",
    img: travel,
    color: "bgColor5",
  },
  {
    id: "3",
    subtitle: "Front-End Web App",
    title: "E-Commerce Webpage",
    skill: "REACT,BOOTSTRAP",
    content:
      " This project is built with React. When a user clicks Add to cart button the product will be added to the cart and the button will be disabled. If the user removes the product from the cart, the add to cart will be enabled again. This project was created to learn about the state management in React. ",
    live: "https://e-commerce-page-seven.vercel.app/",
    github: "https://github.com/umapreethi-dev/E-commerce-page",
    img: ecom,
    color: "bgColor4",
  },
  {
    id: "4",
    subtitle: "Full Stack App",
    title: "MOVIES CRUD APP",
    skill: "REACT,BOOTSTRAP,NODEJS,MONGODB ATLAS",
    content:
      "MovieList is a CRUD app created using React which has a list of movies with rating, summary and poster. User can also add ,edit movies to the list.",
    live: "",
    github: "https://github.com/umapreethi-dev/MovieList",
    img: Movie,
    color: "bgColor2",
  },
  {
    id: "5",
    subtitle: "Full Stack App",
    title: "MENTAL MENTOR",
    content:
      "Mental Mentor is a web application which is a platform for connecting patients and therapists. Once a patient registers, they are led to take a questionnaire that assesses the area in which they struggle the most (for the purpose of this demo, we tested for 3 categories – mood (depression/anxiety/etc.) issues, family issues, and addiction issues. We then suggest a therapist from our database who specializes in that same area and provide that therapist’s contact information to the patient so they can seek treatment. Therapists are able to register so they are listed in our database and able to be matched to patients. ",
    skill: "HTML,CSS,JS,BOOTSTRAP,NODEJS,EJS,MONGODB,MONGOOSE",
    live: "https://polar-oasis-94140.herokuapp.com/",
    github: "https://github.com/Mental-Mentor/Mental-Mentor",
    img: Mentor,
    color: "bgColor3",
  },

  
 
];

export default data;
