from fastapi import FastAPI, Query
from googlesearch import search
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/recieve-Glassdoor")
async def reverse_string(data: str = Query(None)):
    dataArray = data.split('_')
    jobTitle = dataArray[0]
    jobLocation = dataArray[1]
    jobState = dataArray[2]
    jobRecency = dataArray[3]

    queryStruct = f'glassdoor {jobTitle} {jobLocation} {jobState} jobs'
    url =''
    for result in search(queryStruct, num_results=10):
        url = str(result)
        print(url)
        if(jobLocation.lower() in url):
            if(jobTitle.lower() in url):
                print('here')
                break
    url += f'?fromAge={jobRecency}'
    return {"URL": url}
