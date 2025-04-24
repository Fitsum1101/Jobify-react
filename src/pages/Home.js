import React from "react";
import Nav from "../compenets/Navebar/Nav";
import Job from "../compenets/job/Job";
import logo from "../images/313.jpg";

const jobs = [
  {
    brandName: "Alpha Technologies",
    logo: logo,
    title: "Frontend Developer",
    status: "available",
    jobStatus: "full-time",
    place: "Addis Ababa, Ethiopia",
    posted: "April 24, 2025",
  },
  {
    brandName: "Beta Solutions",
    logo,
    title: "Backend Engineer",
    status: "not available",
    jobStatus: "full-time",
    place: "Nairobi, Kenya",
    posted: "April 24, 2025",
  },
  {
    brandName: "Gamma Innovations",
    logo,
    title: "UI/UX Designer",
    status: "available",
    jobStatus: "contract",
    place: "Lagos, Nigeria",
    posted: "April 24, 2025",
  },
  {
    brandName: "Delta Systems",
    logo,
    title: "Mobile App Developer",
    status: "available",
    jobStatus: "full-time",
    place: "Accra, Ghana",
    posted: "April 24, 2025",
  },
  {
    brandName: "Epsilon Telecom",
    logo,
    title: "Network Administrator",
    status: "not available",
    jobStatus: "full-time",
    place: "Addis Ababa, Ethiopia",
    posted: "April 24, 2025",
  },
  {
    brandName: "Zeta Group",
    logo,
    title: "Business Analyst",
    status: "available",
    jobStatus: "part-time",
    place: "Kampala, Uganda",
    posted: "April 24, 2025",
  },
  {
    brandName: "Eta Corp",
    logo,
    title: "Data Scientist",
    status: "available",
    jobStatus: "full-time",
    place: "Kigali, Rwanda",
    posted: "April 24, 20",
  },
  {
    brandName: "Eta Corp",
    logo,
    title: "Data Scientist",
    status: "available",
    jobStatus: "full-time",
    place: "Kigali, Rwanda",
    posted: "April 24, 20",
  },
  {
    brandName: "Eta Corp",
    logo,
    title: "Data Scientist",
    status: "available",
    jobStatus: "full-time",
    place: "Kigali, Rwanda",
    posted: "April 24, 20",
  },
  {
    brandName: "Eta Corp",
    logo,
    title: "Data Scientist",
    status: "available",
    jobStatus: "full-time",
    place: "Kigali, Rwanda",
    posted: "April 24, 20",
  },
  {
    brandName: "Eta Corp",
    logo,
    title: "Data Scientist",
    status: "available",
    jobStatus: "full-time",
    place: "Kigali, Rwanda",
    posted: "April 24, 20",
  },
  {
    brandName: "Eta Corp",
    logo,
    title: "Data Scientist",
    status: "available",
    jobStatus: "full-time",
    place: "Kigali, Rwanda",
    posted: "April 24, 20",
  },
];

function Home() {
  return (
    <div className="h-[100vh] relative">
      <Nav />
      <div className="grid grid-cols-2 justify-center overflow-y-scroll max-w-[1200px] my-20 mb-28 mx-auto h-[80vh]   gap-3 gap-y-6">
        {jobs.map((job, i) => (
          <Job
            Logo={job.logo}
            brandName={job.brandName}
            jobStatus={job.jobStatus}
            status={job.status}
            place={job.place}
            posted={job.posted}
            title={job.title}
            key={i}
          />
        ))}
      </div>
      <div className="h-[20vh] bg-white fixed w-[100%]  bottom-0 left-0 z-30"></div>
    </div>
  );
}

export default Home;
