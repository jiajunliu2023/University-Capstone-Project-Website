function handleCredentialResponse(response) {
    // Gets the ID token for the user
    const idToken = response.credential;

    // Decode the ID token and get the user information
    fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + idToken)
        .then(response => response.json())
        .then(userInfo => {
            console.log(userInfo);
            // const userId = userInfo.sub;
            // const userEmail = userInfo.email;
            // const userFullName = userInfo.name;
            // const givenName = userInfo.given_name;
            // const familyName = userInfo.family_name;
            // const userPicture = userInfo.picture;
        })
        .catch(error => {
            console.error('Error fetching user information:', error);
        });
}
function changerTextColor() {
    var selectElement = document.getElementById("rtypes");
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    if (selectedOption.value === "Select a login type") {

    } else {
        selectElement.style.color = "black";
        selectElement.style.fontWeight = "bold";
    }
}
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("userpasswordregister");
    var passwordToggle = document.getElementById("password-toggle");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.checked = true;
    } else {
        passwordInput.type = "password";
        passwordToggle.checked = false;
    }
}
function changelTextColor() {
    var selectElement = document.getElementById("ltypes");
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    if (selectedOption.value === "Select a login type") {

    } else {
        selectElement.style.color = "black";
        selectElement.style.fontWeight = "bold";
    }
}
const showHomePage = () => {
    document.getElementById("homepage").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("reward").style.display = "none";
    document.getElementById("people").style.display = "none";
    document.getElementById("yourproject").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("createteam").style.display = "none";
    //document.getElementById("team").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("updateproject").style.display = "none";
    document.getElementById("deleteproject").style.display = "none";

}
const showLogin = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("project").style.display = "none";
    document.getElementById("reward").style.display = "none";
    document.getElementById("people").style.display = "none";
    document.getElementById("yourproject").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("createteam").style.display = "none";
    //  document.getElementById("team").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("updateproject").style.display = "none";
    document.getElementById("deleteproject").style.display = "none";

}
const showProject = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("project").style.display = "block";
    document.getElementById("reward").style.display = "none";
    document.getElementById("people").style.display = "none";
    document.getElementById("yourproject").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("createteam").style.display = "none";
    //  document.getElementById("team").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("updateproject").style.display = "none";
    document.getElementById("deleteproject").style.display = "none";


}

const showReward = () => {
    //if (adminloginstate === false  || studentloginstate === true || visitorloginstate === true) {
    //    alert("Only admin can award project")
    //    showLogin();
    //}
    //else {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("reward").style.display = "block";
    document.getElementById("people").style.display = "none";
    document.getElementById("yourproject").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("createteam").style.display = "none";
    //  document.getElementById("team").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("updateproject").style.display = "none";
    document.getElementById("deleteproject").style.display = "none";


}
const showPeople = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("reward").style.display = "none";
    document.getElementById("people").style.display = "block";
    document.getElementById("yourproject").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("createteam").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("updateproject").style.display = "none";
    document.getElementById("deleteproject").style.display = "none";

}
const showYourProject = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("reward").style.display = "none";
    document.getElementById("people").style.display = "none";
    document.getElementById("yourproject").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.getElementById("createteam").style.display = "none";
    // document.getElementById("team").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("updateproject").style.display = "none";
    document.getElementById("deleteproject").style.display = "none";

}

const showRegister = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("reward").style.display = "none";
    document.getElementById("people").style.display = "none";
    document.getElementById("yourproject").style.display = "none";
    document.getElementById("register").style.display = "block";
    document.getElementById("createteam").style.display = "none";
    // document.getElementById("team").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("updateproject").style.display = "none";
    document.getElementById("deleteproject").style.display = "none";
}


const showCreatteam = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("reward").style.display = "none";
    document.getElementById("people").style.display = "none";
    document.getElementById("yourproject").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("createteam").style.display = "block";
    //  document.getElementById("team").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("updateproject").style.display = "none";
    document.getElementById("deleteproject").style.display = "none";

}

const showUpdateProject = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("reward").style.display = "none";
    document.getElementById("people").style.display = "none";
    document.getElementById("yourproject").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("createteam").style.display = "none";
    // document.getElementById("team").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("updateproject").style.display = "block";
    document.getElementById("deleteproject").style.display = "none";
}
const editProject = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("reward").style.display = "none";
    document.getElementById("people").style.display = "none";
    document.getElementById("yourproject").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("createteam").style.display = "none";
    //  document.getElementById("team").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("updateproject").style.display = "block";
    document.getElementById("deleteproject").style.display = "none";
}
const DeleteProject = () => {

    document.getElementById("homepage").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("reward").style.display = "none";
    document.getElementById("people").style.display = "none";
    document.getElementById("yourproject").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("createteam").style.display = "none";
    //    document.getElementById("team").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("updateproject").style.display = "none";
    document.getElementById("deleteproject").style.display = "block";

}

