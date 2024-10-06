var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+33749248931'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>0033749248931</label></div> </a> <a href='mailto:ezzin.anass@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a href='https://www.linkedin.com/in/anass-ezzine-849384241/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeAnass.png' class='resumeAnass'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Cv_Anass_Ezzine</label></div><a href='assets/Cv_Anass_Ezzine_stage_Dev_EN.pdf' download='Cv_Anass_Ezzine_stage_Dev_EN.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.6953038541737!2d5.421406299999999!3d43.508691500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9929df2a96cd7%3A0x9166eae736388700!2s1600%20Rte%20des%20Milles%2C%2013090%20Aix-en-Provence!5e0!3m2!1sen!2sfr!4v1691928242551!5m2!1sen!2sfr' class='map'></iframe></div><label class='add'><address>1600 Route Des Milles<br>Aix en Provence<br>France 13090</address>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}

function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>I'm <span class='bold'><a class='alink'>Anass EZZINE</a>.</span><br><br>I'm a 4th year computer engineering student at Polytechnic University School of Marseille, currently in a work-study program. <span class='bold'>👨🏻‍💻📚</span><br><br>I'm looking for a 3-month internship abroad starting in May to gain international experience.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send a keyword to get information...<br>For example:<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'education'</span> - to see my educational background<br><span class='bold'>'experience'</span> - to know my professional experience<br><span class='bold'>'projects'</span> - to see my projects<br><span class='bold'>'resume'</span> - to get my CV<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get my contact information<br><span class='bold'>'about'</span> - to know about this site<br><span class='bold'>'clear'</span> - to clear the conversation</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>Here are my main skills:<br><span class='bold'>Programming Languages: Python, Java, Kotlin, C, C++, JS/TS<br>Frontend & Backend Development<br>Frameworks: Angular, Node.js, React, NextJS, Tailwind, Swing, Quarkus, Express.js<br>Databases: MySQL, MongoDB, SQLite<br>Tools: AWS, Postman<br>Agile Methodology (Scrum)<br>Needs analysis and user story writing<br>Backlog management<br>Logical approach<br>Interpersonal skills</span>");
            break;
        case "education":
            sendTextMessage("My educational background:<br><br>• Computer Engineering Degree, Polytechnic University School of Marseille (2022 – 2026)<br><br>• Bachelor's Degree in Computer Science, Aix-Marseille University (2020 – 2022)<br><br>• High School Diploma, Hassan Dakhil High School (2017 – 2020)");
            break;
        case "experience":
            sendTextMessage("Professional experience:<br><br>1. Full Stack Developer, Product Owner & Business Analyst Intern - CITECH (2024 – present)<br>• Full Stack Development: Front-end and Back-end<br>• Product Owner: Backlog management, requirement definition<br>• Business Analyst: Needs analysis, user story writing<br>• Implemented a Room Reservation System<br>• Developed an Online Appointment Scheduling Module<br><br>2. Capgemini Ambassador (2023 – 2024)<br>• Campus Representation<br>• Discovery of Capgemini professions<br>• Event Planning and Organization");
            break;
        case "projects":
            sendTextMessage("Projects:<br><br>1. Medical Prescription Management Platform:<br>Angular, MongoDB, JavaScript, HTML, CSS<br><br>2. Client Management Application:<br>Node.js, Express, HTML, CSS, JavaScript<br><br>3. Database Management Application for IT History:<br>Python, MySQL<br><br>4. RPG Game in Java:<br>Native Java<br><br>5. Java Swing Project with MySQL Database:<br>Java Swing, MySQL");
            break;
        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://www.linkedin.com/in/anass-ezzine-849384241/'><span class='bold'>Anass Ezzine</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Sorry, I couldn't catch that... 😢<br>Send 'help' to know the available commands.");
            }, 2000);
            break;
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}

function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}