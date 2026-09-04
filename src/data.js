// ── People ──
export const director = {
  name: "Dr. Satyajit Das",
  role: "Assistant Professor | Head, PRISM Lab",
  dept: "Department of Computer Science & Engineering, IIT Guwahati",
  bio: "Dr. Satyajit Das is an Assistant Professor at IIT Guwahati (May 2025–present), previously at IIT Palakkad (2019–2025). He received his Ph.D. from Université Bretagne Sud, France and University of Bologna, Italy (2014–2018), and was a Postdoctoral Researcher at Lab-STICC, France. His research focuses on energy-efficient digital architectures for heterogeneous and reconfigurable multi-core SoCs, ultra-low power computing for IoT, hardware security, lightweight cryptography, and coarse-grained reconfigurable array (CGRA) design. He is also Co-Founder of Revin Techno Solutions Pvt. Ltd.",
  tags: ["Hardware Security","Lightweight Cryptography","Reconfigurable Computing","SoC Design","Ultra-Low Power","IoT Security"],
  phone: "+91 361 2583271",
  email: "prism@iitg.ac.in",
  photo: "/images/satyajit-das.jpg",
};

export const phd = [
  {
    name: "Abhishek Neogi",
    role: "PhD Scholar",
    batch: "PhD 2nd Year",
    topic: "Coarse-Grained Reconfigurable Array",
    email: "a.neogi@iitg.ac.in",
    photo: "/images/Abhishek.jpg",
  },
];

export const projectStaff = [
  {
    name: "Dhanvanth Kumar Gude",
    role: "Assistant Project Engineer",
    affiliation: "Associated with PRISM Lab and ISEA Project Phase III",
    prev: "Ex-Project Intern (Sept 2025 – May 2026) @prismlab",
    topic: "Security and Privacy in IoT Environments",
    email: "gudekumar@rnd.iitg.ac.in",
    photo: "/images/Dhanvanth.jpg",
  },
  { 
    name: "Ankit Chakraborty", 
    role: "Project Associate", 
    email: "ankitchakraborty@rnd.iitg.ac.in", 
    photo: "/images/ankit.jpg", 
  },
  { 
    name: "Adarsh Prakash", 
    role: "Project Associate", 
    email: "adarsh789@rnd.iitg.ac.in", 
    photo: "/images/adarsh.jpg",
  },
];

export const sciAdmin = [
  { 
    name: "Rishita Mishra", 
    role: "Scientific Administrative Assistant", 
    email: "rishitamishra@rnd.iitg.ac.in", 
    photo: "/images/rishita.jpg",
  },
  { 
    name: "Nitish Kalita", 
    role: "Scientific Administrative Assistant", 
    email: "nitish01@rnd.iitg.ac.in",
    photo: "/images/nitish.jpg",
  },
];

export const mtech = [
  { name: "Isha Jain", role: "M.Tech Student", batch: "MTech 2nd Year", email: "isha.jain@iitg.ac.in", photo: "/images/Isha.jpg" },
  { name: "Anupam Das", role: "M.Tech Student", batch: "MTech 2nd Year", email: "d.anupam@iitg.ac.in", photo: "/images/Anupam Das.jpg" },
  { name: "Ritik Tiwari", role: "M.Tech Student", batch: "MTech 2nd Year", email: "ritik.tiwari@iitg.ac.in", photo: "" },
];

export const interns = [
  {
    name: "Pavan Pendurthi",
    role: "Intern",
    homeInstitution: "Chandigarh University",
    email: "pendurthipavansai@gmail.com",
    photo: "/images/Pavan.jpg",
  },
];

export const alumni = [
  {
    name: "Ananya Krishna Vishwas",
    role: "Project Intern",
    period: "Feb 2026 – May 2026",
    homeInstitution: "Bhilai Institute of Technology",
    email: "misty2005.vishwas@gmail.com",
    photo: "/images/Ananya.jpg",
  },
  {
    name: "Harshavardan Singh Parihar",
    role: "Project Intern",
    period: "Feb 2026 – May 2026",
    homeInstitution: "Bhilai Institute of Technology",
    email: "pariharharshvardhansingh45@gmail.com",
    photo: "/images/Harsh.jpg",
  },
  {
    name: "Aryan Singh",
    role: "Project Intern",
    period: "Feb 2026 – May 2026",
    homeInstitution: "IIIT Manipur",
    email: "aryan200227@gmail.com",
    photo: "/images/Aryan.jpg",
  },
];