const showComment = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("reward").style.display = "none";
    document.getElementById("people").style.display = "none";
    document.getElementById("yourproject").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("createteam").style.display = "none";
    // document.getElementById("team").style.display = "none";
    document.getElementById("details").style.display = "none";
    //  document.getElementById("comment").style.display = "block";
}

async function  UserRegister(){
    let user = {
        //"id": document.getElementById("useridregister").value,
        "firstName": document.getElementById("userfirstnameregister").value,
        "lastName": document.getElementById("userlastnameregister").value,
        "email": document.getElementById("useremailregister").value,
        "password": document.getElementById("userpasswordregister").value,
        "interest": document.getElementById("userinterestregister").value,
        //"teamName": document.getElementById("userteamnameregister").value
    }
    var i = document.getElementById("rtypes").value;
    
    if (document.getElementById("userfirstnameregister").value == "") {
        alert("Please type your first name");
    }
    else if (document.getElementById("userlastnameregister").value == "") {
        alert("Please type your last name");
    }
    else if (document.getElementById("useremailregister").value == "") {
        alert("Please type your email");
    }
    else if (document.getElementById("userpasswordregister").value == "") {
        alert("Please type your password");
    }
    else if (document.getElementById("userinterestregister").value == "") {
        alert("Please type your interest");
    }
    else if (document.getElementById("rtypes").value === "") {
    alert("Please choose the user type");
    } 

    else {
        if (i === "Admin") {
            fetch("https://localhost:8080/api/RegisterAdmin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": 'text/plain',
                    'Access-Control-Allow-Origin': 'https://localhost:8080/api/RegisterAdmin',
                    "Access-Control-Allow-Methods": "POST",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization"

                },
                body: JSON.stringify(user)
            }).then(result => result.text())
                .then((result) => alert(result));

        } else if (i === "Student") {
            await fetch("https://localhost:8080/api/RegisterStudent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": 'text/plain',
                    'Access-Control-Allow-Origin': 'https://localhost:8080/api/RegisterStudent',
                    "Access-Control-Allow-Methods": "POST",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization"

                },
                body: JSON.stringify(user)
            }).then(result => result.text())
                .then(result => alert(result));
            getPeoples();

        } else {
            fetch("https://localhost:8080/api/RegisterVisitor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": 'text/plain',
                    'Access-Control-Allow-Origin': 'https://localhost:8080/api/RegisterVisitor',
                    "Access-Control-Allow-Methods": "POST",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization"

                },
                body: JSON.stringify(user)
            }).then(result => result.text()).then((result) => alert(result));

        }
        document.getElementById("userfirstnameregister").value = "";
        document.getElementById("userlastnameregister").value = "";
        document.getElementById("useremailregister").value = "";
        document.getElementById("userpasswordregister").value = "";
        document.getElementById("userinterestregister").value = "";
        showLogin();
    }

}

let Email = "";
let Password = "";
let Name = "";

const UserLogin = () => {
    Email = document.getElementById("useremaillogin").value;
    Password = document.getElementById("passwordlogin").value;
    const v = Email + ":" + Password;
    const credential = btoa(v);
    var l = document.getElementById("ltypes").value;
    if (document.getElementById("ltypes").selectedIndex == 0) {
        alert("Please choose your user type");
    }
    else {
        if (l === "Admin") {
            const result = fetch("https://localhost:8080/api/GetversionAdmin", {
                headers: {
                    "authorization": "Basic " + credential,
                }
            });

            const streamPromise = result.then((response) => {
                if (response.ok) {
                    alert("Sucessful Login");

                    document.getElementById("loginstatus").innerHTML = `<div class="dropdown" align="right" style="color: royalblue">
                <span class="s-top-username dropbtn"><i class="fa-solid fa-user"></i> Admin</span>
                <div class="dropdown-content">
                    <a onclick="logout()">Logout</a>
                </div>
                </div>`;

                    adminloginstate = true
                    showHomePage();
                    document.getElementById("re").style.display = "block";
                    document.getElementById("peo").style.display = "block";
                    document.getElementById("upl").style.display = "block";
                    document.getElementById("upd").style.display = "block";
                    document.getElementById("projectdelete").style.display = "block";
                    
                }
                else {
                    alert("Unsucessful Login");
                }
            });

        }
        else if (l === "Student") {
            const result = fetch("https://localhost:8080/api/GetversionStudent", {
                headers: {
                    "authorization": "Basic " + credential,
                }
            });

            const streamPromise = result.then((response) => {
                if (response.ok) {
                    alert("Sucessful login");

                    document.getElementById("loginstatus").innerHTML = `<div class="dropdown" align="right" style="color: royalblue">
                <span class="s-top-username dropbtn"><i class="fa-solid fa-user"></i> Student</span>
                <div class="dropdown-content">
                    <a onclick="logout()">Logout</a>
                </div>
            </div>`;

                    studentloginstate = true
                    showHomePage();
                    document.getElementById("peo").style.display = "block";
                    document.getElementById("upl").style.display = "block";
                    document.getElementById("upd").style.display = "block";
                    document.getElementById("projectdelete").style.display = "none";
                }
                else {
                    alert("Unsucessful Login");
                }
            });

        }
        else if (l === "Visitor") {
            const result = fetch("https://localhost:8080/api/GetversionVisitor", {
                headers: {
                    "authorization": "Basic " + credential,
                }
            });

            const streamPromise = result.then((response) => {
                if (response.ok) {
                    alert("Sucessful login");

                    document.getElementById("loginstatus").innerHTML = `<div class="dropdown" align="right" style="color: royalblue">
                <span class="s-top-username dropbtn"><i class="fa-solid fa-user"></i> Visitor</span>
                <div class="dropdown-content">
                    <a onclick="logout()">Logout</a>
                </div>
            </div>`;

                    visitorloginstate = true
                    showHomePage();
                }
                else {
                    alert("Unsucessful login");
                }
            });
        }
        document.getElementById("useremaillogin").value = "";
        document.getElementById("passwordlogin").value = "";
        document.getElementById("ltypes").selectedIndex = 0;
    }
}

