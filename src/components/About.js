import React from 'react';
import car from './note.jpg';

export default function About() {
  return (
    <div className="about-wrapper container my-4 px-3">
      <style>{`

      
        .about-wrapper {
          background-color: #f8f9fc;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          padding: 2rem 1.5rem;
          max-width: 100%;
        }

        .about-heading {
          font-size: 2.2rem;
          font-weight: bold;
          text-align: center;
          color: #0d6efd;
          margin-bottom: 2rem;
        }

        .accordion-button {
          background-color: #ffffff !important;
          color: #343a40 !important;
          font-weight: 600;
          border-radius: 8px !important;
          box-shadow: none;
        }

        .accordion-button:hover {
          background-color: #e9f2ff !important;
        }

        .accordion-body {
          background-color: #f1f4f9;
          border-radius: 8px;
          padding: 1rem 1.2rem;
        }

        .accordion-body ul {
          padding-left: 1rem;
        }

        .accordion-body li {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #444;
        }

       .image-section {
    text-align: center;
    margin-top: 2.5rem;
  }

  .image-section img {
    max-width: 100%;
    width: 300px;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease;
  }

  .image-section img:hover {
    transform: scale(1.03);
  }

  @media (max-width: 576px) {
    .image-section img {
      width: 220px;
    }
  }
        }

      `}</style>

      <h1 className="about-heading">Welcome to Smaranify</h1>

      <div className="accordion" id="accordionExample">
        {/* SECTION 1 */}
        <div className="accordion-item mb-3">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              💡 What is Smaranify?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <ul>
              <li> Smaranify is inspired by the Sanskrit word <b>“Smaran” (स्मरण)</b> — meaning to remember.</li>
              <li> Built for thinkers, dreamers, students, professionals everyone. Smaranify helps you turn fleeting thoughts into lasting clarity.</li>
             <li> Whether it's a sudden idea, a personal journal entry, a class summary, or a work to-do list — Smaranify ensures you never lose a thought worth keeping.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="accordion-item mb-3">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              📘 Key Features
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body">
              <ul>
                <li>Create, edit, and delete notes instantly</li>
                <li>Organize with tags: Personal, Professional, Reminders</li>
                <li>Responsive across all devices</li>
                <li>Visual UI with elegant card-based layout</li>
                <li>Secure notes accessible after login</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="accordion-item mb-3">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
              🙌 Credits
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body">
            Developed with ❤️ by :  <strong>  Pranay </strong>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="image-section">
        <img  id="image"src={car} alt="NoteStack App Preview" />
      </div>
    </div>
  );
}
