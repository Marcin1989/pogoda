

const htmlD = () => {

    fetch(`https://danepubliczne.imgw.pl/api/data/synop/format/html`)
    .then(date => document.body.DOCUMENT_FRAGMENT_NODE)
}

const getData = () => {

    fetch(`https://danepubliczne.imgw.pl/api/data/synop`)
    .then(dane => dane.json())
    .then(dane=> {
        console.log(getData);
    })

}