// ── Research ──
export const researchAreas = [
  {
    icon: "network",
    title: "Network Security",
    desc: "Intrusion detection systems, secure protocol design, and anomaly detection using machine learning for next-generation networks and distributed systems.",
    tags: ["IDS/IPS","Protocol Security","IoT Security","Lightweight Cryptography","Zero Trust"],
  },
  {
    icon: "shield",
    title: "Hardware Security",
    desc: "Side-channel architectures, hardware Trojan detection, and physically unclonable functions for trusted computing and supply chain integrity.",
    tags: ["Side-Channel","Hardware Trojans","PUFs","Trusted Execution","Post-Quantum Crypto"],
  },
  {
    icon: "cpu",
    title: "System on Chip (SoC)",
    desc: "Energy-efficient digital architectures for heterogeneous and reconfigurable multi-core SoCs, including design strategies, runtime support and compilation support for high-end embedded platforms.",
    tags: ["CGRA","SoC","Reconfigurable Computing","Multicore"],
  },
  {
    icon: "zap",
    title: "Ultra-Low Power Computing",
    desc: "Architectures and compilation strategies targeting ultra-low power computing platforms for IoT domain, addressing performance and energy efficiency from silicon to cloud.",
    tags: ["IoT","Edge AI","Near-Sensor Computing","Energy Efficiency"],
  },
  {
    icon: "lock",
    title: "Cybersecurity",
    desc: "Comprehensive threat modeling, vulnerability analysis, and defensive mechanisms for complex distributed systems and critical infrastructure protection.",
    tags: ["Threat Modeling","Vulnerability Analysis","Zero Trust","Penetration Testing"],
  },
  {
    icon: "refresh",
    title: "Reconfigurable Computing",
    desc: "Design and implementation of coarse-grained reconfigurable array architectures with efficient mapping strategies for energy-efficient acceleration.",
    tags: ["CGRA","FPGAs","HLS","Accelerator Design","Mapping"],
  },
];

export const fundedProjects = [
  {
    funder: "ANRF",
    title: "GENISA: A Transformative, Secure, and Extensible ISA for Next-Generation AI",
    projectNo: "ANRF/ARG/2025/003922/ENS",
    amount: "₹172.8L",
  },
];