const logout = () => {

    adminloginstate = false;
    studentloginstate = false;
    visitorloginstate = false;
    document.getElementById("useremaillogin").value = "";
    document.getElementById("passwordlogin").value = "";
    document.getElementById("ltypes").selectedIndex = 0;
    document.getElementById("useremaillogin").value = "";
    document.getElementById("passwordlogin").value = "";
    document.getElementById("ltypes").selectedIndex = 0;

    document.getElementById("loginstatus").innerHTML = `<div class="login-button" style="display: inline-flex;align-items: center;justify-content: center;padding: 8px 16px;background-color: royalblue;color: #ffffff;border-radius: 20px;cursor: pointer;transition: background-color 0.3s; margin-right: 20px;"
    onclick="showLogin()">
    <i class="fa-solid fa-user" style="margin-right: 4px;"></i>Login
</div>`

    document.getElementById("re").style.display = "none";
    document.getElementById("peo").style.display = "none";
    document.getElementById("upl").style.display = "none";
    document.getElementById("upd").style.display = "none";
    document.getElementById("projectdelete").style.display = "none";
    Email = "";
}


let adminloginstate = false;
let studentloginstate = false;
let visitorloginstate = false;
//let userName = '';
//let passWord = '';


async function ProjectDelete () {
    let ProjectID = document.getElementById("projectIDdelete").value;
    const v = Email + ":" + Password;
    const credential = btoa(v);
    if (ProjectID == "") {
        alert("Please enter the project id");
    }
    else {

        await fetch(`https://localhost:8080/api/DeleteProject/${ProjectID}`, {
            method: 'DELETE',
            headers: {
                "authorization": "Basic " + credential,
            }
        }).then(result => result.text())
            .then((result) => alert(result));
        document.getElementById("projectIDdelete").value = "";
        getProject();
    }
}
let reward;

function InsertReward(award) {
    if (award == "Excellence1") {
        reward = `<div class="fa-3x" style="margin-left:90%;">
                     <span class="fa-layers fa-fw" style="background:#fff">
                         <i class="fas fa-ribbon" data-fa-transform="shrink-10 down-1" data-fa-mask="fas fa-certificate" style="color: lightblue"></i>
                         <span class="fa-layers-counter" style="background:Blue">1st</span>
                     </span>
                 </div>`;
    } else if (award == "Excellence2") {
        reward = `<div class="fa-3x" style="margin-left:90%;">
                    <span class="fa-layers fa-fw" style="background:#fff">
                        <i class="fas fa-ribbon" data-fa-transform="shrink-10 down-1" data-fa-mask="fas fa-certificate" style="color: lightblue"></i>
                        <span class="fa-layers-counter" style="background:Blue">2st</span>
                    </span>
                 </div>`;
    } else if (award == "CommunityImpact1") {
        reward = `<div class="fa-3x" style="margin-left:90%;">
                    <span class="fa-layers fa-fw" style="background:#fff">
                        <i class="fas fa-thumbs-up" data-fa-transform="shrink-10 down-1" data-fa-mask="fas fa-certificate" style="color: orange"></i>
                        <span class="fa-layers-counter" style="background:Red">1st</span>
                    </span>
                  </div>`;
    } else if (award == "CommunityImpact2") {
        reward = `<div class="fa-3x" style="margin-left:90%;">
                      <span class="fa-layers fa-fw" style="background:#fff">
                          <i class="fas fa-thumbs-up" data-fa-transform="shrink-10 down-1" data-fa-mask="fas fa-certificate" style="color: orange"></i>
                          <span class="fa-layers-counter" style="background:Red">2nd</span>
                      </span>
                  </div>`;
    } else if (award == "PeopleChoice1") {
        reward = `<div class="fa-3x" style="margin-left:90%;">
                      <span class="fa-layers fa-fw" style="background:#fff">
                          <i class="fas fa-heart" data-fa-transform="shrink-10 down-1" data-fa-mask="fas fa-certificate" style="color: mediumpurple"></i>
                          <span class="fa-layers-counter" style="background:Green">1st</span>
                      </span>
                  </div>`;
    } else if (award == "PeopleChoice2") {
        reward = `<div class="fa-3x" style="margin-left:90%;">
                      <span class="fa-layers fa-fw" style="background:#fff">
                          <i class="fas fa-heart" data-fa-transform="shrink-10 down-1" data-fa-mask="fas fa-certificate" style="color: mediumpurple"></i>
                          <span class="fa-layers-counter" style="background:Green">2nd</span>
                      </span>
                  </div>`;
    } else {
        reward = `<div class="fa-3x" style="margin-left:90%;">
                      <span style="background:#fff">
                          <i data-fa-transform="shrink-10 down-1" data-fa-mask="fas fa-certificate" style="color: mediumpurple"></i>
                          <span style="background:Green"></span>
                      </span>
                  </div>`;
    }
}



