import { useEffect, useState } from "react";

function MainArea() {
  const correctAnswers = {
    q1: "Paris",
    q2: "JavaScript",
    q3: "Facebook",
    q4: "Hyper Text Markup Language",
    q5: "Netscape",
    q6: "Styling web pages",
    q7: "<a>",
    q8: "A lightweight copy of the real DOM",
    q9: "useState",
    q10: "Application Programming Interface",
  };

  const [timeLeft, setTimeLeft] = useState(30);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (submitted) return; 

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(); 
          return 0; 
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted]);

  const handleSubmit = () => {
    let newScore = 0;

    for (let i = 1; i <= 10; i++) {
      let qName = "q" + i;
      let selected = document.querySelector(
        `input[name="${qName}"]:checked`
      );

      if (selected && selected.value === correctAnswers[qName]) {
        newScore++;
      }
    }

    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
        background: "#ffffff",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>MCQ Quiz</h2>

      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "10px",
          padding: "10px",
          borderRadius: "8px",
          background: timeLeft <= 10 ? "#ffcccc" : "#e7f3ff",
          color: timeLeft <= 10 ? "red" : "#333",
        }}
      >
        Time Left: {timeLeft}s
      </div>

      {!submitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <b>1. What is the capital of France?</b>
              <br />
              <label>
                <input type="radio" name="q1" value="Paris" /> Paris
              </label>
              <br />
              <label>
                <input type="radio" name="q1" value="London" /> London
              </label>
              <br />
              <label>
                <input type="radio" name="q1" value="Rome" /> Rome
              </label>
              <br />
              <label>
                <input type="radio" name="q1" value="Berlin" /> Berlin
              </label>
            </div>

            <div>
              <b>2. Which language is used for web apps?</b>
              <br />
              <label>
                <input type="radio" name="q2" value="JavaScript" /> JavaScript
              </label>
              <br />
              <label>
                <input type="radio" name="q2" value="Python" /> Python
              </label>
              <br />
              <label>
                <input type="radio" name="q2" value="C++" /> C++
              </label>
              <br />
              <label>
                <input type="radio" name="q2" value="Java" /> Java
              </label>
            </div>

            <div>
              <b>3. Who developed React?</b>
              <br />
              <label>
                <input type="radio" name="q3" value="Facebook" /> Facebook
              </label>
              <br />
              <label>
                <input type="radio" name="q3" value="Google" /> Google
              </label>
              <br />
              <label>
                <input type="radio" name="q3" value="Microsoft" /> Microsoft
              </label>
              <br />
              <label>
                <input type="radio" name="q3" value="Amazon" /> Amazon
              </label>
            </div>

            <div>
              <b>4. What does HTML stand for?</b>
              <br />
              <label>
                <input
                  type="radio"
                  name="q4"
                  value="Hyper Text Markup Language"
                />{" "}
                Hyper Text Markup Language
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="q4"
                  value="Home Tool Markup Language"
                />{" "}
                Home Tool Markup Language
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="q4"
                  value="Hyperlinks and Text Markup Language"
                />{" "}
                Hyperlinks and Text Markup Language
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="q4"
                  value="Hyper Tool Markup Language"
                />{" "}
                Hyper Tool Markup Language
              </label>
            </div>

            <div>
              <b>5. Which company developed JavaScript?</b>
              <br />
              <label>
                <input type="radio" name="q5" value="Netscape" /> Netscape
              </label>
              <br />
              <label>
                <input type="radio" name="q5" value="Microsoft" /> Microsoft
              </label>
              <br />
              <label>
                <input type="radio" name="q5" value="Google" /> Google
              </label>
              <br />
              <label>
                <input type="radio" name="q5" value="Apple" /> Apple
              </label>
            </div>

            <div>
              <b>6. What is the use of CSS?</b>
              <br />
              <label>
                <input type="radio" name="q6" value="Styling web pages" />{" "}
                Styling web pages
              </label>
              <br />
              <label>
                <input type="radio" name="q6" value="Structuring web pages" />{" "}
                Structuring web pages
              </label>
              <br />
              <label>
                <input type="radio" name="q6" value="Programming logic" />{" "}
                Programming logic
              </label>
              <br />
              <label>
                <input type="radio" name="q6" value="Database management" />{" "}
                Database management
              </label>
            </div>

            <div>
              <b>7. Which tag is used to create a hyperlink in HTML?</b>
              <br />
              <label>
                <input type="radio" name="q7" value="<a>" /> &lt;a&gt;
              </label>
              <br />
              <label>
                <input type="radio" name="q7" value="<link>" /> &lt;link&gt;
              </label>
              <br />
              <label>
                <input type="radio" name="q7" value="<href>" /> &lt;href&gt;
              </label>
              <br />
              <label>
                <input type="radio" name="q7" value="<hyper>" /> &lt;hyper&gt;
              </label>
            </div>

            <div>
              <b>8. What is the virtual DOM?</b>
              <br />
              <label>
                <input
                  type="radio"
                  name="q8"
                  value="A lightweight copy of the real DOM"
                />{" "}
                A lightweight copy of the real DOM
              </label>
              <br />
              <label>
                <input type="radio" name="q8" value="A database" /> A database
              </label>
              <br />
              <label>
                <input type="radio" name="q8" value="A server" /> A server
              </label>
              <br />
              <label>
                <input type="radio" name="q8" value="A CSS framework" /> A CSS
                framework
              </label>
            </div>

            <div>
              <b>9. Which hook is used for state management in React?</b>
              <br />
              <label>
                <input type="radio" name="q9" value="useState" /> useState
              </label>
              <br />
              <label>
                <input type="radio" name="q9" value="useEffect" /> useEffect
              </label>
              <br />
              <label>
                <input type="radio" name="q9" value="useRef" /> useRef
              </label>
              <br />
              <label>
                <input type="radio" name="q9" value="useContext" /> useContext
              </label>
            </div>

            <div>
              <b>10. What does API stand for?</b>
              <br />
              <label>
                <input
                  type="radio"
                  name="q10"
                  value="Application Programming Interface"
                />{" "}
                Application Programming Interface
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="q10"
                  value="Advanced Programming Instruction"
                />{" "}
                Advanced Programming Instruction
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="q10"
                  value="Application Program Internet"
                />{" "}
                Application Program Internet
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="q10"
                  value="Applied Programming Interface"
                />{" "}
                Applied Programming Interface
              </label>
            </div>
          </div>

          <button
            type="submit"
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              background: "#007bff",
              border: "none",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      ) : (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            borderRadius: "10px",
            background: "#e8ffe8",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Your Score: {score} / 10
        </div>
      )}
    </div>
  );
}

export default MainArea;