// ── Publications ──
export const publications = [
  { year: 2026, type: "Journal", title: "ALISTA: Accelerator using LSH-based maximum inner-product search in transformer attention", authors: "Satyajit Das, et al.", venue: "Integration the VLSI Journal (Elsevier)", doi: "10.1016/j.vlsi.2024.102784" },
  { year: 2026, type: "Conference", title: "GhostWriter: Exploiting GPU-Cache Contention to Steal and Steer Multi-tenant Large-Language-Model Inference", authors: "Ranjit Das, S. Vijayakumar", venue: "Security, Privacy, and Applied Cryptography Engineering (SPACE 2025), LNCS vol. 16406, pp. 134–153, Springer", doi: "10.1007/978-3-031-82435-4_8" },
  { year: 2024, type: "Journal", title: "CREPE: Concurrent Reverse-modulo-scheduling and Placement for CGRAs", authors: "Chilankamol Sunny, Satyajit Das, Kevin Martin, Philippe Coussy", venue: "IEEE Transactions on Reconfigurable Systems (IEEE TRS)", doi: "10.1109/TRS.2024.3411234" },
  { year: 2024, type: "Journal", title: "A Novel Direct Digitizer for Leaky Differential Capacitive Sensors using Phase Sensitive Integration", authors: "R. Selventhiran, V. Rajalingam, S. Kodagoda, Satyajit Das", venue: "IEEE Sensors Letters", doi: "10.1109/lsens.2024.3398644" },
  { year: 2024, type: "Conference", title: "SimEx-ViT: Explainable Vision Transformer with Similarity-Based Attention Modulation", authors: "Shine P. Sunny, Satyajit Das", venue: "International Conference on Computer Analysis of Images and Patterns (CAIP), pp. 123–134", doi: "" },
  { year: 2024, type: "Conference", title: "SplitMS: Split Modulo-Scheduling for Accelerating Loops Onto CGRAs", authors: "Chilankamol Sunny, Satyajit Das, Kevin Martin, T. Peyret, Philippe Coussy", venue: "IEEE Symposium on Application-Specific Systems, Processors and Technology (ASAP), pp. 240–248, IEEE", doi: "" },
  { year: 2024, type: "Conference", title: "Efficient FFT-Based CNN Acceleration with Intra-Patch Parallelization and Flex-Stationary Dataflow", authors: "Ritik Tiwari, Satyajit Das", venue: "International Symposium on Applied Reconfigurable Computing (ARC), pp. 1–9, Springer", doi: "" },
  { year: 2024, type: "Conference", title: "Spectral-Blaze: A High-Performance FFT-Based CNN Accelerator", authors: "Abhishek Neogi, Satyajit Das", venue: "IEEE Computer Society Annual Symposium on VLSI (ISVLSI), pp. 655–660, IEEE", doi: "" },
  { year: 2024, type: "Conference", title: "Standalone Nested Loop Acceleration on CGRAs for Signal Processing Applications", authors: "Chilankamol Sunny, Satyajit Das, Kevin Martin, Philippe Coussy", venue: "International Symposium on Applied Reconfigurable Computing (ARC), pp. 222–238, Springer", doi: "" },
  { year: 2024, type: "Conference", title: "ByteZip: Efficient Lossless Compression for Structured Byte Streams Using DNNs", authors: "P. Puthumanapully, Satyajit Das", venue: "International Conference on Information Networking (ICOIN)", doi: "" },
  { year: 2023, type: "Conference", title: "Energy Efficient DNN Compaction for Edge Deployment", authors: "Shin Darshay, D. Deb, D. Sharma, D. Aggarwal, Satyajit Das", venue: "International Symposium on Applied Reconfigurable Computing (ARC), pp. 303–303, Springer", doi: "10.1007/978-3-031-42921-7_19" },
  { year: 2022, type: "Journal", title: "An efficient and flexible stochastic CGRA mapping approach", authors: "Satyajit Das, Kevin Martin, T. Peyret, Philippe Coussy", venue: "IEEE Transactions on Computers", doi: "10.1109/tc.2022.3157834" },
  { year: 2022, type: "Journal", title: "Energy efficient hardware loop based optimization for CGRAs", authors: "Chilankamol Sunny, Satyajit Das, Kevin Martin, Philippe Coussy", venue: "Journal of Signal Processing Systems (JSPS), IEEE", doi: "10.1007/s11265-021-01718-3" },
  { year: 2022, type: "Conference", title: "Reinforcement Learning based Efficient Mapping of DNN Models onto Accelerators", authors: "Nilesh P. Salve, Satyajit Das", venue: "IEEE International Conference on High-Speed Systems (ISVLSI), pp. 1–6, IEEE", doi: "" },
  { year: 2021, type: "Journal", title: "Floating point CGRA based ultra-low power DSP accelerator", authors: "R. Prasad, Satyajit Das, Kevin Martin, Philippe Coussy", venue: "Journal of Signal Processing Systems (JSPS), Springer", doi: "10.1007/s11265-021-01709-4" },
  { year: 2021, type: "Conference", title: "Hardware-based loop optimization for CGRA architectures", authors: "Satyajit Das, Kevin Martin, Philippe Coussy", venue: "International Symposium on Applied Reconfigurable Computing (ARC), pp. 65–80, Springer", doi: "10.1007/978-3-030-79025-7_23" },
  { year: 2020, type: "Conference", title: "Energy Efficient Acceleration of Floating Point Applications onto CGRA", authors: "Satyajit Das, Kevin Martin, Philippe Coussy", venue: "IEEE Symposium in Low-Power and High-Speed Chips (COOL CHIPS), pp. 1621–1626, IEEE", doi: "" },
  { year: 2020, type: "Conference", title: "TRANSPIRE: An energy-efficient TRANSprecision floating-point Programmable archItectuRE", authors: "G. Tagliavini, Satyajit Das, et al.", venue: "Design, Automation & Test in Europe (DATE), pp. 1067–1072, IEEE", doi: "10.23919/DATE48585.2020.9116428" },
  { year: 2019, type: "Conference", title: "Context-memory aware mapping for energy efficient acceleration with CGRAs", authors: "Satyajit Das, Kevin Martin, Philippe Coussy", venue: "Design, Automation & Test in Europe (DATE), pp. 336–341, IEEE", doi: "10.23919/DATE.2019.8714817" },
  { year: 2018, type: "Journal", title: "An energy-efficient integrated programmable array accelerator and compilation flow for near-sensor ultralow power processing", authors: "Satyajit Das, et al.", venue: "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (IEEE TCAD), 38(9), 1683–1696", doi: "10.1109/tcad.2018.2864328" },
  { year: 2018, type: "Conference", title: "A heterogeneous cluster with reconfigurable accelerator for energy efficient near-sensor data analytics", authors: "Satyajit Das, Kevin Martin, Davide Rossi, Philippe Coussy", venue: "IEEE International Symposium on Circuits and Systems (ISCAS), pp. 1–4, IEEE", doi: "" },
  { year: 2017, type: "Conference", title: "Efficient mapping of CDFG onto coarse-grained reconfigurable array architectures", authors: "Satyajit Das, Kevin Martin, Anupam Das", venue: "IEEE Computer Society Annual Symposium on VLSI (ISVLSI), pp. 521–526, IEEE", doi: "" },
  { year: 2017, type: "Conference", title: "A 142mops/mw integrated programmable array accelerator for smart visual processing", authors: "Satyajit Das, et al.", venue: "IEEE International Symposium on Circuits and Systems (ISCAS), pp. 1–4, IEEE", doi: "" },
  { year: 2016, type: "Conference", title: "A scalable design approach to efficiently map applications on CGRAs", authors: "Satyajit Das, Kevin Martin, D. Akter, D. Ramanee, Philippe Coussy", venue: "IEEE Computer Society Annual Symposium on VLSI (ISVLSI), pp. 641–642, IEEE", doi: "" },
  { year: 2014, type: "Conference", title: "Remote cache-timing attacks against AES", authors: "B. Sharma, D. F. Kune, D. Feldman, Satyajit Das", venue: "First Workshop on Cryptography and Security in Computing Systems, pp. 45–48", doi: "10.1145/2556315.2556325" },
];

