import React, { useState, useEffect } from 'react';
import nursePhoto from '../../../assets/img/WhatsApp Image 2024-09-29 at 22.08.00_c0accd57.jpg';
import './Nurse.css'
import Header from '../../Essentials/Header';
import Footer from '../../Essentials/Footer';
import { useNavigate } from 'react-router-dom';

const NurseProfile = () => {
  const [nurseData, setNurseData] = useState(null);
  const navigate = useNavigate();

  const hardcodedData = {
    name: "Somebody",
    address: "Address:VESIT",
    degree: "Bachelor of Science in Nursing (BSN)",
    certificates: [
      "Advanced Cardiac Life Support (ACLS) Certified",
      "Pediatric Nursing Certification Board (PNCB) Certified",
      "Certified Nurse Educator (CNE)"
    ],
    documents: [
      {
        name: "Nursing License",
        url: "/path/to/nursing-license.pdf"
      },
      {
        name: "CPR Certification",
        url: "/path/to/cpr-certification.pdf"
      },
      {
        name: "Background Check",
        url: "/path/to/background-check.pdf"
      },
      {
        name: "Immunization Records",
        url: "/path/to/immunization-records.pdf"
      }
    ],
    reviews: [
      { id: 1, reviewer: "Ishan Joshi", feedback: "Jane provided exceptional care and attention to my needs." },
      { id: 2, reviewer: "Rakshit Sharma", feedback: "She was very compassionate and knowledgeable, making me feel safe." },
      { id: 3, reviewer: "Veydant Sharma", feedback: "Highly professional and caring; I would recommend her to anyone." },
      { id: 3, reviewer: "Aditya Ahuja", feedback: "Very Sophisticated and good service" },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      setNurseData(hardcodedData);
    }, 1000);
  }, []);

  if (!nurseData) return <div>Loading...</div>;

  function bookCompanion(){
    localStorage.setItem("nurseData", JSON.stringify(nurseData));
    navigate("/booking");
  }

  return (
    <div>
      <Header />
      <hr className="mt-0" />
      <div className="conatiner nurse-profile-container row p-2">
        
        <div className='nursePhoto col'>
          <img src={nursePhoto} alt="" />
        </div>

      <div className="nurse-info col">
        <h1>{nurseData.name}</h1>
        <p><strong>Address:</strong> {nurseData.address}</p>
        <p><strong>Degree:</strong> {nurseData.degree}</p>

        <div className="certificates-section">
          <h2>Certificates</h2>
          <ul>
            {nurseData.certificates.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

        <div className="documents-section">
          <h2>Documents</h2>
          <ul>
            {nurseData.documents.map((doc, index) => (
              <li key={index}>
                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                  {doc.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <h2>Previous Reviews</h2>
        <div className="reviews-section">
          {nurseData.reviews.map((review) => (
            <div key={review.id} className="review">
              <strong>{review.reviewer}</strong>
              <p>{review.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <center>
    <button className='btn m-5 book-btn' onClick={bookCompanion}>Book companion</button>
    </center>
    <Footer />
    </div>
  );
};

export default NurseProfile;