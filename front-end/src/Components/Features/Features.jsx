import React from "react";
import "./Features.css";
const Features = () => {
  return (
    <div className="features">
      <div className="main">
        <h2>Academics</h2>
        <h1>Embark on a journey of learning!</h1>
        <p>
          Learning is a never ending process! Start yours with a good
          experience! Join us to explore your potential and skills!
        </p>
        <ul>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
            assumenda.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            nisi?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            ducimus!
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            iusto.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            sed!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            commodi!
          </li>
        </ul>
      </div>
      <div className="card">
      <article class="information [ card ]">
		<span class="tag">IMPORTANT</span>
		<h2 class="title">THIS IS A CLONE WEBSITE</h2>
		<p class="info">This website is made by our team and more information about our team you can check</p>
		<button class="button">
			<span>Learn more</span>
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="none">
				<path d="M0 0h24v24H0V0z" fill="none" />
				<path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" fill="currentColor" />
			</svg>
		</button>
	</article>
      </div>
    </div>
  );
};

export default Features;