const getProject = () => {

    const fetchPromise = fetch('https://localhost:8080/api/ListProjects',
        {
            headers: {
                "Accept": "application/json",

            },
        }
    );
    const Promise = fetchPromise.then((response) => response.json());

    Promise.then((data) => projectInformations(data));
}

const projectInformations = (projects) => {
    let table = "";

    const projectInformation = (project) => {

        ProjectID = project.projectID;
        InsertReward(project.award);

        table += `<div class="box" onclick="showDetails('${project.projectID}')">
                    ${reward}
                    <img src="https://localhost:8080/api/ProjectPhoto/${project.projectName}" width="450" alt="">
                    <h3>${project.projectName}</h3>
                    
                </div>`;
        const contents = document.getElementById("projects");
        reward = null;

        contents.innerHTML = table;


    }

    projects.forEach((projects) => projectInformation(projects));
}
const Search = () => {
    let shortcut = document.getElementById("Search").value;

    if (shortcut === "") {
        getProject();
    }
    else {
        const fp = fetch(`https://localhost:8080/api/GetProjects/${shortcut}`)

        const sp = fp.then((response) => response.json());

        sp.then((projects) => {
            if (projects.length != 0) {
                projectInformations(projects);

            } else {
                document.getElementById("products").innerHTML = "";
            }
        }
        );

    }
}

const showDetails = (projectID) => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("reward").style.display = "none";
    document.getElementById("people").style.display = "none";
    document.getElementById("yourproject").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("createteam").style.display = "none";
    //   document.getElementById("team").style.display = "none";
    document.getElementById("details").style.display = "block";
    document.getElementById("updateproject").style.display = "none";
    document.getElementById("deleteproject").style.display = "none";


    const fp = fetch(`https://localhost:8080/api/GetProject/${projectID}`);

    const sp = fp.then((response) => response.json());


    sp.then((data) => projectInformations(data));
    let table = "";
    const projectInformations = (data) => {
        table += `<div class="box">
                    <img src="https://localhost:8080/api/ProjectPhoto/${data.projectName}" width="450" alt="">
                    <a id = "heart${data.projectID}" class="fas fa-heart" onclick="Like(${data.projectID})"></a>
                    <h3>ProjectID: ${data.projectID}</h3>
                    </br>
                    <h3>Team Name: ${data.teamName}</h3>
                    </br>
                    <h3>Semester: ${data.semester}</h3>
                    </br>
                    <h3>Skill: ${data.skill}</h3>
                    </br>
                    <h3>Project Description: ${data.introduction}</h3>
                    </br>
                    <h3>Approach: ${data.approach}</h3>
                    </br>
                    <h3 id = "likenum">Like: ${data.likes}</h3>
                  
                  
                  </br>
                    <h3>Video: <a href="${data.video}" target="_blank">${data.video} </a ></h3>
                </div> `
        const contents = document.getElementById("ProjectdetailsTable");
        showComments(data.projectID);
        contents.innerHTML = table;
    }
}

function Like(projectID) {
    if (adminloginstate == false && studentloginstate == false && visitorloginstate == false) {
        alert("Please log in first.");
        showLogin();
    } else {
        const heart = document.getElementById(`heart${projectID}`);
        if (heart.classList.contains('red')) {
            heart.classList.remove('red');
            const fetchPromise = fetch(`https://localhost:8080/api/UpdateLike?ProjectID=${projectID}&Plus=false`, {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    "Access-Control-Allow-Methods": "POST",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization"
                },
            }
            );
            const newStr = document.getElementById("likenum").innerText.replace(/\D/g, '');
            document.getElementById("likenum").innerHTML = `<h3 id = 'likenum'>Like: ${parseInt(newStr) - 1}</h3>`;
        }
        else {
            heart.classList.add('red');
            const fetchPromise = fetch(`https://localhost:8080/api/UpdateLike?ProjectID=${projectID}&Plus=true`, {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    "Access-Control-Allow-Methods": "POST",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization"
                },
            }
            );
            const newStr = document.getElementById("likenum").innerText.replace(/\D/g, '');
            document.getElementById("likenum").innerHTML = `<h3 id = 'likenum'>Like: ${parseInt(newStr) + 1}</h3>`;
        }
    }
}