// ── Infrastructure ──
export const infrastructure = [
  { category: "HARDWARE", title: "FPGA Development Cluster", desc: "Xilinx/AMD Alveo FPGA cluster featuring Vivado and Vitis HLS flows for on-chip hardware security prototyping, side-channel analysis, reconfigurable computing research, and custom cryptographic accelerator design.", tools: ["Vivado Design Suite","Vitis HLS","ModelSim / QuestaSim","RISC-V Toolchain","Xilinx"] },
  { category: "COMPUTING", title: "High-Performance Computing Nodes", desc: "Multi-GPU compute servers supporting deep learning accelerator research, SoC simulation, AI-driven security applications, and large-scale network traffic analysis.", tools: ["AMD EPYC 7004","AMD RTX 5090","GNS3 Network Simulator"] },
  { category: "NETWORKING", title: "Cybersecurity Testbed", desc: "Isolated network laboratory environment for security research, intrusion detection validation, and distributed system evaluation in controlled conditions.", tools: ["Cisco Catalyst 9000","Palo Alto Firewall","GNS3 Network Simulator","Wireshark Cluster"] },
  { category: "EMBEDDED", title: "Ultra-Low Power & IoT Lab", desc: "Full-spectrum embedded development environment supporting STM32, ESP32, Raspberry Pi, and Arduino platforms for IoT security research, ultra-low power computing, and lightweight cryptography implementation.", tools: ["SoC Microcontrollers","ChipWhisperer","EM Probe Station","Oscilloscope & Logic Analyzer"] },
  { category: "SOC DESIGN", title: "SoC & CGRA Design Workstations", desc: "Dedicated workstations for System on Chip design, CGRA architecture development, high-level synthesis, and reconfigurable computing research with industry-standard EDA tools.", tools: ["Synopsys Design Compiler","Cadence Virtuoso","Modelsim / Questasim","Vitis / Vivado"] },
  { category: "WIRELESS", title: "Wireless & 5G Security Setup", desc: "Software-defined radio platform and 5G testbed for evaluating wireless protocol security, RF fingerprinting, IoT network security, and next-generation network security research.", tools: ["USRP B210 SDR","5G Testbed","GNU Radio","OpenAirInterface"] },
];

