import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderGreaterNoida from '/pages/components/HeaderGreaterNoida';
import 'animate.css';
import FooterGreaterNoida from '../components/FooterGreaterNoida';
import GreterNoidaParentsScrollspyMenu from '../components/GreterNoidaParentsScrollspyMenu';
// import Image from 'next/image';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const ParentTeacherMeeting = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WOWJS = require('wowjs');
      const wow = new WOWJS.WOW({
        live: false,
      });
      wow.init();
    }
  }, []); // Runs once on mount

  return (
    <>
      <Head>
      <title>Parents Teachers Meeting | Ramagya School</title>
      <meta name="description" content=">Parents Teachers Meeting" />
      <meta name="keywords" content=">Parents Teachers Meeting" />
      <link rel="canonical" href="https://ramagyaschool.com/noida/parents-teacher-meeting" />
      </Head>
      <HeaderGreaterNoida />
      {/* Main banner section of the page */}
      <section className="section banner-sec banner-section-admission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                 Parents Teachers Meeting!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container-fluid my-5'>
        <div className="container">
          <div className='row'>
            <div className="col-md-3 col-12">
               <GreterNoidaParentsScrollspyMenu />
            </div>
            <div className="col-md-9 col-12">
            <div className="about-intro">
            <div className="sec-title3 text-left mb-45">
              <h2 className="title black-color">Importance And Benefits</h2>
            </div>
            <p>
              Learning is a complex phenomenon. A child faces difficulties in learning. A
              child faces mental stress and several identified and unidentified
              challenges. Ramagya believes that holistic development of a child depends
              upon the hard work of student, parent, and teacher. These three stakeholders
              integrated effort give the best learning outcomes.
            </p>
            <p>
              Parent teacher meeting covers the distance among these three pillars of a
              student’s life. PTM opens a communication channel where a parent is a
              partner. Active participation of a parent brings a massive change in kid’s
              academic performance.
            </p>
            <p>
              Ramagya knows that it is necessary to share responsibility and
              accountability with parents for the holistic development of a child. A
              parent is directly responsible for a child’s progress at home and in the
              school. In fact, it is necessary to develop a strong bridge between parent
              and educator. Parent-teacher meeting is an opportunity to exchange
              observation of a child with each other. Sharing daily experience and
              observation provide a wider prospect for parent and teacher to plan, prepare
              and execute planning for better learning outcome of a child. Teachers
              discuss and share the overall personality of a child with the parents i.e.
              his/her behavior, manner, habit, attitude, learning styles, relation to self
              and society, etc. PTM is a junction to meet the needs of a child.
            </p>
            <hr />
           
            <div className="sec-title3 text-left mb-45">
              <h2 className="title black-color">
                Why does Ramagya feel the necessity for conducting a parent teaching
                meeting ?
              </h2>
            </div>
            <ul className="custom-bullets">
              <li>
                Great opportunity for parent and teacher to develop a healthy and strong
                relationship for the holistic development of a child this platform helps
                parent and teacher to develop a rapport and build a strong relationship to
                understand and determine the need of a child. Developing an integrated
                child demands to combine efforts from different stakeholders.
              </li>
              <li>
                Great opportunity to open two-way communication for the welfare of kid
                Two-way communication has great values for the proper development of a
                child. Parent, as well as teacher, share their effort on a common platform
                for the welfare of a child. Parent works at home on the feedback and
                observation shared by the teacher at school. Teacher modifies his way of
                handling the kids on school premises. The teacher keeps vigilant eyes on
                the mental and physical progress of a child. Parent and teacher follow
                each other after school hours also to ensure whether their effort is going
                on the right track or not.
              </li>
              <li>
                Great platform for parent and teacher to share insights and information
                for the holistic development of a child Parent and teacher shares each
                other minute observation of a child i.e. how does a child behave with
                friends, his confidence level in the class, his self-esteem,
                self-awareness, decision making skill, interest in learning, special
                interest, hobbies, and classroom performance. A child is pure mud. Parent
                and teacher try to grow a lotus on different favourable and unfavourable
                circumstances. Teacher’s works on parent feedback at school and parent
                work on teacher feedback at home.
              </li>
              <li>
                Great platform for an educator to know a child’s weakest and strongest
                areas from parent’s observation Parent and teacher identify weak areas and
                try hard to improve those points. It is not a platform to make it just a
                complaining against each other. Both stakeholders should not deviate from
                a child’s concern. Proper education of a child is our prime concern.
                Parent and teacher’s personality is just value zero. Out ego has no great
                value if we could not be a wise parent and teacher. Our prime concern is
                to shape a child into an integrated personality. PTM provides this big
                opportunity to work for the child.
              </li>
            </ul>
            {/* <hr /> */}
            <br />
            <div className="sec-title3 text-left mb-45">
              <h2 className="title black-color">How is PTM conducted at Ramagya</h2>
            </div> <br />
            <div className="bold-text mb-22">Pre PTM</div>
            <ul className="custom-bullets">
              <li>
                Ramagya understands that today the parents go through a busy schedule and
                it is always feasible for them to be available on the weekends and hence
                the PTMs at Ramagya are held on Saturdays.
              </li>
              <li>
                The students are informed about the PTMs a week prior and are given a
                consent form to be signed by their parents that helps the teachers in
                ensuring the attendees. If the parents face any issues in coming on a
                particular date then they are given a day and time post the PTM to visit
                school and met the teacher to discuss the progress of their ward.
              </li>
            </ul>
            <hr />
            
            <div className="bold-text mb-22">PTM</div>
            <p>
              On the day of the PTM, parents meet the class teacher and the all the
              subject teachers for a detailed report of their ward that includes :
            </p>
            <ul className="custom-bullets">
              <li>
                Students&#39; punctuality, discipline, class behavior, co-curricular
                activities.
              </li>
              <li>The academic performance is shared in-depth.</li>
              <li>The areas of strength and improvement are shared with the parents</li>
              <li>
                Subject teachers provide a chasmic knowledge about the performance of the
                child in the subject.
              </li>
            </ul>
            
            <p>
              Teachers also share the catechism that they’ll be using for the improvement
              of the students with the parents in order to maintain transparency.
              Thereafter, the class teacher gets the PTM registers signed and filled by
              the parents where the comments related to the child’s subject-wise progress,
              behavior and punctuality are written and the suggestions from the parents
              are requested.
            </p>
            <ul className="custom-bullets">
              <li>
                The parents are then guided to meet the Baal Saathee team for discussing
                the overall development of their child that concerns the mental and
                physical wellbeing of a child.
              </li>
            </ul>
            <br />
            <p>
              Not only academics and the emotional well being of a Ramagyan are taken care
              of but also the Sports activities are taken up with utmost seriousness.
              During the PTM, Sports coaches are always onboard for projecting knowledge
              on the sports fitness of a child :
            </p>
            <ul className="custom-bullets">
              <li>
                They enlighten the parents by telling about all the achievements of their
                ward in the sort of interest.
              </li>
              <li>
                They discuss upon the ways of improvement (if any) required at the child&#39;s
                end.
              </li>
              <li>
                They also embrace any suggestion given by the parents for better practice
                of their ward.
              </li>
            </ul>
            <hr />
            
            <div className="bold-text mb-22">Post PTM</div>
            <p>
              The parents who fail to attend the PTMs due to unavoidable circumstances are
              called up and given a scheduled day and time to visit the school. On this
              day they undergo the same process of meeting the class teacher, subject
              teachers and the Baal Saathee team.
            </p>
            <p>
              And, if because of any unavoidable circumstances, the parents fail to show
              up even after the second call, then the class teacher along with a baal
              saathee team member and a sports coach, is liable to visit the student’s
              house.
            </p>
            <p>
              Ramagya takes up the PTMs very seriously, as we all know that holistic
              development of our young minds can only take place when there is a joint
              effort of the parents and teachers.
            </p>
          </div>

           </div>
          </div>
        </div>
      </section>
    
      <FooterGreaterNoida />
    </>
  );
};

export default ParentTeacherMeeting;
