import React, { useEffect } from "react"

const About = (props) => {
  useEffect(() => {
    document.title = "Bro | About"
  }, [])
  return (
    <div className="flex flex-col justify-start items-start py-8 w-full">
      <div className="text-3xl lg:text-4xl font-bold font-lexend w-full pb-8 border-b-neutral-400 border-b">ABOUT</div>
      <p className="pt-5 pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra odio vel diam consequat, eget imperdiet ipsum laoreet. Fusce id nisi auctor, varius nunc sed, tempor dui. Fusce et eleifend magna. Nulla semper mattis massa. Integer vitae sagittis augue, ut ullamcorper nibh. Cras scelerisque feugiat nisi ut imperdiet.</p>
      <div className="text-3xl lg:text-4xl font-bold font-lexend w-full pb-8 border-b-neutral-400 border-b">SKILL</div>
      <ul className="pt-5 pb-16">
        <li>HTML, CSS, JavaScript</li>
        <li>ReactJS, Redux toolkit, TailwindCSS</li>
        <li>Build server with NodeJs, ExpressJS, MongoDB</li>
        <li>JSON, RESTful API, JWT Auth</li>
        <li>Git, GitHub</li>
      </ul>
      <div className="text-3xl lg:text-4xl font-bold font-lexend w-full pb-8 border-b-neutral-400 border-b">Project</div>
      <div className="text-3xl lg:text-4xl font-bold font-lexend w-full pb-8 border-b-neutral-400 border-b">EDUCATION</div>
    </div>
  )
};

export default About;