const showComments = (ProjectID) => {
    //console.log(ProjectID);
    const fetchPromise = fetch(`https://localhost:8080/api/GetProjectCommentBYProjectID/${ProjectID}`, {
        headers: {
            'Content-Type': 'text/plain'
        }
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((datas) => comments(datas));
    let table = "";
    const comments = (datas) => {
        //console.log(datas)
        const cs = (data) => {
            table += `
            <div class='comment'>
            <span class="name">${data.name}</span>
            <p>${data.commentText}</p>
            </div>`;
            document.getElementById('CommentsTable').innerHTML = table;
        }
        datas.forEach((data) => cs(data))
    }
    let table1 = "";
    table1 += `
    <h1>Comment information
    <span>Please leave a comment.</span>
    </h1>

    <label>
    <span>Name: </span>
    <input type="text" id="commentprojectname" value="" name="address"/>
    <div class="error-msg"></div>
    </label>

    <label>
    <span>CommentText: </span>
    <input type="text" id="commenttext"></input>
    </label>
    <div class="success-msg"></div>
    <label>
    <button type="button" class="submitbutton" onclick="writeComments(${ProjectID})">submit</button>
    </label>`;

    document.getElementById("writecommenttable").innerHTML = table1;
    //  writeComments(ProjectID)
    //<div>
    //        <label>ProjectID</label>
    //        <input type="text" id="commentprojectid" value ="${ProjectID}"/>
    //    </div>
    //    <div>
    //       <label>Name</label>
    //        <input type="text" id="commentprojectname" />
    //    </div>
}

const writeComments = (ProjectID) => {
    if (adminloginstate === true || studentloginstate === true || visitorloginstate === true) {
        let comment = {
            "ProjectID": ProjectID,
            "Name": document.getElementById("commentprojectname").value,
            "CommentText": document.getElementById("commenttext").value
        }
        if (document.getElementById("commentprojectname").value == "") {
            comment = {
                "ProjectID": ProjectID,
                "Name": "Anonymous",
                "CommentText": document.getElementById("commenttext").value
            }
        }
        fetch("https://localhost:8080/api/WriteComment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": 'text/plain',
                'Access-Control-Allow-Origin': 'https://localhost:8080/api/WriteComment',
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"

            },
            body: JSON.stringify(comment)
        }).then(alert("Thanks for your comment!"))
        showDetails(ProjectID);
    } else {
        alert("Please login first");
        showLogin();
    }
}



const getPeoples = () => {
    const fetchPromise = fetch('https://localhost:8080/api/ListStudents');
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => showPeoples(data));
}

const showPeoples = (items) => {
    let htmlString = `<tbody><tr><th>Peoples</th><th>interest</th></tr></tbody>`
    const showItem = (item) => {
        htmlString += `
            <tr>
                <td>
                    <p>${item.firstName} ${item.lastName}</p>
                </td>
                <td>
                    <p>${item.interest}</p>
                </td>
        </tr>
        `
        document.getElementById('PeopleTable').innerHTML = htmlString;
    }
    items.forEach((item) => showItem(item));
}

const searchPeople = () => {
    if (adminloginstate === false && studentloginstate === false && visitorloginstate === false) {
        alert("Please Log In First!");
        showLogin();
    }
    let token = document.getElementById("searchpeopleInput").value;
    console.log(token)
    if (token != '') {
        const fetchPromise = fetch(`https://localhost:8080/api/GetStudentByName${token}`);
        const streamPromise = fetchPromise.then((response) => response.json());
        streamPromise.then((items) => {
            if (items.length == 0) {
                document.getElementById('PeopleTable').innerHTML = "";
            } else {
                showPeoples(items)
            }
        });
    } else {
        getPeoples();
    }
}

const getTeams = () => {
    const fetchPromise = fetch('https://localhost:8080/api/ListTeams');
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => showTeams(data));
}

