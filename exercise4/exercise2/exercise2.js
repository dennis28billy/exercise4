//  Mobile Application Development - Paralel B
//  Nama : Dennis Billy Yosua Toreh

//1. Callback
//a - e
const mandi = () => console.log("Mandi");
 
const sarapan = (callback) => {
    setTimeout(() => {
        console.log("Sarapan tertunda 3 detik");
        callback();
    }, 3000);
}

const berangkatSekolah = () => {
    console.log("Berangkat")
}


// f
mandi();
sarapan(berangkatSekolah);


//2. Promise
//a

const helloWorld = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        },2000);
    });
};


//b 
const messages = async () =>{
    const msg = await helloWorld();
    console.log(msg);
};


//c
messages();


// 3. Fetch
//a-e
const ambilDataUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

ambilDataUser();