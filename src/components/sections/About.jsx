import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    
    const skills = [
        "Java",
        "Python",
        "SQL",
        "PostgreSQL",
        "Docker",
        "Maven",
        "Linux/CLI",
        "Bash Scripting",
        "Gitflow",
        "Regex",
        "Excel",
        "Data Cleaning",
        "Data Visualization",
        "Jupyter Notebooks",
        "IBM Cloud",
        "Google Cloud",
    ];
    return <section id="about" 
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent text-center">
                {" "}
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                Software & Data Developer focused on building strong skills across backend development, data analysis, and problem-solving. I'm currently working with Java, Python, SQL, Docker, and Linux to build practical projects, alongside Excel and Power BI for clear data insights and simple data solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cools-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Software & Data Developer</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((tech, key) =>(
                                <span 
                                key={key}
                                    className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2256,0.2)] transition
                                "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bol mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2" >
                        <strong>General Art Program</strong> - SenecaPolytechnic(2024-2025)
                        <li>Relevant CourseWork:</li>
                        <li>Web Programming Principles</li>
                        <li>Intro to Programming Using C</li> 
                        <li>Applied Problem Solving</li>
                        <li>Intro to Database Systems</li>
                        <li>Intro UNIX/Linux and Internet</li>
                        <li>Big Ideas in Philosophy</li>    
                        <li>Pysch of Learning and Careers</li>    
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    
                    <h3 className="text-xl font-bol mb-4">Work Experience</h3>
                    
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-0">     
                        <strong>Technical Consultant Trainee — Jarvis Consulting Group</strong> (Remote/GTA) (Mar 2026 – Jul 2026)
                        <li>Built JavaGrep, a command-line search tool in Java using Streams, Lambdas, and regex for pattern matching.</li>
                        <li>Implemented buffered I/O and structured logging (slf4j) to improve performance and traceability.</li>
                        <li>Managed builds and dependencies with Maven, and containerized applications using Docker.</li>
                        <li>Developed a Linux cluster monitoring system to track system health and resource usage.</li>
                        <li>Followed Gitflow branching workflows and prepared for Master Code Reviews covering JVM internals, OOP, generics, and Collections.</li>
                    </ul>

                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-0">     
                        <strong>Customer Service Associate — Sunrise Caribbean Restaurant</strong> (Brampton, ON) (Jul 2022 – Sep 2022)
                        <li>Delivered excellent customer service in a fast-paced environment.</li>
                        <li>Handled cash and digital payments with high accuracy.</li>
                        <li>Maintained a clean and organized workspace to support smooth operations.</li>
                    </ul>

                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-0">     
                        <strong>Customer Service Associate — Sunrise Caribbean Restaurant</strong> (Brampton, ON) (Jul 2022 – Sep 2022)
                        <li>Delivered excellent customer service in a fast-paced environment.</li>
                        <li>Handled cash and digital payments with high accuracy.</li>
                        <li>Maintained a clean and organized workspace to support smooth operations.</li>
                    </ul>
                
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-6">     
                        <strong>Inventory Clerk — FreshCo</strong> (Brampton, ON) (Mar 2022 – Jun 2022)
                        <li>Performed regular inventory checks to keep accurate stock levels.</li>
                        <li>Assisted customers with product locations and inquiries.</li>
                        <li>Prepared and stocked items safely and efficiently.</li>
                    </ul>
                
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-6">
                        <strong>Retail Associate — Regen Thrift</strong> (Brampton, ON) (Oct 2021 – Feb 2022)
                        <li>Organized and merchandised items to improve store layout.</li>
                        <li>Supported community members with food and cleaning assistance.</li>
                        <li>Restocked shelves and maintained inventory flow.</li>
                    </ul>
                                    
                </div>
                
            </div>
        </div>
        </RevealOnScroll>
    </section>
}