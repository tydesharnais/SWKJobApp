


function logSubmit(event) {
    

    var jobData = {
        companyName: document.getElementById('companyName').value,
        jobTitle: document.getElementById('jobTitle').value,
        appDate: document.getElementById('appDate').value,
        jobUrl: document.getElementById('jobUrl').value
    };
    
    if(localStorage.getItem('jobs') == null){
        localStorage.setItem('jobs', '[]');
    }

    var oldData = JSON.parse(localStorage.getItem('jobs'))

    oldData.push(jobData)

    localStorage.setItem('jobs', JSON.stringify(oldData))

    console.log(localStorage)

    alertArea.innerHTML = `
    <div class="alert alert-success" role="alert">
        Added Job:${jobData.jobTitle} Successfully!
    </div> 
    `

    // log.textContent = `Form Submitted!\n Timestamp: ${event.timeStamp}\n Job Name: ${jobData.jobTitle}`;
  
    // Save the data to Chrome's local storage
  
    
    event.preventDefault();

  }

const form = document.getElementById("inputjobForm")
let alertArea = document.getElementById("log")

form.addEventListener("submit", logSubmit)