// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './components/GlassCard';
import Sidebar from './components/Sidebar';
import ECGLoader from './components/ECGLoader';
import Footer from './components/Footer';



import { initializeCardEffects } from './components/cardsAnimation';
import SocialLinks from './components/SocialLinks';







const Section = ({ id, title, children, bg, cards }) => (
  <section id={id} className="scroll-section" style={{ backgroundColor: `var(${bg})` }}>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="section-content"
    >
      <h1>{title}</h1>
      <div className="ecg-divider" />
      {cards ? <div className="cards-container">{children}</div> : <p>{children}</p>}
    </motion.div>
  </section>
);

function App() {
  const [showMain, setShowMain] = useState(false);

    useEffect(() => {
    if (showMain) initializeCardEffects();
  }, [showMain]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progressBar = document.getElementById('scrollProgressBar');
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  const timer = setTimeout(() => setShowMain(true), 4000);
  return () => clearTimeout(timer);
}, []);


  useEffect(() => {
  const pfp = document.querySelector('.hero-pfp');
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!pfp || isTouch) return;

  const handleMouseMove = (e) => {
    const rect = pfp.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    pfp.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = () => {
    pfp.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    pfp.style.transition = 'transform 0.3s ease';
    setTimeout(() => {
      pfp.style.transition = '';
    }, 300);
  };

  pfp.addEventListener('mousemove', handleMouseMove);
  pfp.addEventListener('mouseleave', resetTilt);

  return () => {
    pfp.removeEventListener('mousemove', handleMouseMove);
    pfp.removeEventListener('mouseleave', resetTilt);
  };
}, []);



  return (
    <div>
      <div className="background">
        <div className="gradient-blob"></div>
        <div className="gradient-blob"></div>
        <div className="gradient-blob"></div>
        <div className="particles">
  {Array.from({ length: 40 }).map((_, i) => (
    <span key={i} className="particle" style={{
      left: `${Math.random() * 100}%`,
      top: `${100 + Math.random() * 50}vh`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${10 + Math.random() * 20}s`
    }} />
  ))}
</div>


      </div>
      {showMain && <Sidebar />}

      {showMain && <SocialLinks />}



      <div className="scroll-progress-container">
  <div className="scroll-progress-bar" id="scrollProgressBar" />
</div>


      <AnimatePresence>
        {!showMain && <ECGLoader onFinish={() => setShowMain(true)} />}

      </AnimatePresence>

      {showMain && (
        <>
          <Section id="hero" title="" bg="--yinmn-blue">
  <div className="hero-glow">
    <img src="/profile.jpeg" alt="Ali Ashrafy" className="hero-pfp" />
    <h1 className="hero-title">Ali Ashrafy</h1>
    <p className="hero-subtitle">Medical Student</p>
  </div>
</Section>


          <Section id="about" title="About Me" bg="--air-superiority-blue" cards>
            <GlassCard title="Background">
                <p>
                  I'm a first-year med student at UNSW with a passion for surgery and healthcare tech. 
                  My journey into medicine was sparked by curiosity and solidified through real patient experiences.
                </p>
                <ul class="about-list">
                  <li>🏅 Recipient of >$100K AUD in scholarships</li>
                  <li>🛠️ Currently maintaining a high-distinction grade</li>
                </ul>
                <p>
                  Coffee-powered. Terminally curious. Always building something.
                </p>


            </GlassCard>
            <GlassCard title="On LinkedIn">
                <div className="linkedin-embed-wrapper">
                  <iframe
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7333305267188584449?collapsed=1" // replace with actual URN
                    title="LinkedIn Post"
                    frameBorder="0"
                    allowFullScreen
                    href="https://www.linkedin.com/posts/ali-ashrafy-711a6a295_assc2025-medicalstudentjourney-firstyearmed-activity-7333305269076054018-ZuyC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeGtX0BqDoEzzf9ZEJnlfTkhbgDX2OArfc"
                  ></iframe>
                </div>
              </GlassCard>



          </Section>

          <Section id="experience" title="Outside Medicine" bg="--uranian-blue" cards>
            <GlassCard title="Tutoring Services" link="https://ashrafy.au/tutoring">
                <>
                  <p>📚 Tutored over <strong>10 happy students</strong> with excellent results.</p>
                  <p>👨‍🏫 Years 7–10, and 11–12 HSC:</p>
                  <ul>
                    <li>Mathematics Advanced</li>
                    <li>Mathematics Extension 1 & 2</li>
                    <li>Physics</li>
                    <li>Chemistry</li>
                  </ul>
                  
                </>
                
              </GlassCard>


            <GlassCard title="Robotics & Programming" link="https://ashrafy.tech">
                  <ul>
                    <li>Lead Programmer & Team Captain, Iona Fusion Robotics Team</li>
                    <li>Specialised in autonomous navigation, computer vision & strategy</li>
                    <li>Freelance developer - available for custom coding projects</li>
                    <li>
                      Visit my tech portfolio: 👇
                    </li>
                  </ul>
            </GlassCard>

          </Section>

          <Section id="research" title="Currently Working On..." bg="--battleship-gray" cards>
            <GlassCard title="ML for Rotator Cuff Retears">
              <strong className="card-badge">Coming Soon</strong>
                <p>
                  <br></br>
                  I'm currently developing a predictive model using machine learning to identify patients at high risk of rotator cuff retear following surgical repair.
                  
                  This project has the potential to significantly impact orthopaedic workflows, reduce complications, and tailor recovery to individual needs.
                </p>
              
            </GlassCard>

            <GlassCard title="AR/VR Anatomy Education">
              <p>
                <strong className="card-badge">Coming Soon</strong>
                <br /><br />
                Building an immersive AR/VR app to help med students grasp anatomy through 3D, interactive models.
                <br /><br />
                Designed to boost spatial understanding and retention, making anatomy more intuitive and engaging.
              </p>
              
            </GlassCard>

          </Section>

          <Section id="timeline" title="Journey So Far" bg="--air-superiority-blue">
  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-content">
        <h3>📊 2023 - Team Captain and Lead Programmer @ Iona Fusion</h3>
        <p>Led our team to 2nd place in the annual Asia-Pacific FRC Championships.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-content">
        <h3>🎓 2024 – Final Year of High School</h3>
        <p>Graduated Year 12 at St Columba Anglican School with an ATAR of 99.45.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-content">
        <h3>🩺 Feb 2025 – Med School Begins</h3>
        <p>Moved to Sydney with a passion for medicine and drive for opportunities.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-content">
        <h3>📊 May 2025 – Began Orthopaedics Research</h3>
        <p>Currently working on an ML algorithm to predict patients at high-risk of postoperative rotator cuff retear.</p>
      </div>
    </div>
  </div>
</Section>


          <Section id="contact" title="Get In Touch" bg="--antiflash-white">
            Email: {""}<a href="mailto:ali@ashrafy.au"> ali@ashrafy.au </a> | Let's connect and collaborate.
          </Section>
          <Footer />

        </>
      )}
    </div>
  );

  
}

export default App;