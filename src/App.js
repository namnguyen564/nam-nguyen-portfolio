import React, { useState } from "react";
import "./index.css";
import "./main.css";
function App() {
  const [wordleModalVisible, setWordleModalVisible] = useState(false);
  const [instanamModalVisible, setInstanamModalVisible] = useState(false);
  const [trivialModalVisible, setTrivialModalVisible] = useState(false);
  const [namifyModalVisible, setNamifyModalVisible] = useState(false);
  const [contactModalVisible, setContactModalVisible] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/wordle1.png", "/wordle2.png"];

  const instanam = [
    "/instanam1.png",
    "/instanam2.png",
    "/instanam4.png",
    "/instanam3.png",
    "/instanam6.png",
    "/instanam5.png",
  ];

  const trivial = [
    "trivial2.png",
    "trivial1.png",
    "trivial.png",
    "trivial3.png",
    "trivial4.png",
    "trivial5.png",
    "trivial6.png",
  ];

  const namify = ["namify2.png", "namify1.png", "namify4.png", "namify3.png"];

  function goToNextImage(imageSet) {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex + 1 < imageSet.length) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  }

  function goToPreviousImage(imageSet) {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageSet.length - 1 : prevIndex - 1
    );
  }

  return (
    <div>
      <div
        id="links"
        class="fixed right-0 flex flex-row items-end gap-10 mt-[30px] pl-[700px]"
      >
        <div class="flex flex-col items-center justify-center">
          <img
            id="contacticon"
            class="w-[40%] h-[40%] mt-0"
            src={process.env.PUBLIC_URL + "/contact2.png"}
            alt="contact screenshot"
            onClick={() => setContactModalVisible(true)}
          />
          <h3 class="inline-block text-1xl" id="contacticon">
            Contact Me
          </h3>
        </div>

        <div class="flex flex-col items-center justify-center">
          <a
            href="https://resume.io/r/H8h1xsirJ"
            target="_blank"
            flex
            flex-col
            items-center
            justify-center
            class="flex flex-col items-center justify-center"
          >
            <img
              id="resumeicon"
              class="w-[40%] h-[40%] mt-0"
              src={process.env.PUBLIC_URL + "/resume1.png"}
              alt="resume screenshot"
            />
          </a>
          <h3 class="inline-block text-1xl" id="resumeicon">
            Resume
          </h3>
        </div>
        <div class="flex flex-col items-center justify-center">
          <a
            href="https://www.linkedin.com/in/nam-nguyen-59413b23a/"
            target="_blank"
            flex
            flex-col
            items-center
            justify-center
            class="flex flex-col items-center justify-center"
          >
            <img
              id="linkedinicon"
              class="w-[40%] h-[40%] mt-0 cursor-pointer"
              src={process.env.PUBLIC_URL + "/linkedin1.png"}
              alt="linkedin screenshot"
            />
          </a>
          <h3 class="inline-block text-1xl" id="linkedinicon">
            Linked In
          </h3>
        </div>

        <div class="flex flex-col items-center justify-center">
          <a
            href="https://github.com/namnguyen564"
            target="_blank"
            flex
            flex-col
            items-center
            justify-center
            class="flex flex-col items-center justify-center"
          >
            <img
              id="githubicon"
              class="w-[40%] h-[40%] mt-0"
              src={process.env.PUBLIC_URL + "/github1.png"}
              alt="github screenshot"
            />
          </a>
          <h3 class="inline-block text-1xl" id="githubicon">
            Github
          </h3>
        </div>
      </div>

      <header id="title" class="text-8xl pt-[30px] pl-[70px]">
        Hey, I'm
      </header>
      <header id="title" class="text-8xl  pt-[30px] pl-[70px]">
        Nam Nguyen
      </header>
      <h2 class="text-4xl  pt-[0px] pl-[70px]" id="webd">
        Web Designer
      </h2>

      <img
        class="fixed right-0 flex gap-10 mr-20 top-[140px] rounded-full "
        src={process.env.PUBLIC_URL + "/photo2.jpeg"}
        style={{ height: "350px", width: "350px" }}
      ></img>

      <h3 class="text-1xl pt-[20px] pl-[70px] w-1/2 " id="description">
        Recent graduate of a software engineering boot-camp, with have a solid
        foundation in both front-end and back-end web development. Highly
        motivated and enthusiastic about continuing to grow and learn as a web
        developer.
      </h3>
      <div
        style={{
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          marginLeft: "66px",
          width: "70%",
          marginTop: "10px",
        }}
      >
        <button
          id="boxcolor"
          style={{
            border: "none",
            color: "black",
            padding: "12px 24px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            padding: "12px 20px" /* add left and right padding here */,
            fontSize: "16px",
            // margin: "4px 2px",
            cursor: "default",
            paddingLeft: "20px",
            margin: "4px 10px 10px 4px",
            // marginRight: "30px",
          }}
        >
          HTML
        </button>
        <button
          id="boxcolor"
          style={{
            border: "none",
            color: "black",
            padding: "12px 24px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "default",
            margin: "4px 10px 10px 4px",
          }}
        >
          CSS
        </button>

        <button
          id="boxcolor"
          style={{
            border: "none",
            color: "black",
            padding: "12px 24px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            margin: "4px 10px 10px 4px",
            cursor: "default",
          }}
        >
          JavaScript
        </button>
        <button
          id="boxcolor"
          style={{
            border: "none",
            color: "black",
            padding: "12px 24px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            margin: "4px 10px 10px 4px",
            cursor: "default",
          }}
        >
          Python
        </button>
        <button
          id="boxcolor"
          style={{
            border: "none",
            color: "black",
            padding: "12px 24px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            margin: "4px 10px 10px 4px",
            cursor: "default",
          }}
        >
          Flask
        </button>
        <button
          id="boxcolor"
          style={{
            border: "none",
            color: "black",
            padding: "12px 24px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            margin: "4px 10px 10px 4px",
            cursor: "default",
          }}
        >
          Git / Version Control
        </button>
        <button
          id="boxcolor"
          style={{
            border: "none",
            color: "black",
            padding: "12px 24px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            margin: "4px 10px 10px 4px",
            cursor: "default",
          }}
        >
          SQL / PostgreSQL
        </button>
        <button
          id="boxcolor"
          style={{
            border: "none",
            color: "black",
            padding: "12px 24px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            margin: "4px 10px 10px 4px",
            cursor: "default",
          }}
        >
          NodeJS/ Express
        </button>
        <button
          id="boxcolor"
          style={{
            border: "none",
            color: "black",
            padding: "12px 24px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            margin: "4px 10px 10px 4px",
            cursor: "default",
          }}
        >
          React
        </button>
        <button
          id="boxcolor"
          style={{
            // backgroundColor: "yellow",
            border: "none",
            color: "black",
            padding: "12px 24px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            margin: "4px 10px 10px 4px",
            cursor: "default",
          }}
        >
          Tailwind
        </button>
      </div>

      {/* <h3 className="text-center my-4 text-[20px]" id="latest">
        Latest Projects:
      </h3> */}
      <div class="flex justify-center  space-x-[138px] mt-[20px]">
        {/* wordle */}
        <div class="flex flex-col items-center justify-center ml-[70px]">
          <h3 class="inline-block text-1xl" id="title">
            Wordle Game
          </h3>

          <img
            id="wordle"
            class="w-[240px] h-[140px] border border-grey-500 mt-[26px]"
            src={process.env.PUBLIC_URL + "/wordle1.png"}
            style={{}}
            alt="Wordle game screenshot"
            onClick={() => setWordleModalVisible(true)}
          />
        </div>

        {wordleModalVisible && (
          <div
            className={`modal fixed left-0 top-0 z-100 w-screen  ${
              wordleModalVisible ? "" : "hidden"
            }`}
          >
            <div
              className="modal-content bg-white p-4 rounded-lg absolute"
              class="contactmodal"
            >
              <span
                className="close absolute right-2 top-2 text-black hover:text-white cursor-pointer"
                onClick={() => {
                  setWordleModalVisible(false);
                  setCurrentImageIndex(0);
                }}
              >
                &times;
              </span>

              <h1 className="text-6xl ml-[30px] mt-[20px]" id="boxtitle">
                Wordle Game
              </h1>

              <h3 className="mt-4  ml-[30px] mt-[40px] " id="description">
                Deployed Site:{" "}
                <a
                  href="https://namnguyen564.github.io/wordle-ga/"
                  class="text-blue-500"
                  target="_blank"
                >
                  https://namnguyen564.github.io/wordle-ga/
                </a>
              </h3>

              <h3 id="description" class=" ml-[30px] mt-[20px]">
                Github Repository:{" "}
                <a
                  href="  https://namnguyen564.github.io/wordle-ga/"
                  class="text-blue-500"
                  target="_blank"
                >
                  https://namnguyen564.github.io/wordle-ga/
                </a>
              </h3>
              <h3 className="w-[40%] mt-[60px] ml-[30px]" id="description">
                My HTML, JavaScript, and CSS wordle game is an exciting and
                challenging game that tests players' word-guessing abilities.
                Based on the popular game Wordle, this clone generates a new
                word for players to guess on each retry or reload. The
                application consist of responsive CSS front-end user interface.
              </h3>
              <div>
                <img
                  src={images[currentImageIndex]}
                  alt={`Image ${currentImageIndex}`}
                  className="h-[40] w-[40%] fixed right-0 flex gap-10 mr-[150px] top-[200px] "
                  id="displayphotos"
                />
                <img
                  src={process.env.PUBLIC_URL + "/previous.png"}
                  alt={`Image ${currentImageIndex}`}
                  className=" fixed right-[38%] flex gap-10 mr-[150px] top-[70%] w-[30px]  "
                  onClick={() => goToPreviousImage(images)}
                />

                <img
                  src={process.env.PUBLIC_URL + "/next.png"}
                  class="fixed right-[0%] flex gap-10 mr-[150px] top-[70%] w-[30px]  "
                  onClick={() => goToNextImage(images)}
                ></img>
              </div>
            </div>
          </div>
        )}
        {/* wordle end */}

        <div class="flex flex-col items-center justify-center">
          <h3 class="inline-block text-1xl w-[140px] mb-2" id="title">
            Instanam (Social Media Flask App)
          </h3>
          <img
            id="instanam"
            class="w-[240px] h-[140px] border border-grey-500 mt-0"
            src={process.env.PUBLIC_URL + "/instanam1.png"}
            style={{}}
            alt="instanam screenshot"
            onClick={() => setInstanamModalVisible(true)}
          />
        </div>
        {instanamModalVisible && (
          <div
            className={`modal fixed left-0 top-0 z-100 w-screen  ${
              instanamModalVisible ? "" : "hidden"
            }`}
          >
            <div className="modal-content bg-white p-4 rounded-lg absolute">
              <span
                className="close absolute right-2 top-2 text-black hover:text-white cursor-pointer"
                onClick={() => {
                  setInstanamModalVisible(false);
                  setCurrentImageIndex(0);
                }}
              >
                &times;
              </span>

              <h1 className="text-6xl ml-[30px] mt-[20px]" id="boxtitle">
                Instanam (Social Media Flask App)
              </h1>
              <h3 className="mt-4  ml-[30px] mt-[40px] " id="description">
                Deployed Site:{" "}
                <a
                  href=" https://web-production-6154.up.railway.app/"
                  class="text-blue-500"
                  target="_blank"
                >
                  https://web-production-6154.up.railway.app/
                </a>
              </h3>

              <h3 id="description" class=" ml-[30px] mt-[20px]">
                Github Repository:{" "}
                <a
                  href="https://github.com/namnguyen564/instanam"
                  class="text-blue-500"
                  target="_blank"
                >
                  https://github.com/namnguyen564/instanam
                </a>
              </h3>

              <h3 className="w-[40%] mt-[60px] ml-[30px]" id="description">
                My Flask application is a photo-sharing platform that provides
                users with an experience similar to Instagram. Users can easily
                sign up and log in to the platform, where they can view a feed
                of all the posts made by other users on the homepage.
                Additionally, users can view other profiles. The app also
                enables users to upload their own photos for other users to
                view. The application leverages SQL Postgres databases to store
                user information, including usernames, passwords, and user-post
                data, using GET and POST requests. This database provides users
                with a seamless experience while ensuring that their data is
                secure through password encryption (bcrypt) and easily
                accessible.
              </h3>

              <div>
                <img
                  src={instanam[currentImageIndex]}
                  alt={`Image ${currentImageIndex}`}
                  className="h-[40] w-[40%] fixed right-0 flex gap-10 mr-[150px] top-[200px] "
                  id="displayphotos"
                />
                <img
                  src={process.env.PUBLIC_URL + "/previous.png"}
                  class="fixed right-[38%] flex gap-10 mr-[150px] top-[70%] w-[30px]  "
                  onClick={() => goToPreviousImage(instanam)}
                ></img>

                <img
                  src={process.env.PUBLIC_URL + "/next.png"}
                  class="fixed right-[0%] flex gap-10 mr-[150px] top-[70%] w-[30px]  "
                  onClick={() => goToNextImage(instanam)}
                ></img>
              </div>
            </div>
          </div>
        )}
        <div class="flex flex-col items-center justify-center">
          <h3 class="inline-block text-1xl top-[20px]" id="description">
            Trivial (Node.js Trivia Game)
          </h3>
          <img
            id="trivial"
            class="w-[240px] h-[140px] border border-grey-500 mt-[35px]"
            src={process.env.PUBLIC_URL + "/trivial1.png"}
            style={{}}
            alt="trivialscreenshot"
            onClick={() => setTrivialModalVisible(true)}
          />
        </div>
        {trivialModalVisible && (
          <div
            className={`modal fixed left-0 top-0 z-100 w-screen  ${
              trivialModalVisible ? "" : "hidden"
            }`}
          >
            <div className="modal-content bg-white p-4 rounded-lg absolute">
              <span
                className="close absolute right-2 top-2 text-black hover:text-white cursor-pointer"
                onClick={() => {
                  setTrivialModalVisible(false);
                  setCurrentImageIndex(0);
                }}
              >
                &times;
              </span>

              <h1 className="text-6xl ml-[30px] mt-[20px]" id="boxtitle">
                Trivial (NODE.js Trivia Game)
              </h1>
              <h3 className="mt-4  ml-[30px] mt-[40px] " id="description">
                Deployed Site:{" "}
                <a
                  href="https://trivial-clone-production.up.railway.app/"
                  class="text-blue-500"
                  target="_blank"
                >
                  https://trivial-clone-production.up.railway.app/
                </a>
              </h3>

              <h3 id="description" class=" ml-[30px] mt-[20px]">
                Github Repository:{" "}
                <a
                  href=" https://github.com/namnguyen564/trivial"
                  class="text-blue-500"
                  target="_blank"
                >
                  https://github.com/namnguyen564/trivial
                </a>
              </h3>

              <h3 className="w-[40%] mt-[60px] ml-[30px]" id="description">
                My trivia application is a quiz platform that leverages Node.js
                and Express.js for its backend operations. The app features a
                user-friendly signup and login functionality, enabling users to
                create accounts and log in to access a range of quizzes. With
                its frontend API, the app can fetch quiz questions and render
                each quiz, providing users with a seamless and engaging
                experience. Users can even create their own quizzes, using a
                frontend form to add quiz questions to the database. The app
                utilizes a range of technologies, including bcrypt for
                authentication password hashing and axios for external API
                calls. The middleware of express-sessions and pg facilitates
                database queries, and the database itself is operated by
                postgreSQL.
              </h3>

              <div>
                <img
                  src={trivial[currentImageIndex]}
                  alt={`Image ${currentImageIndex}`}
                  className="h-[40] w-[40%] fixed right-0 flex gap-10 mr-[150px] top-[200px] "
                  id="displayphotos"
                />
                <img
                  src={process.env.PUBLIC_URL + "/previous.png"}
                  class="fixed right-[38%] flex gap-10 mr-[150px] top-[70%] w-[30px]  "
                  onClick={() => goToPreviousImage(trivial)}
                ></img>
                <img
                  src={process.env.PUBLIC_URL + "/next.png"}
                  class="fixed right-[0%] flex gap-10 mr-[150px] top-[70%] w-[30px]  "
                  onClick={() => goToNextImage(trivial)}
                ></img>
              </div>
            </div>
          </div>
        )}

        <div class="flex flex-col items-center justify-center">
          <h3 class="inline-block text-1xl w-[190px] " id="title">
            Namify (Personalised Spotify Player React App)
          </h3>
          <img
            id="namify"
            class="w-[240px] h-[140px] border border-grey-500 mt-[15px] mr-[50px]"
            src={process.env.PUBLIC_URL + "/namify1.png"}
            style={{}}
            alt="namifyscreenshot"
            onClick={() => setNamifyModalVisible(true)}
          />
        </div>
        {namifyModalVisible && (
          <div
            className={`modal fixed left-0 top-0 z-100 w-screen  ${
              namifyModalVisible ? "" : "hidden"
            }`}
          >
            <div className="modal-content bg-white p-4 rounded-lg absolute">
              <span
                className="close absolute right-2 top-2 text-black hover:text-white cursor-pointer"
                onClick={() => {
                  setNamifyModalVisible(false);
                  setCurrentImageIndex(0);
                }}
              >
                &times;
              </span>

              <h1 className="text-6xl ml-[30px] mt-[20px]" id="boxtitle">
                Namify (Personalised Spotify Player React App)
              </h1>
              <h3 className="mt-4  ml-[30px] mt-[40px] " id="description">
                Deployed Site:{" "}
                <a
                  href="https://namnguyen564.github.io/namify/"
                  class="text-blue-500"
                  target="_blank"
                >
                  https://namnguyen564.github.io/namify/
                </a>
              </h3>

              <h3 id="description" class=" ml-[30px] mt-[20px]">
                Github Repository:{" "}
                <a
                  href="https://github.com/namnguyen564/namify"
                  class="text-blue-500"
                  target="_blank"
                >
                  https://github.com/namnguyen564/namify
                </a>
              </h3>

              <h3 className="w-[40%] mt-[60px] ml-[30px]" id="description">
                My React app is a music player that leverages Spotify's API,
                enabling users to log in with their Spotify accounts and access
                a vast library of music. The app offers an intuitive search
                function for songs and artists, providing users with the ability
                to play music just like they would on the Spotify app. Users can
                also generate playlists of up to 20 songs by adding up to 5
                items (songs/artists) to their playlist. With its user-friendly
                interface and powerful features, my React app is the perfect
                tool for any music lover looking to enjoy their favorite tunes.
              </h3>

              <div>
                <img
                  src={namify[currentImageIndex]}
                  alt={`Image ${currentImageIndex}`}
                  className="h-[40] w-[40%] fixed right-0 flex gap-10 mr-[150px] top-[200px] "
                  id="displayphotos"
                />
                <img
                  src={process.env.PUBLIC_URL + "/previous.png"}
                  class="fixed right-[38%] flex gap-10 mr-[150px] top-[70%] w-[30px]  "
                  onClick={() => goToPreviousImage(namify)}
                ></img>
                <img
                  src={process.env.PUBLIC_URL + "/next.png"}
                  class="fixed right-[0%] flex gap-10 mr-[150px] top-[70%] w-[30px]  "
                  onClick={() => goToNextImage(namify)}
                ></img>
              </div>
            </div>
          </div>
        )}
        {contactModalVisible && (
          <div
            className={`modal fixed left-0 top-0 z-100 w-screen  ${
              contactModalVisible ? "" : "hidden"
            }`}
          >
            <div className="modal-content bg-white p-4 rounded-lg absolute">
              <span
                className="close absolute right-2 top-2 text-black hover:text-white cursor-pointer"
                onClick={() => {
                  setContactModalVisible(false);
                }}
              >
                &times;
              </span>

              <div
                className="flex flex-col items-center justify-center h-screen pb-[600px]"
                // class="contactmodal"
              >
                <h1 class="text-6xl mt-20" id="boxtitle">
                  Contact Me
                </h1>

                <h3 class="mt-4 text-3xl mt-[100px]" id="description">
                  Email: nammy564@gmail.com
                </h3>

                <h3 class="mt-4 text-3xl" id="description">
                  Phone: 0490826818
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
