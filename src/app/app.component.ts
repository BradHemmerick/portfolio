import { Component, OnInit, style, state, animate, transition, trigger } from "@angular/core";
import { Portfolio } from "../models/portfolio.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger('fadeInOut', [
      transition("void => *", [
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ]),
      transition("* => void", [
        animate(200, style({opacity: 0}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  public portfolio: Portfolio;
  public logOpen: boolean = true;
  public updateOpen: boolean = true;
  public bioOpen: boolean = true;

  public ngOnInit(): void {
    this.portfolio = {
      firstName: "Brad",
      middleName: "P",
      lastName: "Hemmerick",
      subheading: "Developer & Innovative Thinker",
      socialMedia: [
        {
          icon: "fa fa-linkedin fa-2x",
          link: "https://www.linkedin.com/in/brad-hemmerick-2a4895149/",
          color: "#0077B5"
        },
        {
          icon: "fa fa-facebook fa-2x",
          link: "https://www.facebook.com/brad.hemmerick",
          color: "#6d84b4"
        },
        {
          icon: "fa fa-github fa-2x",
          link: "https://github.com/BradHemmerick",
          color: "#6e5494"
        }
      ],
      introduction:
        "Hello, I'm Brad Hemmerick, I am Web Developer in the Houston Area",
      changeLog: [
        {
          color: "#10A2F5",
          month: "March",
          year: 2018,
          highlight: "Gradtuation From U.T Coding Bootcamp",
          details: "Learned a lot about web development, recieved certificate and have hunger to keep gaining and honing skills"
        },
        {
          color: "#24D05A",
          month: "February",
          year: 2018,
          highlight: "New Code Tutorial sight coming Soon!",
          details:
            "Building an app for free coding tutorials! Finishing Touches are on going. Link Coming Soon!"
        },
        {
          color: "#24D05A",
          month: "January",
          year: 2018,
          highlight: "New Certificate in Node.js",
          details:
            "Completed a  26.5 hour course learning the fundamentals of Node.js Including, MongoDB, further detailed in making custom APIs, Socket.IO, Mocha testing, Routing, and Express. "
        },
        {
          color: "#EB4888",
          month: "January",
          year: 2018,
          highlight: "Express Certificate",
          details:
            "Completed a course on Express on udemy to learn even more of the ins and outs of Express"
        },
        {
          color: "#10A2F5",
          month: "January",
          year: 2018,
          highlight: "Node.js Certificate",
          details:
            "Complete a 13 hour course on Node.js. Learned The basics of nodes, and practiticed a lot of routing with custom APIs."
        }
      ],
      updates: [
        {
          description:
            "Instant Messanger. Real Time Chat with Node.js, Express, Socket.IO.",
          link: "https://brad-chat-app.herokuapp.com/"
        },
        {
          description:
            "A simple Burger Eating app. Simple app using mySQL, Sequelize, Node.js, Express, and Handlebars.",
          link: "https://eating-burgers.herokuapp.com/"
        },
        {
          description:
            "A Coding Tutorial Site. A collab project with Collin Cavallo. Built with MEAN stack.",
          link: "https://snippitz.herokuapp.com/"
        },
        {
          description: 
            "Whiz. A site to see if a store is busy. Collab with three other programmers. Built with bcrypt, Sequelize, mySQL, Materalize, Node.js. Client side JavaScript, and handlebars.",
          link: "https://vast-depths-43594.herokuapp.com/"
        },
        {
          description: 
            "Chirpy. A simple Social Media made with Handlebars, Node.js, Express, Socket.IO, bcrypt, crypto, and passport",
          link: "https://bradhemmerick.github.io/Trivia-Game/"
        },
        {
          description: 
            "Trivia Game. A simple game made with HTML5 and jQuery",
          link: "https://bradhemmerick.github.io/Trivia-Game/"
        }
      ],
      speakerBio: `Hello! My name is Brad Hemmerick. I grew up in Long Island, New York, though I currently reside in Houston, Texas. I grew practicing Musical Theatre and Opera since the age of four. I decided to pursue programming due to my interests in computers. Ever since I was young I have been fascinated with technology(both hardware and software). Always wanting to learn more on how things work, and why they work. In my free time I enjoy, walking and playing with my dog, reading and writing music, playing piano, taking courses on udemy, acting, singing, and coding side projects with my favorite technologies.`
    };
  }

  public toggleOpen(valueToToggle: string): void{
    switch(valueToToggle){
      case 'logOpen':
      this.logOpen = !this.logOpen;
      break;
      case 'updateOpen':
      this.updateOpen = !this.updateOpen;
      break;
      case 'bioOpen':
      this.bioOpen = !this.bioOpen;
      break;
    }
  }
}
