// class Stream{
//     constructor(value,nextValue){
//         this.value = value;
//         this.nextValue=nextValue
//     }

//     get value() {
//         return this.value
//     }

//     get next() {
//         this.value = this.nextvalue(this.value)
//         return this.value
//     }
// }

const fetch  = require('node-fetch')

class StreamPar{
    constructor(value){
        this.value=value;
    }

    get next()
    {
        this.value = this.value + 2
        return this.value
    }
}

const x = new StreamPar(4)
for(let i = 0;i<6;i++)
{
    console.log(`x[${i}] = ${x.next}`)
}

//ex2

class Software{
    constructor(name){
        this.name = name
    }

    run()
    {
        console.log(`${this.name} is running...`)
    }
}


const s1 = new Software("s1")
s1.run();

class Plugin{
    constructor(name){
        this.name=name
        console.log(`${this.name} is a plugin`)
    }

}

const p1 = new Plugin("plugin1")
const p2 = new Plugin("plugin2")
const p3 = new Plugin("plugin3")



class Broswer extends Software{
    constructor(name)
    {
        super(name)
        this.plugins = []
    }

    add(p){
        this.plugins.push(p)
        console.log(`${p.name} was added to this browser!`)
    }

    install()
    {
        this.plugins.forEach(element => {
            console.log(`${element.name} is installing...`)
        });
    }
}

const b1 = new Broswer("browser1")
b1.add(p1)
b1.add(p2)
b1.add(p3)
b1.install()


//ex3

function ridicareLaPutere() {
  const cache = {} 

  function pow(base, exp) {
    const key = `${base}^${exp}`

    if (cache[key] !== undefined) {
      console.log(`cache hit pentru ${key}`)
      return cache[key]
    }

    if (exp === 0) {
      cache[key] = 1
    } else {
      console.log(`calculez ${key}`)
      cache[key] = base * pow(base, exp - 1)
    }

    return cache[key]
  }

  return pow
}

const ex = ridicareLaPutere()

console.log("2^3 " + ex(2,3))
console.log("2^2 " + ex(2,2))
console.log("2^5 " + ex(2,5))
console.log("3^4 " + ex(3,4))
console.log("3^2 " + ex(3,2))


//ex4
Number.prototype.times = function(altaMetoda) 
{
    for(let i = 0;i<this;i++)
        altaMetoda(i)
}

console.log((3).times((i) => console.log(`Salut la iteratia ${i}`)))


//ex5
const increaseSalary =(salarii,procentMarire)=>
{
    if(Array.isArray(salarii) !== true || typeof procentMarire !== "number" || isNaN(procentMarire))
        throw new Error("inputuri invalide")
    else{
        for(let i = 0;i< salarii.length;i++)
        {
            console.log(`Salariul ${salarii[i]} dupa marire:`)
            salarii[i] = salarii[i] + salarii[i]*procentMarire/100
            console.log(salarii[i])
        }

    }
}

console.log(increaseSalary([2000,3000,4000],10))
console.log(increaseSalary(1,"s"))

//ex6
function getPlanesOverRomaniaThen() {
  const bbox = {
    lamin: 43.618682,
    lamax: 48.2653964,
    lomin: 20.2619773,
    lomax: 30.0454257,
  };

  const url = `https://opensky-network.org/api/states/all` +
              `?lamin=${bbox.lamin}&lomin=${bbox.lomin}` +
              `&lamax=${bbox.lamax}&lomax=${bbox.lomax}&extended=1`;

  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(data => {
      const rows = Array.isArray(data.states) ? data.states : [];
      return rows
        .filter(r => r[8] === false)
        .map(r => ({
          icao24: r[0],
          callsign: r[1]?.trim() || null,
          originCountry: r[2],
          longitude: r[5],
          latitude: r[6],
          baroAltitudeM: r[7],
          onGround: r[8],
          velocityMs: r[9],
          trueTrackDeg: r[10],
          verticalRateMs: r[11],
          geoAltitudeM: r[13],
          squawk: r[14],
          spi: r[15],
          positionSource: r[16],
          category: r[17],
        }));
    });
}

getPlanesOverRomaniaThen()
  .then(planes => console.log("Avioane în aer deasupra României:", planes))
  .catch(err => console.error("Eroare:", err));