const showTeams = (items) => {
    let htmlString = `<tbody><tr><th>Team</th><th>Teammembers</th></tr></tbody>`
    const showItem = (item) => {
        if (item.student1 === "") {
            //<button onclick="JoinTeam('${item.teamName}')">Join</button>
            //<button onclick="DeleteTeam('${item.teamName}')">Delete</button>
            htmlString += `
            <tr>
                <td>
                    <p>${item.teamName}</p>
                    
                </td>
                <td>
                    <p> </p>
                
                </td>
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Join" onclick="JoinTeam('${item.teamName}')" />
                   
                </td>
                
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Delete" onclick="DeleteTeam('${item.teamName}')" />
                    
                </td>
        </tr>
        `} else if (item.student2 === "") {
            htmlString += `
            <tr>
                <td>
                    <p>${item.teamName}</p>
                    
                </td>
                <td>
                    <p> ${item.student1}</p>
                    
                </td>
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Join" onclick="JoinTeam('${item.teamName}')" />
                </td>
                
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Delete" onclick="DeleteTeam('${item.teamName}')" />
                </td>
        </tr>
        `} else if (item.student3 === "") {
            htmlString += `
            <tr>
                <td>
                    <p>${item.teamName}</p>
                    
                </td>
                <td>
                    <p> ${item.student1}, ${item.student2}</p>
                    
                </td>
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Join" onclick="JoinTeam('${item.teamName}')" />
                </td>
                
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Delete" onclick="DeleteTeam('${item.teamName}')" />
                </td>
        </tr>
        `
        } else if (item.student4 === "") {
            htmlString += `
            <tr>
                <td>
                    <p>${item.teamName}</p >
                    
                </td>
                <td>
                    <p> ${item.student1}, ${item.student2}, ${item.student3}</p>
                    
                </td>
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Join" onclick="JoinTeam('${item.teamName}')" />
                </td>
                
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Delete" onclick="DeleteTeam('${item.teamName}')" />
                </td>
        </tr>
        `
        } else if (item.student5 === "") {
            htmlString += `
            <tr>
                <td>
                    <p>${item.teamName}</p>
                    
                </td>
                <td>
                    <p> ${item.student1}, ${item.student2}, ${item.student3}, ${item.student4}</p>
                    
                </td>
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Join" onclick="JoinTeam('${item.teamName}')" />
                </td>
                
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Delete" onclick="DeleteTeam('${item.teamName}')" />
                </td>
        </tr>
        `} else if (item.student6 === "") {
            htmlString += `
            <tr>
                <td>
                    <p>${item.teamName}</p>
                    
                </td>
                <td>
                    <p> ${item.student1}, ${item.student2}, ${item.student3}, ${item.student4}, ${item.student5}</p>
                    
                </td>
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Join" onclick="JoinTeam('${item.teamName}')" />
                </td>
                
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Delete" onclick="DeleteTeam('${item.teamName}')" />
                </td>
        </tr>
        `
        } else {
            htmlString += `
            <tr>
                <td>
                    <p>${item.teamName}</p>
                    
                </td>
                <td>
                    <p> ${item.student1}, ${item.student2}, ${item.student3}, ${item.student4}, ${item.student5}, ${item.student6}</p>
                    
                </td>
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Join" onclick="JoinTeam('${item.teamName}')" />
                </td>
                
                <td>
                    <input type="button" class="register-button" style="width: 80px;text-align: center;padding-left: 0;height:48px;background: rgb(26, 115, 232);color: white;border: none;" value="Delete" onclick="DeleteTeam('${item.teamName}')" />
                </td>
        </tr>
        `
        }
        document.getElementById('TeamTable').innerHTML = htmlString;
    }
    items.forEach((item) => showItem(item));
}


const searchTeam = () => {
    if (adminloginstate === false && studentloginstate === false && visitorloginstate === false) {
        alert("Please Log In First!");
        showLogin();
    }
    let token = document.getElementById("searchteamInput").value;
    console.log(token)
    if (token != '') {
        const fetchPromise = fetch(`https://localhost:8080/api/GetTeamByName${token}`);
        const streamPromise = fetchPromise.then((response) => response.json());
        streamPromise.then((items) => {
            if (items.length == 0) {
                document.getElementById('TeamTable').innerHTML = "";
            } else {
                showTeams(items)
            }
        });
    } else {
        getTeams();
    }
}

async function JoinTeam(teamName) {
    if (adminloginstate === false && studentloginstate === false && visitorloginstate === false) {
        alert("Please log in first!");
        showLogin();
    } else if (studentloginstate === false) {
        alert("Sorry, only students can join a team!");
    } else {
        const v = Email + ":" + Password;
        const credential = btoa(v);
        let team = {
            "TeamName": teamName
        };

        await fetch(`https://localhost:8080/api/JoinTeam`, {
            method: 'POST',
            headers: {
                "authorization": "Basic " + credential,
                "Content-Type": "application/json",
                "accept": 'text/plain',
                'Access-Control-Allow-Origin': 'https://localhost:8080/api/JoinTeam',
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"

            },
            body: JSON.stringify(team)
        }).then(result => result.text())
            .then((result) => alert(result));
    }
    getTeams();
    showPeople();
}

async function DeleteTeam(teamName) {
    const v = Email + ":" + Password;
    const credential = btoa(v);
    if (adminloginstate === false) {
        alert("Sorry, only admin can delete team!");
    } else {
        await fetch(`https://localhost:8080/api/DeleteTeam/${teamName}`, {
            method: 'DELETE',
            headers: {
                "authorization": "Basic " + credential,
            }
        }).then(result => result.text())
            .then((result) => alert(result));
    }
    getTeams();
    showPeople();
}

