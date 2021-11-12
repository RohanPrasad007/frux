import React from "react";
import { Helmet } from "react-helmet";
import "../css/Blog.css";
import image from "../image/freelacing.svg";

function FreelancingBlog() {
  return (
    <div className="blog">
      <Helmet>
        <title>How a 16 years old become a freelancer?</title>\
        <meta
          name="description"
          content="A story of 16 year old boy web developer freelancer and make money"
        />
      </Helmet>
      <div className="blog-container">
        <h1>How a 16 years old become a freelancer?</h1>
        <img src={image} alt="hero" />
        <div className="content-table">
          <h3>Table Of Contents</h3>
          <ul className="topics">
            <li>
              <a href="#1">How It Started</a>
            </li>
            <li>
              <a href="#2">Freelacing</a>
            </li>
            <li>
              <a href="#3">First Client</a>
            </li>
            <li>
              <a href="#4">Proposal To Win Client</a>
            </li>
            <li>
              <a href="#5">Conclusion</a>
            </li>
          </ul>
        </div>
        <p>
          Freelancing is one of the most popular way to make money online but it
          is not a get rich quick scheme. It requires patience, consistency and
          hard work. Most people think you just need to sit at home and work and
          money will come to you. That's not the case. In this post, I am going
          to tell you how I got started and what are the things that you need to
          keep in mind.
        </p>
        <h2 id="1">How It Started</h2>
        <p>
          My name is Rohan Prasad, a 16-year-old freelancer. Who Lives in India.
          After my 10th board exam, I have a long vacation so I thought of doing
          something. So I started learning something on the internet like video
          editing, digital marketing, photoshop, adobe illustrator and a little
          coding. I found coding interesting so I stopped other things and
          focused on coding.
        </p>
        <p>
          I started learning Java. After understanding the concept of it I
          wanted to make some projects for myself, therefore I also decided to
          learn web development. I learn HTML, CSS and javaScript by watching
          some tutorials on{" "}
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            YouTube
          </a>{" "}
          or some websites like{" "}
          <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">
            w3school{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noreferrer"
          >
            freecodecamp.org
          </a>{" "}
          etc.
        </p>
        <p>
          Soon I came to a point where I started to make small projects like a
          to-do list, simple landing page etc. I was happy because of my speed
          of performing all these tasks but my parents were not happy with it,
          they were always complaining about me sitting on the computer for the
          whole day( well that is the secret of my speed) and not doing
          anything, I tried to tell them about what I was doing. But they didn't
          find it great for my future as I found it to be. so I thought that one
          thing that they will also find interesting is money. So the next big
          question was how I would monetize all my work.
        </p>
        <h2 id="2">Freelancing</h2>
        <p>
          So in the search of making money by my new skill that I have learned.
          I found freelancing. Freelancing is something where you work for the
          company or an individual like a part-timer on a short term
          basis(mostly remote work). It was something that I could do.
        </p>
        <p>
          There are many freelancing websites like{" "}
          <a href="https://www.upwork.com/" target="_blank" rel="noreferrer">
            Upwork
          </a>{" "}
          ,
          <a
            href="https://www.freelancer.com/"
            target="_blank"
            rel="noreferrer"
          >
            freelancer
          </a>
          ,{" "}
          <a href="https://www.fiverr.com/" target="_blank" rel="noreferrer">
            Fiverr
          </a>{" "}
          and{" "}
          <a
            href="https://www.peopleperhour.com/"
            target="_blank"
            rel="noreferrer"
          >
            PeoplePerHour
          </a>
          . These websites help freelancers to find their clients. These
          websites basically work like the clients will post their works and it
          is freelancers job to bid on that and the client will decide to whom
          he should give the task to, from the people who had bids on their
          posts .So I signed up on some of the websites.
        </p>
        <p>
          I started to bid on some projects but it was not as easy as I thought
          it would be. There were many problems like I didn't know what to do in
          some parts of some projects. There were also some projects that I
          could have executed nicely. But They had so many bids.
        </p>
        <p>
          The problem for the beginner is competition. Many freelancers use the
          same platform. The platform also has some features like rates from the
          client worked with and reviews etc to show the working ability of the
          freelancer with the client. So it becomes difficult for beginners to
          get their first client.
        </p>
        <p>
          I thought I needed to learn more and improve my skill to get more
          clients. I was learning as well as bidding on some projects but I did
          not get any good results. I was doing this for almost two to three
          months until one day when I thought I needed to do both of the things
          like learning and bidding systematically.
        </p>
        <h2 id="3">First client</h2>
        <p>
          Then I planned that I will spend one hour on bidding and cold emailing
          and for the rest of the day, I will learn and make projects that I can
          add to my portfolio and host the project from free hosting so I can
          show it to the clients.
        </p>
        <p>
          I started learning to react JS, node JS and mongo DB. And started
          making projects based on them to increase my chances to get clients.
        </p>
        <p>
          After doing this for a couple of weeks. I started getting some
          interviews from the clients. IT Acted as a Ray of Hope to me. And once
          I got an interview with a client from Pakistan. I had a nice meeting
          with him and I directly got the job on the spot as the client was low
          on budget and the task was simple. I completed it in two days and
          that's how I got my first client.
        </p>
        <h2 id="4">Proposal To Win Client</h2>
        <p>
          One of the most important things to get clients is writing good
          proposals that I also learned by the time and here are some tips that
          I found useful.
        </p>
        <ol>
          <li>
            The proposal should be short and straight to the point(the client
            may spend their time reading a short proposal rather than a big
            one).
          </li>
          <li>
            Focus on what the client wants and how can you help him or how can
            you give him what he wants?
          </li>
          <li>
            Include a project that you have done in the past.it would be best if
            the project is related to what the client wants for himself.
          </li>
          <li>
            Be honest to the client about the task or work he gave you (the
            client is not looking for someone who has like 10 years of
            experience, they just want their work to be done).
          </li>
        </ol>
        <h2 id="5">Conclusion</h2>
        <p>
          In the end, I just want to say that it is not impossible to get
          started, you just put in the time and hard work and keep learning and
          improving your skills.
        </p>
      </div>
    </div>
  );
}

export default FreelancingBlog;
