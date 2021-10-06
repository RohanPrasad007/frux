import React from "react";
import "../css/Blog.css";

function Blog() {
  return (
    <div className="blog">
      <div className="blog-container">
        <h1>How To Stay Focused (and not get distracted)</h1>
        <img
          src="https://aliabdaal.com/content/images/size/w600/2021/09/ERROR-1.png"
          alt="hero"
        />
        <p>
          These days it’s harder than ever to stay focused. We’re surrounded by
          fancy technologies and the whole new (and usually more fun) world is
          just a stone’s throw away.
        </p>
        <p>
          And, let’s say it up front, there’s nothing wrong in scrolling through
          your Instagram feed or playing Dark Soul for a few hours (guilty ✋).
        </p>
        <p>
          It becomes a problem when these things become distractions from the
          work that we want to do. We all have goals, deadlines, and dreams that
          we chase. And without deep work and plain manpower put into these
          projects, none of it is going to happen.
        </p>
        <p>
          So today we’ll break distractions down into simple pieces so you’ll
          get to know exactly why we’re getting distracted in the first place to
          then discover how we can fight these distractions and finally learn
          how to stay focused.
        </p>
        <div className="post-entry">
          <a href="/">READ MORE</a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
