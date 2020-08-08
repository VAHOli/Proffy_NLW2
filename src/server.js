  
const proffys = [
    { 
        name:"Diego Fernandes", 
        avatar:"https://github.com/diego3g.png", 
        whatsapp:"89999999", 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:"Química", 
        cost:"20", 
        weekday:[7], 
        time_from:[720], 
        time_to:[1220]
    },
    { 
        name:"Mayk Brito", 
        avatar:"https://github.com/maykbrito.png", 
        whatsapp:"899996300", 
        bio:"Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar. <br><br>Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: Aprenda a fazer dinheiro com isso!",
        subject:"Educação Fisica", 
        cost:"40", 
        weekday:[5], 
        time_from:[720], 
        time_to:[1220]
    },
    { 
        name:"Thiago Luchtenberg", 
        avatar:"https://s3-alpha-sig.figma.com/img/26d9/c8d7/fdb16bf5a7858eb8d294bd4ffc797173?Expires=1597622400&Signature=SW7wQwViqvBR9k6HynaDJY7QnhBACK-OpigV-rBefl7zHNUzQMEEHs0-L5YwsPeF40fePxnIlOf7V4db6-N9Z8wXqIZKoftVlUahghgECyjpkNGq-XGU927QmYD4F83eFOmLmQAh14v53kbbIHSTBMULtlKWuKKsGL9eR7A5HlwIPvTKpcbDd5hvXd4sSrwUUgbNHtBayhpO5P5k-E0h2w~yEOdRaMZjVXYHWd2-eBVxEUtbC3BaAAOu-HiX8LR4ArrLFTJXI~Yk9sqOLsIHGlUQVYQbpEpQ3JDnPvVKaABeI7YGUrJ69IXbXP5Cq8SFk9z7jTaV0ob5luJ8JMhmGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", 
        whatsapp:"84488999", 
        bio:"As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido.<br><br> Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida", 
        subject:"Geografia", 
        cost:"35", 
        weekday:[1], 
        time_from:[720], 
        time_to:[1220]
    }
  
]

const subjects =[
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",

]

const weekdays =[
    "Domingo",
    "Segunda-feira",
    "Terça-feira",   
    "Quarta-feira",    
    "Quinta-feira",    
    "Sexta-feira",  
    "Sábado",
]

//Funcionalidades
function getSubject(subjectNumber){
    const position = +subjectNumber -1
    return subjects [position]
}

function pageLanding (req, res) {
    return res.render("index.html")
}
function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}


    //[transformando num array]
        // adicionar os data à lista de proffys
    //se tiver data adicionar se não não adicionar
        //se tiver adicionar à pagina
function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        
        return res.redirect("/study")
    }
    return res.render("give-classes.html", { subjects, weekdays })
}        


const express = require('express')
const server = express()


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', { 
    express: server,
    noCacha: true,
})
   

server
//configurar arquivos estaticos (css, scripts imagens)
.use(express.static("public"))
// rotas de aplicação
.get("/", pageLanding )
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

