export const testFunction = () => {
    console.log("Hello Cold World")
}

//displaying in html
var cityDirectory:string[] = [];

export const addCity = (city:string) => {
    cityDirectory.push(city);
    displayDirectory();
}

export const displayDirectory = () => {
    let list = document.getElementById('cityDirectory');
    if(list) {
        while(list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    cityDirectory.forEach((item) => {
        if(list) {
            let li = document.createElement("li");
            li.innerText = item
            list.appendChild(li)
        }
    })
}


testFunction();