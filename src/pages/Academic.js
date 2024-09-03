// import React from 'react'
// import Breadcrumb from "../components/Breadcrumb";
// import PosterImage from "../assets/images/poster.jpg"

// export default function Academic() {

// 	return (

// 		<div className="col-lg-10 col-md-9 academic">
// 			<div className='page-container' >
// 				<Breadcrumb  ></Breadcrumb>

// 				<div className='row justify-content-center'>

// 					<div className='col-lg-12 col-md-12'>
// 						<div className="accordion accordion-flush mt-5" id="accordionFlushExample">

// 							<div className="accordion-item">
// 								<h2 className="accordion-header" id="flush-headingOne">
// 									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
// 										<strong>Master in Cyber Security</strong>
// 									</button>
// 								</h2>
// 								<div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
// 									<div className="accordion-body">

// 										<h3><strong>Courses</strong></h3>
// 										<div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">
// 											<div className="accordion-item">
// 												<h2 className="accordion-header" id="panelsStayOpen-headingOne">
// 													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
// 														<strong>Technical Communication</strong>
// 													</button>
// 												</h2>
// 												<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne" data-bs-parent="#accordionPanelsStayOpenExample">
// 													<div className="accordion-body">
// 														<p>Technical communication is a vital skill in today's fast-paced, information-driven world.
// 															Whether you're a programmer, engineer, or scientist, the ability to effectively communicate complex technical concepts to a variety of audiences is essential.
// 															In my coursework, I have learned strategies for creating clear, concise, and engaging technical documents, presentations, and reports.</p>
// 														Here are the some exapmles of my coursework
// 														<ul className='course-name'>
// 															<li> <strong>Poster Presentation</strong>
// 																<p>One important aspect of technical communication is creating effective poster presentations. Through hands-on exercises, I have learned how to create posters that are visually appealing and communicate key information in a clear and concise manner. I have also learned how to design posters that
// 																	effectively convey complex technical concepts using images, diagrams, and other visual aids.</p>
// 																<div className='course-image'><img src={PosterImage}></img></div>
// 															</li>
// 															<li><strong>Academic Writing</strong>
// 																<p>In addition, I have gained a solid understanding of APA citation style and academic writing. I have learned how to properly format and structure research papers, including how to give proper credit to sources using in-text citations and references. Through this coursework, I have also learned how to write clearly and concisely,
// 																	using appropriate technical terminology and avoiding jargon that may be confusing to readers.</p>

// 																<iframe src="/images/essaywriting.pdf" width="100%" height="500px">
// 																</iframe>


// 															</li>
// 														</ul>
// 													</div>

// 												</div>
// 											</div>
// 											<div className="accordion-item">
// 												<h2 className="accordion-header" id="panelsStayOpen-headingtwo">
// 													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsetwo" aria-expanded="false" aria-controls="panelsStayOpen-collapsetwo">
// 														<strong>Algorithm and Concepts</strong>
// 													</button>
// 												</h2>
// 												<div id="panelsStayOpen-collapsetwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingtwo" data-bs-parent="#accordionPanelsStayOpenExample">
// 													<div className="accordion-body">
// 														<ul className='course-name'>
// 															<li>Proficient in data structures such as arrays, linked lists, stacks, queues, trees, and graphs.</li>
// 															<li>Solid understanding of algorithm design principles, including divide-and-conquer, dynamic programming, and greedy algorithms.</li>
// 															<li>Familiarity with common algorithms and their time and space complexities, such as sorting (e.g., quicksort, mergesort), searching (e.g., binary search), and graph traversal (e.g., depth-first search, breadth-first search).</li>
// 															<li>Experience with algorithm optimization techniques, including memoization, pruning, and parallelization.</li>
// 															<li>Skilled in analyzing and improving algorithm efficiency through big O notation analysis, profiling, and benchmarking.</li>
// 															<li>Proficient in programming languages such as Python, Java, and C++, and their associated data structures and algorithms libraries.</li>
// 															<li>Knowledge of machine learning algorithms, including linear regression, decision trees, and neural networks.</li>
// 															<li>Solid understanding of complexity theory, including P vs. NP, NP-complete, and NP-hard problems.</li>
// 														</ul>
// 													</div>

