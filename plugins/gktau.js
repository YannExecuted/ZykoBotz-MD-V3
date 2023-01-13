//let { MessageType } = require('@adiwajshing/baileys')
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n Hai Saya AkenoBotz-MD Jangan Lupa Suscribe Youtube AkenoBotz-MD Official\n\nAtau bisa klik link Youtube : https://www.youtube.com/@AkenoBotz ', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['akeno-md']

handler.admin = false
handler.group = false

export default handler
