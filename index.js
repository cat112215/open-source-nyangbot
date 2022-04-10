const Discord = require('discord.js')
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready' , ()=>{
    console.log("봇이 준비돼었습니다.")
})

client.on('message' ,msg=>{
    if(msg.content === '핑'){
        msg.reply('퐁!')
    }
})
client.on('message' ,msg=>{
    if(msg.content === '냥섭'){
        msg.reply('냥이 커뮤니티서버는 즐겁다')
    }
})
client.on('message' ,msg=>{
    if(msg.content === '고양이 냥!'){
        msg.reply('냥봇 재작자님!')
    }
})
client.on('message' ,msg=>{
    if(msg.content === '이스터에그'){
        msg.reply('////////////////////node_modules')
    }
})
client.on('message' ,msg=>{
    if(msg.content === '냥봇'){
        msg.reply('냥봇')
    }
})
client.on('message' ,msg=>{
    if(msg.content === '고양이냥'){
        msg.reply('냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냐야냥냥냥냥냥냥냥냐야냥')
    }
})
client.on('message' ,msg=>{
    if(msg.content === '냥냥이'){
        msg.reply('냥냥이봇')
    }
})
client.on('message' ,msg=>{
    if(msg.content === '9x9='){
        msg.reply('81')
    }
})


client.login('OTU0NjMyMTA2NDY4ODY4MTI4.YjV8bg.Bjs-902IKRS4Lm6iI9CpCXRGSTQ')