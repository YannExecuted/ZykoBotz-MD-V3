import { readFileSync } from 'fs'
import fs from 'fs'

let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
/*
    conn.sendMessage(m.chat, {
          react: {
            text: em.getRandom(),
            key: m.key,
          }})*/
    let regl = /(I love you|love you|mwah)/i
    let isLoveYou = regl.exec(m.text)
    let lovou = [
'❤️',
'🥰',
'😍'
]
let loveyou = lovou[Math.floor(Math.random() * lovou.length)]
    if (isLoveYou && !m.fromMe) {
    let helloaine = fs.readFileSync('./mp3/mwah.mp3') 
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
   setTimeout(() => {
        conn.sendFile(m.chat, helloaine, '', '', m, true)
    }, 1000)
    }

    let ass = /(assalamualaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum)/i
    let isAss = ass.exec(m.text)
    let assal = [
'🥰',
'😇',
'😅'
]
let assl = assal[Math.floor(Math.random() * assal.length)]
    if (isAss && !m.fromMe) {
    let assalamualaikum = fs.readFileSync('./mp3/waalaikumsalam.ogg')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => { m.reply('Waalaikumsalam')
    conn.sendFile(m.chat, assalamualaikum, '', '', m, true)
    }, 1000)
    }
    

    let Ara = /(ara-ara|araara|ara|araa)/i
    let isArr = Ara.exec(m.text)
    let Arra = [
'😅'
]
let Araa = Arra[Math.floor(Math.random() * Arra.length)]
    if (isArr && !m.fromMe) {
    let Arraa = fs.readFileSync('./mp3/araa.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, Arraa, '', '', m, true)
    }, 1000)
    }
  

handler.limit = false
export default handler
 function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

