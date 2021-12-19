const rick = require('aoi.js');
var fs = require('fs');
const bot = new rick.Bot({
 token: process.env.token,
 prefix:"r!"
})

//////-------CallBackler-----////


bot.onUserUpdate()
bot.onBanAdd()
bot.onBanRemove()
bot.onInviteCreate()
bot.onInviteDelete() 
bot.onEmojiCreate()
bot.onEmojiDelete()
bot.onChannelDelete()
bot.onChannelCreate()
bot.onChannelUpdate()
bot.onRoleCreate()
bot.onRoleDelete()
bot.onRoleUpdate()
bot.onLeave()
bot.onJoined()
bot.onGuildLeave()
bot.onGuildJoin()
bot.onMessageUpdate()
bot.onMessageDelete()
bot.onPresenceUpdate()
bot.onMessage({
  respondToBots: false
})

//////-------Callbackler------////


////////-----Bot-Ses--------////

bot.loadCommands('./komutlar/');


//////-------Bot-Hazır------////


bot.readyCommand({
  channel:"",
  code:`
  $log[$userTag[$botOwnerID] Öpüldü 🥰]
  $wait[3s]
  $log[🎉 Aktifim Yiğen]
  $log[🎉 Komutlar Yüklendi]
  $wait[3s]
  $log[🎉 Veriler Yüklendi]
  $wait[3s]
  $log[🎉 Database Yüklendi]
  $wait[3s]
  $joinVc[911533917461422141]
  `})


//////-------Bot-Hazır------////




//////-------Variableler------////

bot.variables({
  hex:"BDAAF9", ///Renk Kodunuz
  prefix:"r!", ///Prefixiniz
  sahip:"", /////Sahip ID
  admin:"{color:$getServerVar[hex]}{description:> $getServerVar[rick_carpi] | Üzgünüm Ama Admin Yetkin Yok}{thumbnail:$userAvatar}",
  rick_tick:"<:mtick:918491401631719485>", ///Tik Emoji İD
  rick_carpi:"<a:yasak:856123802654998568>",  ///Carpi Emoji İD
  rk:"kapalı", ///ELLEŞME_1
  kk:"kapalı", ///ELLEŞME_2
  ek:"kapalı", ///ELŞME_3
  guardlog:""
  
  })

//////-------Variableler------////




//////-------Kanal-Koruma------////


bot.channelDeleteCommand({
channel:"$getServerVar[guardlog]",
code:`$createChannel[$oldChannel[name];$oldChannel[type];no;$oldChannel[categoryID]]
$author[$oldChannel[name];$serverIcon]
$description[Bir kanal silindi ve geri ekledim

> Silinen kanal: **$oldChannel[name]**

> Silinen kanal ID: **$oldChannel[id]]
$footer[$serverName;$serverIcon]
$color[$getServerVar[hex]]
$thumbnail[$serverIcon]

$onlyIf[$getServerVar[kk]!=kapalı;]
`
})


//////-------Kanal-Koruma------////




//////-------Emoji-Koruma------////


bot.emojiDeleteCommand({
channel:"$getServerVar[guardlog]",
code:`$addEmoji[$oldEmoji[url];$oldEmoji[name]]
$author[$oldEmoji[name];$oldEmoji[url]]
$description[Bir emoji silindi

> Emoji ismi: **$oldEmoji[name]**

> Emoji id'si: **$oldEmoji[id]**

> Emoji linki: ** [Tıkla]($oldEmoji[url]) **]
$footer[$serverName;$oldEmoji[url]]
$color[$getServerVar[hex]]
$thumbnail[$oldEmoji[url]]
$onlyIf[$getServerVar[ek]!=kapalı;]

`
}) 

//////-------Emoji-Koruma------////




//////-------Rol-Koruma------////


bot.roleDeleteCommand({
channel:"$getServerVar[guardlog]",
code:`$createRole[$oldRole[name];$oldRole[color];$oldRole[mentionable];$oldRole[hoist];$oldRole[position]]
$author[$oldRole[name];$serverIcon]
$description[Bir rol silindi ve geri ekledim

> Silinen rol: **$oldRole[name]**

> Rol rengi: **$oldRole[color]**

> Rol izinleri: **$oldRole[permissions]**]
$footer[$serverName;$serverIcon]
$color[$getServerVar[hex]]
$thumbnail[$serverIcon]
$onlyIf[$getServerVar[rk]!=kapalı;]
`
}) 

//////-------Rol-Koruma------////