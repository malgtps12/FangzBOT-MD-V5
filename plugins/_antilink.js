const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (isGroupMsg && isAntiLink && !isGroupAdmins && !isOwner) {
              if (chats.includes('https://chat.whatsapp.com/') || chats.includes('chat.whatsapp.com') || chats.includes('link.tr') || chats.includes('t.me') || chats.includes('http') || chats.includes('youtu.be') || chats.includes('https://discord.gg/') || chats.includes('https://bit.ly/')) {
                  const check = await client.inviteInfo(body);
                  if (!check) {
                      return
                  } else {
                      client.reply(from, `*「 LINK DETECTOR 」*\nKamu mengirimkan link, maaf kamu aku kick dari grup..`, id).then(() => {
                          client.removeParticipant(groupId, sender.id)
                      })
                  }
              }
            }










