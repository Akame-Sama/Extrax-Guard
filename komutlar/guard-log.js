module.exports = {
  name:"guard-log",
  code:` $if[$message[1]==aç]
  $channelSendMessage[$channelID;{color:$getServerVar[hex]}{description:> $getServerVar[rick_tick] | Guard Log  Başarıyla <#$mentionedChannels[1]> Olarak Ayarlandı}{thumbnail:$userAvatar}]
  $setServerVar[guardlog;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;{color:$getServerVar[hex]}{description:$getServerVar[rick_carpi] | Guard Log Ayarlamak Için Lütfen Bir Kanal Etiketleyin!}]
  $endif
  $if[$message[1]==kapat]
  $channelSendMessage[$channelID;{color:$getServerVar[hex]}{description:> $getServerVar[rick_tick] | Guard Log Başarıyla Kapatıldı}{thumbnail:$userAvatar}]
  $resetServerVar[guardlog]
  $endif
  $onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;{color:$getServerVar[hex]}{description:> $getServerVar[rick_carpi] | Lütfen Bir Argüman Kullan : **aç,kapat**}{thumbnail:$userAvatar}]
  $onlyPerms[admin;$getServerVar[admin]]
  
  `
} 
