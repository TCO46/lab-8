const api1 = "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST"

function onClick() {
    let data = fetch(api1)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        const get = data.detail[3]
        console.log("Success: ", data.details)
        document.getElementById("data1").innerHTML = `Số ca khỏi: ${get.recovered}`
        document.getElementById("data2").innerHTML = `Số ca đang điều trị: ${get.treating}` 
        document.getElementById("data3").innerHTML = `Số ca tử vong: ${get.death}`
    })

    console.log(data)
}