let developers = []

main()



async function main(){
    let data = await downloadData()
    developers = data
    fillHTML(developers)
    console.log(developers)
    highestEarner(developers)
    groupworkplace(developers,"starsolutions")
}

async function downloadData(){
    let response = await fetch("https://api.siposm.hu/getDevelopers")
    return await response.json()
}

function fillHTML(array){
    let target = document.querySelector("#target-table-body")
    target.innerHTML = ""
    for(const element of array){
        let tr = document.createElement("tr")
        let tdName = document.createElement("td")
        let tdEmail = document.createElement("td")
        let tdJob = document.createElement("td")
        let tdAge = document.createElement("td")
        let tdSalary = document.createElement("td")

        tdName.innerText = element.name
        tdEmail.innerText = element.email
        tdJob.innerText = element.job

        if (element.age >= 35 ) {
            tdAge.innerHTML = `<span class="badge bg-primary rounded-pill">${element.age}</span>`    
        }else {tdAge.innerText = element.age}

        tdName.classList.add("text-decoration-underline")
        tdJob.classList.add("bold")
        
        
        tdSalary.innerText = (element.salary + " Ft")


        tr.appendChild(tdName)
        tr.appendChild(tdEmail)
        tr.appendChild(tdJob)
        tr.appendChild(tdAge)
        tr.appendChild(tdSalary)

        target.appendChild(tr)
    }
}


 function highestEarner(array) {
    let highestEarnerPerson = array.reduce((prevDev, currentDev) => prevDev.salary > currentDev.salary ? prevDev : currentDev)
    console.log(highestEarnerPerson);
}


function groupByWorkplace(array, companyName = "alphatech") {
    let workers = array.filter(x => x.email.includes(companyName))
    console.log(workers);
}