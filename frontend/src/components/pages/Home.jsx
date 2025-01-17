import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StudentSignIn.css"; // Custom styles

const Home = () => {
  //const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();

    // Collect form data
    const email = event.target.email.value;
    const password = event.target.password.value;
    const mood = event.target.mood.value;
    const wellBeing = event.target.wellBeing.value;

    // Validate fields
    if (!email || !password || !mood || !wellBeing) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate a successful sign-in
    console.log("Sign-in successful:", { email, mood, wellBeing });

    // Redirect to onboarding phase 1
    // navigate("/phase1");
  };

  return (
    <div className="container">
      <h1>Welcome to Mindful</h1>
      <div className="gif-container">
        <img
          src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
          alt="Welcome GIF"
          className="welcome-gif"
        />
      </div>
      <div className="signin-options">
        <h2>Student Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mood">Mood</label>
            <select id="mood" name="mood" className="form-control" required>
              <option value="">Select Mood</option>
              <option value="Happy">😊 Happy</option>
              <option value="Sad">😢 Sad</option>
              <option value="Excited">🤩 Excited</option>
              <option value="Tired">😴 Tired</option>
              <option value="Angry">😡 Angry</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="wellBeing">
              On a scale of 1-10, how would you rate your mental well-being
              today?
            </label>
            <input
              type="number"
              id="wellBeing"
              name="wellBeing"
              className="form-control"
              placeholder="Rate between 1 and 10"
              min="1"
              max="10"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Sign In
          </button>
        </form>
        <div className="links">
          <p>
            Don't have an account?{" "}
            <Link to="/student-signup" className="link">
              Click here to sign up
            </Link>
          </p>
          <p>
            Not a student?{" "}
            <Link to="/role-selection" className="link">
              Select your role
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