// 												</div>
// 											</div>
// 											<div className="accordion-item">
// 												<h2 className="accordion-header" id="panelsStayOpen-headingthree">
// 													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsethree" aria-expanded="false" aria-controls="panelsStayOpen-collapsethree">
// 														<strong>Operating System and Security</strong>
// 													</button>
// 												</h2>
// 												<div id="panelsStayOpen-collapsethree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingthree" data-bs-parent="#accordionPanelsStayOpenExample">
// 													<div className="accordion-body">
// 														<ul className='course-name'>
// 															<li>Expertise in securing operating systems such as Windows, Linux, and macOS, including knowledge of key security features and best practices.</li>
// 															<li>Experience with system hardening techniques, including disabling unnecessary services, securing network services, and implementing least privilege access controls.</li>
// 															<li>Knowledge of authentication and access control mechanisms, including password policies, two-factor authentication, and role-based access control (RBAC).</li>
// 															<li>Strong communication and collaboration skills, including the ability to work effectively with cross-functional teams and communicate technical information to non-technical stakeholders.</li>
// 															<li>Experience with security auditing and risk assessments, including vulnerability scanning, penetration testing, and security audits.</li>
// 														</ul>
// 													</div>

// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="accordion-item">
// 								<h2 className="accordion-header" id="flush-headingTwo">
// 									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
// 										<strong>Bachelor of Engineering in Computer Engineering</strong>
// 									</button>
// 								</h2>
// 								<div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
// 									<div className="accordion-body">
// 										<ul className='course-name'>
// 											<li>Strong understanding of computer science concepts, including algorithms, data structures, computer organization, programming languages, software engineering, and database management.</li>
// 											<li>Proficient in programming languages such as Java, Python, C++, and JavaScript, and familiar with a variety of programming paradigms, including object-oriented programming, functional programming, and event-driven programming.</li>
// 											<li>Experience with software development methodologies, including agile, scrum, and waterfall, and familiarity with software development tools such as Git, JIRA, and Docker.</li>
// 											<li>Knowledge of web development technologies, including HTML, CSS, and JavaScript, and experience with web development frameworks such as React, Angular, and Vue.js.</li>
// 											<li>Experience with database design and management, including SQL and NoSQL databases, and familiarity with database management tools such as MySQL and MongoDB.</li>
// 											<li>Familiarity with operating systems such as Windows, Linux, and macOS, and experience with system administration tasks such as installing, configuring, and maintaining software and hardware.</li>
// 											<li>Knowledge of computer networking concepts, including TCP/IP, DNS, DHCP, and firewalls, and experience with network troubleshooting and configuration.</li>
// 											<li>Familiarity with emerging technologies such as artificial intelligence (AI), machine learning (ML), and blockchain, and experience with implementing these technologies in software applications.</li>
// 											<li>Strong problem-solving and analytical skills, with the ability to debug code, analyze data, and develop creative solutions to complex problems.</li>
// 										</ul>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="accordion-item">
// 								<h2 className="accordion-header" id="flush-headingThree">
// 									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
// 										<strong>Diploma in Computer Engineering</strong>
// 									</button>
// 								</h2>
// 								<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
// 									<div className="accordion-body">
// 										<ul className='course-name'>
// 											<li>Proficient in computer engineering concepts such as digital logic design, computer organization and architecture, microprocessors and microcontrollers, and embedded systems.</li>
// 											<li>nowledge of programming languages such as C, C++, Java, and Python, and familiarity with a variety of programming paradigms, including structured programming, object-oriented programming, and event-driven programming.</li>
// 											<li>Experience with software development tools such as Integrated Development Environments (IDEs), debugging tools, and version control systems.</li>
// 											<li>Familiarity with operating systems such as Windows, Linux, and macOS, and experience with system administration tasks such as installing, configuring, and maintaining software and hardware.</li>
// 											<li>Experience with hardware design and implementation, including circuit design, printed circuit board (PCB) layout, and soldering.</li>
// 											<li>Knowledge of computer networking concepts, including TCP/IP, DNS, DHCP, and firewalls, and experience with network troubleshooting and configuration.</li>
// 											<li>Familiarity with digital signal processing (DSP) concepts and tools, such as MATLAB and Simulink.</li>
// 											<li>Understanding of computer security concepts, including authentication and access control mechanisms, encryption technologies and protocols, and security compliance frameworks.</li>
// 											<li>Experience with troubleshooting and diagnosing computer hardware and softwar</li>
// 											<li>Strong problem-solving and analytical skills, with the ability to debug code, analyze data, and develop creative solutions to complex problems.</li>
									

// 										</ul>
// 										</div>
// 							</div>
// 							</div>
// 						</div>

// 					</div>
// 				</div>

// 			</div>

// 		</div>
// 	)
// }