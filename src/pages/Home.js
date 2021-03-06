// import Courses from "../components/Courses";
// import Slider from "../components/Slider";
// import courseData from "../data/courseData";

// const Home = () => {
//   return (
//     <>
//       <Slider />
//       <h1 className="text-center">Courses</h1>
//       <Courses data={courseData} />
//     </>
//   );
// };

// export default Home;


import React from 'react'
import Slider from '../components/Slider'
import Courses from '../components/Courses'
import courseData from "../data/courseData"

const Home = () => {
    return (
        <div>
          <Slider/>
          <Courses data={courseData}/>
        </div>
    )
}

export default Home