async function CreateTeam (){
    if (adminloginstate === false && studentloginstate === false && visitorloginstate === false) {
        alert("Please Log In First!");
        showLogin();
    }
    else if (adminloginstate === false) {
        alert("Sorry, only admin can create team!");
        showLogin();
    } else {
        let team = {
            "TeamName": document.getElementById("createteamname").value,
            "Student1": document.getElementById("createstudent1").value,
            "Student2": document.getElementById("createstudent2").value,
            "Student3": document.getElementById("createstudent3").value,
            "Student4": document.getElementById("createstudent4").value,
            "Student5": document.getElementById("createstudent5").value,
            "Student6": document.getElementById("createstudent6").value,
        }
        await fetch("https://localhost:8080/api/AddTeams", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": 'text/plain',
                'Access-Control-Allow-Origin': 'https://localhost:8080/api/AddTeams',
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"

            },
            body: JSON.stringify(team)
        }).then(alert("Great! You have successfully created this team!"));
        getTeams();
        showPeople();
    }
}


async function ProjectUpload() {

    if (studentloginstate === false) {
        alert("Sorry, only student can upload the project!");
        showLogin();
    } else {
        if (document.getElementById("TeamNameUpload").value == "") {
            alert("Please fill your team name");
        } else if (document.getElementById("ProjectNameUpload").value == "") {
            alert("Please fill your project name");
        } else if (document.getElementById("SemesterUpload").value == "") {
            alert("Please fill your semster")

        } else if (document.getElementById("SkillUpload").value == "") {
            alert("Please fill your project's skills");
        } else if (document.getElementById("IntroductionUpload").value == "") {
            alert("Please fill your project's' overview");
        } else if (document.getElementById("ApproachUpload").value == "") {
            alert("Please fill your project's' approach");
        } else if (document.getElementById("VideoUpload").value == "") {
            alert("Please fill your project's' video link");
        } else if (document.getElementById("upload").value === "") {
            alert("Please choose your image");
        } else {
            let project = {
                "TeamName": document.getElementById("TeamNameUpload").value,
                "ProjectName": document.getElementById("ProjectNameUpload").value,
                "Semester": document.getElementById("SemesterUpload").value,
                "Skill": document.getElementById("SkillUpload").value,
                "Introduction": document.getElementById("IntroductionUpload").value,
                "Approach": document.getElementById("ApproachUpload").value,
                "Video": document.getElementById("VideoUpload").value
            }

            uploadimage();

            await fetch("https://localhost:8080/api/AddProjects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": 'text/plain',
                    'Access-Control-Allow-Origin': 'https://localhost:8080/api/AddProjects',
                    "Access-Control-Allow-Methods": "POST",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization"

                },
                body: JSON.stringify(project)
            }).then(alert("Great! You have successfully upload project!"));

            document.getElementById("TeamNameUpload").value = "";
            document.getElementById("ProjectNameUpload").value = "";
            document.getElementById("SemesterUpload").value = "";
            document.getElementById("SkillUpload").value = "";
            document.getElementById("IntroductionUpload").value = "";
            document.getElementById("ApproachUpload").value = "";
            document.getElementById("VideoUpload").value = "";
            getProject();

        }
    }

}

const uploadimage = () => {
    const image = document.getElementById("upload").files[0];
    const formData = new FormData();

    formData.append("file", image);


    const result = fetch("https://localhost:8080/api/Uploadimage", {
        method: "POST",

        body: formData,

    }
    );
    result.then((response) => {
        if (!response.ok) {
            alert("Fail to upload the image, please try again");
        }


    });
}

