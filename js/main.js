const CONFIG={github:"https://github.com/binsiyatn",resume:"https://claude.ai/artifact/1mQiucJPfB3HmToJuDyiBj"};
const NAV=[["about","What I bring"],["projects","Projects"],["experience","Experience"],["skills","Skills"],["passion","Passion"],["contact","Contact"]];
const STATS=[["Dubai","Hybrid Controller commissioned across telecom towers"],["2+ yrs","Firmware development for IIoT products"],["OTA","Remote updates reduced site visits and downtime"],["8.67","CGPA, M.Tech in Applied Electronics"]];
const PROJ=[
{tag:"Dubai, U.A.E.",t:"Hybrid Controller for Telecommunication Systems",p:"Telecom towers run on hybrid power: diesel generators, batteries and rectifiers. This controller monitors and runs them together.",
 w:["Designed, developed and commissioned the Hybrid Controller Pack across telecom towers in Dubai.","Integrated BMS and rectifier modules over RS-485 (Modbus RTU) and ran the diesel generator over CAN J1939.","Connected hardwired I/O, HMI displays and alarm patching; sent data to the IIoTNext platform over LTE.","Built scripts for customizable logic, updated without reflashing firmware."],
 s:["ESP32","Embedded C/C++","Modbus RTU","CAN J1939","LTE"],award:"Appreciation letter received for this project in the U.A.E.",
 d:{src:["BMS and rectifiers|RS-485 Modbus RTU","Diesel generator|CAN J1939","I/O, HMI, alarms|Hardwired"],core:"Hybrid Controller|",dst:"IIoTNext|LTE"}},
{tag:"KSEB, Kerala",t:"Solar Plants Monitoring System over the Internet",p:"Solar plants need remote monitoring and control, with gateways that can be configured and updated from afar.",
 w:["Designed and developed the MicrEdge IIoT gateway for remote monitoring and control.","Acquired energy meter data over DLMS and Modbus.","Integrated wireless, LTE and GSM connectivity with real-time configuration.","Enabled remote gateway updates through device and project management."],
 s:["ESP32","Embedded C/C++","DLMS","Modbus","GSM","LTE"],
 d:{src:["Energy meters|DLMS, Modbus"],core:"MicrEdge gateway|ESP32",dst:"Remote platform|GSM, LTE"}},
{tag:"IIoT",t:"LPG Tank Level and Pressure Monitoring System",p:"Tank level and pressure are read by a gateway and shown on a dashboard.",
 w:["Built an IIoT gateway that reads sensor data.","Sent the data to the ThingsBoard platform."],
 s:["MicrEdge gateway","ThingsBoard","Sensor integration"],
 d:{src:["Level and pressure|Sensors"],core:"IIoT gateway|MicrEdge",dst:"ThingsBoard|Dashboard"}}];
const JOBS=[
{now:1,t:"Self-Directed R&D, Embedded Systems Engineer",w:"September 2025 to present",b:["Researching firmware performance optimization and emerging IIoT technologies.","Developing firmware on STM32 (CubeIDE, HAL/LL) and ESP32 (ESP-IDF) for hardware and software integration challenges."],s:["STM32","ESP32"]},
{t:"Embedded Software Engineer, Consyst Digital Industries",w:"April 2024 to April 2025 | Kochi, India",b:["Built firmware for customized IIoT gateways monitoring diesel generators and deep-cycle batteries in real time.","Implemented OTA firmware update and device management, reducing manual site visits and downtime.","Built Wrench Script control logic so field changes need no firmware update.","Integrated CAN/J1939, RS-485 (Modbus RTU), DLMS and MQTT.","Ran unit, integration and system-level testing; managed releases in Agile/Scrum with Git and Azure DevOps.","Wrote design and test documentation for compliance and scalability."],s:["ESP32","CAN J1939","Modbus RTU","DLMS","MQTT","Azure DevOps"]},
{t:"Intern, Embedded Software Engineer, Consyst Digital Industries",w:"January to March 2024 | India",b:["Carried out board bring-up and hardware validation; created test plans and design documentation.","Released software to quality standards and debugged with cross-functional teams."],s:["Bring-up","Validation"]},
{t:"Trainee, Embedded Systems, Nest Cyber Solutions",w:"October 2022 to September 2023 | India",b:["Integrated microcontrollers with industrial sensors and actuators.","Optimized code for memory use, power efficiency and performance.","Debugged and resolved software issues in a multidisciplinary team."],s:["Sensors","Actuators"]}];
const SK={"Languages":["C","Embedded C","C++","Python","Wrench Script"],"Microcontrollers":["STM32 / Cortex-M","ESP32","Arduino","PIC16F877A"],"Communication":["UART","SPI","I2C","CAN / J1939","Modbus RTU / TCP","DLMS","MQTT","HTTP","Ethernet (basic)"],"RTOS and OS":["FreeRTOS","Embedded Linux (basic)"],"Tools":["STM32CubeIDE","STM32CubeMX","ESP-IDF","MPLAB","VS Code","Git / GitHub","Azure DevOps"],"Debugging and hardware":["Logic analyzer","Oscilloscope","CAN tools","Schematics and datasheets","Board bring-up","ADC, EEPROM, Flash"],"Firmware engineering":["Bootloader","OTA updates","Device management","JSON","Code and memory optimization"],"IIoT platforms":["MicrEdge","ThingsBoard","AWS"],"Domains":["BMS","Industrial automation","Energy systems","IoT products"]};

