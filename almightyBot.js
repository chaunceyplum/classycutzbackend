import { Client, GatewayIntentBits } from 'discord.js'
import Discord from 'discord.js'
import dotenv from 'dotenv'

// const client = new Client({
//   intents: [GatewayIntentBits.Guilds],
//   //intents: ['GUILDS', 'GUILD_MESSAGES'],
// })
const client = new Discord.Client({ intents: [GatewayIntentBits.Guilds] }) //create new client

const prefix = '!'
dotenv.config()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return
  if (!message.content.startsWith(prefix)) return

  const commandBody = message.content.slice(prefix.length)
  const args = commandBody.split(' ')
  const command = args.shift().toLowerCase()

  if (msg.content == 'ping') {
    const timeTaken = Date.now() - message.createdTimestamp
    await msg.reply(`Pong! This message had a latency of ${timeTaken}ms.`)
  }
})

client.login(process.env.TOKEN)