async function ProjectUpdate () {


    let project = {
        "ProjectID": document.getElementById("ProjectIDUpdate").value,
        "TeamName": document.getElementById("TeamNameUpdate").value,
        "ProjectName": document.getElementById("ProjectNameUpdate").value,
        "Semester": document.getElementById("SemesterUpdate").value,
        "Skill": document.getElementById("SkillUpdate").value,
        "Introduction": document.getElementById("IntroductionUpdate").value,
        "Approach": document.getElementById("ApproachUpdate").value,
        "Video": document.getElementById("VideoUpdate").value
    }
    if (document.getElementById("ProjectIDUpdate").value === "") {
        alert("Please enter your project Id");
    }
    else {
        const projectid = document.getElementById("ProjectIDUpdate").value;
        console.log(projectid);

        await fetch(`https://localhost:8080/api/GetProject/${projectid}`).then((response) => {
            if (!response.ok) {
                alert("The project is not found, please try again");
            }
            else {
                if (document.getElementById("update").value !== "") {
                    updateimage();
                }
                fetch(`https://localhost:8080/api/UpadateProject/${projectid}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "accept": 'text/plain',
                        //'Access-Control-Allow-Origin': 'https://localhost:8080/api/AddProjects',
                        "Access-Control-Allow-Methods": "POST",
                        "Access-Control-Allow-Headers": "Content-Type, Authorization"

                    },
                    body: JSON.stringify(project)
                }).then(alert("Great! You have successfully update project!"))

                document.getElementById("ProjectIDUpdate").innerHTML = ""
                document.getElementById("TeamNameUpdate").innerHTML = "";
                document.getElementById("ProjectNameUpdate").innerHTML = "";
                document.getElementById("SemesterUpdate").innerHTML = "";
                document.getElementById("SkillUpdate").innerHTML = "";
                document.getElementById("IntroductionUpdate").innerHTML = "";
                document.getElementById("ApproachUpdate").innerHTML = "";
                document.getElementById("VideoUpdate").innerHTML = "";
                getProject();
            }
        }
        );
    }


}
const updateimage = () => {
    const image = document.getElementById("upload").files[0];
    const formData = new FormData();

    formData.append("file", image);


    const result = fetch("https://localhost:8080/api/Uploadimage", {
        method: "POST",

        body: formData,

    }
    );
    result.then((response) => {
        if (!response.ok) {
            alert("Fail to upload the image, please try again");
        }


    });
}

function GetLikeNum(projectID) {
    const fetchPromise = fetch('https://localhost:8080/api/GetLikeCount/${projectID}');
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => alert(data.value));
}

let semester_year = [];

function Semester_Filter() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    for (let i = 2020; i < year; i++) {
        semester_year.push(["Semester 1", i]);
        semester_year.push(["Semester 2", i]);
    }

    if (!(["Semester 1", year] in semester_year)) {
        if (month >= 2) {
            semester_year.push(["Semester 1", year]);
        }
    }
    if (!(["Semester 2", year] in semester_year)) {
        if (month >= 8) {
            semester_year.push(["Semester 2", year]);
        }
    }


    var select = document.getElementById("semester");

    for (var i = 0; i < semester_year.length; i++) {
        const opt = `<option>${semester_year[i][0] + " " + semester_year[i][1]}</option>`;
        document.querySelector('.Semester').insertAdjacentHTML('beforeend', opt);
    }

    //document.getElementById("SemesterUpload").value = semester_year[semester_year.length - 1][0] + " " + semester_year[semester_year.length - 1][1];

    //document.getElementById("SemesterUpdate").value = semester_year[semester_year.length - 1][0] + " " + semester_year[semester_year.length - 1][1];

}

function GetProejctsBySemester(semester) {
    if (semester == "Select Semester") {
        getProject();
    } else {
        let para = semester.split(" ");

        const fp = fetch(`https://localhost:8080/api/GetProjectsBySemester/${para[0]}%20${para[1]}%20${para[2]}`)

        const sp = fp.then((response) => response.json());

        sp.then((projects) => {
            if (projects.length != 0) {
                projectInformations(projects);

            } else {
                document.getElementById("projects").innerHTML = "No proejcts in this semester.";
            }
        }
        );
    }
}

Semester_Filter();

GetProjectNameInReward()
function GetProjectNameInReward() {
    fetch(`https://localhost:8080/api/GetProjectsBySemester/${semester_year[semester_year.length - 1][0]}%20${semester_year[semester_year.length - 1][1]}`)
        .then(response => response.json())
        .then(data => {

            // Loop through the data array and create an option element for each item
            data.forEach(item => {
                //options.push(`ID: ${item.projectID} - Name: ${item.projectName}`);
                const markup = `<option value="${item.projectID}">ID: ${item.projectID} - Name: ${item.projectName}</option>`;
                //document.querySelector('select').add(new Option("${item.projectID}", "ID: ${ item.projectID } - Name: ${ item.projectName }"))
                document.querySelectorAll('.ProjectTeam').forEach(value => {
                    value.insertAdjacentHTML('beforeend', markup);
                })
            });
        })
}


function AwardProject() {
    var value1 = document.querySelector('#ltypes1');
    var value2 = document.querySelector('#ltypes2');
    var value3 = document.querySelector('#ltypes3');
    var value4 = document.querySelector('#ltypes4');
    var value5 = document.querySelector('#ltypes5');
    var value6 = document.querySelector('#ltypes6');

    const project_id = [value1.value, value2.value, value3.value, value4.value, value5.value, value6.value];

    let status = [];

    for (let i = 0; i < project_id.length - 1; i++) {
        for (let j = i + 1; j < project_id.length; j++) {
            if (project_id[i] == project_id[j] && project_id[i] != "Student" && status.length == 0) {
                alert("Can not select multiple project for same award!");
                status.push(false);
            }
        }
    };

    if (status.length == 0) {
        for (let i = 0; i < project_id.length; i++) {
            if (project_id[i] == "Student") {
                project_id[i] = -1;
            }
        }
        console.log(project_id);
        let projectid = {
            "projectID": project_id
        }
         fetch("https://localhost:8080/api/RewardProject", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": 'text/plain',
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            },
            body: JSON.stringify(projectid)
        }).then(result => result.text())
            .then((result) => alert(result));
    }


}

const loading = () => {
    getPeoples();
    getTeams();
    showHomePage();
    document.getElementById("re").style.display = "none";
    document.getElementById("peo").style.display = "none";
    document.getElementById("upl").style.display = "none";
    document.getElementById("upd").style.display = "none";
    document.getElementById("projectdelete").style.display = "none";
    document.getElementById("deleteproject").style.display = "none";
    getProject();
}

window.onload = loading;