// Function to load and display job data
function loadAndDisplayJobs() {
    const data = localStorage.getItem('jobs');
    const sites = JSON.parse(data);
    document.getElementById('jobListings').innerHTML =`
    <div>
        ${generateTable(sites)}
    </div>
    `
}

const generateTable = (sites) => {
    return `
    <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Job Title</th>
                <th scope="col">Company</th>
                <th scope="col">Date Applied</th>
                <th scope="col">Job URL</th>
              </tr>
            </thead>
            <tbody>
              ${createTableData(sites)}
            </tbody>
          </table>
          `
  }


const createTableData = (sites) => {
    let html = ``
    let i = 1

    sites.forEach(site => {
        
        html += `
        <tr>
        <th scope="row">${i}</th>
        <td>${site.jobTitle}</td>
        <td>${site.companyName}</td>
        <td>${site.appDate}</td>
        <td>${site.jobUrl}</td>
      </tr>
          `
          i++;
    })
    return html
  }

function deleteLocal(event){
    if(localStorage.getItem('jobs') != null){
        localStorage.removeItem('jobs');
        alert('Cleared Local Storage');
        location.reload();
    }
    else{
        alert('No Local Storage to be cleared...');
    }
    
    event.preventDefault();
}