const $=s=>document.querySelector(s),esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const chips=a=>`<ul class="chips">${a.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;
function diagram(d){
  const nd=(x,y,w,h,t,c)=>{const[a,b]=t.split("|");return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c?"var(--blue)":"var(--surface)"}" stroke="var(--blue)" stroke-width="2"/><text x="${x+w/2}" y="${y+h/2+(b?-2:5)}" text-anchor="middle" font-size="12.5" font-weight="700" fill="${c?"var(--surface)":"var(--ink)"}">${esc(a)}</text><text x="${x+w/2}" y="${y+h/2+14}" text-anchor="middle" font-size="10.5" fill="${c?"var(--surface)":"var(--muted)"}">${esc(b)}</text>`};
  const n=d.src.length,H=Math.max(150,n*68+16),cy=H/2;let s="";
  d.src.forEach((t,i)=>{const y=8+i*68+(H-16-n*68)/2;s+=nd(8,y,170,52,t)+`<path d="M178 ${y+26}H208V${cy}H228" fill="none" stroke="var(--muted)" stroke-width="2"/>`});
  s+=nd(228,cy-32,150,64,d.core,1)+`<path d="M378 ${cy}H402" stroke="var(--muted)" stroke-width="2"/>`+nd(402,cy-26,130,52,d.dst);
  return `<svg viewBox="0 0 540 ${H}" role="img" aria-label="System diagram" font-family="Inter,sans-serif">${s}</svg>`}
$("#links").innerHTML=NAV.map(([i,l])=>`<li><a href="#${i}">${l}</a></li>`).join("");
$("#stats").innerHTML=STATS.map(([n,l])=>`<div class="stat"><strong>${n}</strong><span>${l}</span></div>`).join("");
$("#proj").innerHTML=PROJ.map(p=>`<article class="card pj"><div><span class="tag">${p.tag}</span><h3>${p.t}</h3><p>${p.p}</p><h4>What I did</h4><ul class="l">${p.w.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>${chips(p.s)}${p.award?`<p class="award">${p.award}</p>`:""}</div><div>${diagram(p.d)}</div></article>`).join("");
$("#tl").innerHTML=JOBS.map(j=>`<li class="card${j.now?" now":""}"><h3>${j.t}</h3><p class="when">${j.w}</p><ul class="b">${j.b.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>${chips(j.s)}</li>`).join("");
$("#sk").innerHTML=Object.entries(SK).map(([k,v])=>`<div class="card sk"><h3>${k}</h3>${chips(v)}</div>`).join("");
$("#resume").href=CONFIG.resume;
if(CONFIG.github){const g=$("#gh");g.href=CONFIG.github;g.hidden=false}

const R=document.documentElement,tb=$("#theme");
const dk=()=>R.dataset.theme?R.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
try{const t=localStorage.getItem("theme");if(t)R.dataset.theme=t}catch(e){}
const paint=()=>tb.textContent=dk()?"☀":"☾";paint();
tb.onclick=()=>{R.dataset.theme=dk()?"light":"dark";try{localStorage.setItem("theme",R.dataset.theme)}catch(e){}paint()};
const up=$("#top");addEventListener("scroll",()=>up.classList.toggle("show",scrollY>700),{passive:true});
up.onclick=()=>scrollTo({top:0,behavior:"smooth"});
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll("#links a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
NAV.forEach(([i])=>spy.observe(document.getElementById(i)));
