const nocoInfo = {
    name: "Nico",
    age: 30,
    gender: "Male",
    isHandsome: true,
    favMovies: ["Along the gods", "LOTR", "Oldboy"],
    favFood: [
        {
            name:"Kimchi",
            fatty: false
        },
        {
            name: "Cheese berger",
            fatty: true
        }
    ]   
}

console.log(nocoInfo.favFood[0].name);