
async function pyEndpoint(jobData){
  let city = "";
  let state = "CA";
  let jobtitle = "";
  let recency = "3";

  const jobtitleArray = jobData.jobTitle.split(" ");
  const cityArray = jobData.jobLocation.split(" ");

  //Job title
  for(let i=0; i<jobtitleArray.length; i++){
    jobtitle+=jobtitleArray[i];
    if(i != jobtitleArray.length-1){
      jobtitle+='-';
    }
  }
  for(let i=0; i<cityArray.length; i++){
    city+=cityArray[i];
    if(i != cityArray.length-1){
      city+='-';
    }
  }

  let query = jobtitle+'_'+city+'_'+jobData.jobState+'_'+jobData.jobPost;
  console.log(query)
  
  const response = await fetch(`http://localhost:8000/recieve-Glassdoor?data=${encodeURIComponent(query)}`);
  const data = await response.json();
  console.log("Url:", data);
  setTimeout(5000);
  window.open(data.URL, "_blank");

}

function logSubmit(event) {
    // Define the base URLs for job search on different websites
    const indeedBaseUrl = 'https://www.indeed.com/jobs';
    const glassdoorBaseUrl = 'https://www.glassdoor.com/Job/jobs.htm';
    const linkedinUrl = 'https://www.linkedin.com/jobs/'
    

    var jobData = {
        jobTitle: document.getElementById('jobTitle').value,
        jobLocation: document.getElementById('jobLocation').value,
        jobPost: document.getElementById('jobPost').value,
        jobState: document.getElementById('stateID').value
    };


    // Create the search query parameters
    const indeedParams = `?q=${encodeURIComponent(jobData.jobTitle)}&l=${encodeURIComponent(jobData.jobLocation)}&fromage=${jobData.jobPost}`;
    const glassdoorParams = `?keyword=${encodeURIComponent(jobData.jobTitle)}&location=${encodeURIComponent(jobData.jobLocation)}&fromAge=${jobData.jobPost}`;

    // Construct the full URLs
    const indeedSearchUrl = indeedBaseUrl + indeedParams;
    pyEndpoint(jobData);

    // Open the new windows
    window.open(indeedSearchUrl, "_blank");
    setTimeout(2000);
    window.open(linkedinUrl, "_blank")
    

    console.log(indeedSearchUrl);
    
    event.preventDefault();
    
  }

const form = document.getElementById("curatejobForm")
let alertArea = document.getElementById("log")

form.addEventListener("submit", logSubmit)