// ── News ──
export const newsItems = [
  { date: "4 June 2026", type: "Course Update", title: "NPTEL Course Revamp – Advanced Technical Learning Initiative by IIT Guwahati and PRISM Lab", desc: "The NPTEL course instructed by Prof. Satyajit Das, Head of PRISM Lab, IIT Guwahati, has been extensively revamped for the July–October 2026 cycle.", tags: ["NPTEL","Education","Course Update","Research"], youtube: "https://www.youtube.com/embed/VaJSJXoX4cQ" },
  { date: "21 May 2026", type: "Paper Presentation", title: "Paper Presentation – CFP – 23rd ACM International Conference on Computing Frontiers (CF) 2026, Catania, Italy", desc: "Ms. Rajeswari S., PhD student of Prof. John has presented a paper at the CF – 23rd ACM International Conference on Computing Frontiers (CF) 2026, Catania, Italy.", tags: ["Presentation","Publications","ACM","Research Excellence"] },
  { date: "9 May 2026", type: "Student Achievement", title: "IEEE Luminary of Discovery (Best Research) Award 2026", desc: "Our lab Project Intern, Mr. Dhanvanth Kumar Gude, has received the IEEE Luminary of Discovery (Best Research) Award 2026 from Chandigarh University for his outstanding research excellence.", tags: ["Award","Student Achievement","IEEE","Research Excellence"] },
  { date: "7 May 2026", type: "Academic Visit", title: "Academic Visit to LabSTICC, University of South Brittany, France", desc: "Dr. Satyajit Das is currently on an academic visit to LabSTICC, University of South Brittany, France, from 7th May to 20th July 2026, for collaborative research.", tags: ["Academic Visit","International","France"] },
  { date: "1 April 2026", type: "Research Grant", title: "GENISA Project Funded by ANRF (₹172.80 Lakhs)", desc: "PRISM Lab receives funding for GENISA: A Transformative, Secure, and Extensible ISA for Next-Generation AI (ANRF ARG; Project No. ANRF/ARG/2025/003922/ENS) worth ₹172.80 Lakhs from ANRF.", tags: ["Funding","ANRF","AI","Research Grant"] },
  { date: "6 February 2026", type: "Resource Person", title: "Resource Person at ISEA Phase-III National Workshop, Chandigarh University", desc: "Dr. Satyajit Das served as a Resource Person at the ISEA Phase-III National Workshop held on 6–7 February 2026 at Chandigarh University.", tags: ["Workshop","ISEA","Resource Person"] },
  { date: "16 January 2026", type: "Tutorial", title: "Tutorial & Session Chair at 39th International Conference on VLSI Design 2026", desc: "Dr. Satyajit Das delivered a tutorial on 'Coarse-Grained Reconfigurable Array: Bridging Flexibility and Efficiency in Next-Generation Accelerators,' and also served as Session Chair and Tutorial Chair.", tags: ["VLSI Design","Tutorial","Session Chair","Conference"] },
  { date: "16 January 2026", type: "Tutorial", title: "Tutorial at ISEA-ISAP 2026, IIT Madras", desc: "Delivered tutorial on 'Practical IoT & Edge-Device Security from Silicon to Cloud' at ISEA-ISAP 2026, IIT Madras, Chennai on 16 January 2026.", tags: ["Tutorial","IoT Security","Edge AI","IIT Madras"] },
];
