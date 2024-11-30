const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,917439780330";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_31_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDY3LFxuICAgICAgICA0LFxuICAgICAgICAzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICA3NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNixcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU3LFxuICAgICAgICA2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNixcbiAgICAgICAgNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MixcbiAgICAgICAgODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQwLFxuICAgICAgICA4LFxuICAgICAgICA4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MixcbiAgICAgICAgMTMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM0LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgODYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5vOVp6MmszSHJld3FhQmxuNDBYaThPalRUWmdSd3hoc2JWNUJUMU5vbnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3NDM5NzgwMzMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRjU5RDk3NkJFREFCNDEzMjQzOUE3RDAwOEY3RjkwQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI5ODc4NjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibHBtMnc0ZDdUV0NHM0hwNWRlNl9LQVwiLFxuICBcInBob25lSWRcIjogXCI5Y2FhYmJiZS1iZTFmLTRkNDYtYWU5ZC0xMGFkODJlMjZiNWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICA3MSxcbiAgICAgIDEwNyxcbiAgICAgIDEyOSxcbiAgICAgIDkzLFxuICAgICAgMTMxLFxuICAgICAgMTgyLFxuICAgICAgMTM3LFxuICAgICAgMjMyLFxuICAgICAgMTc2LFxuICAgICAgNDAsXG4gICAgICA5LFxuICAgICAgMTc1LFxuICAgICAgMjA4LFxuICAgICAgOTAsXG4gICAgICA4MixcbiAgICAgIDIwMixcbiAgICAgIDE5NCxcbiAgICAgIDEzOCxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDE5OCxcbiAgICAgIDIxOCxcbiAgICAgIDEyMyxcbiAgICAgIDE1NyxcbiAgICAgIDIyNixcbiAgICAgIDMxLFxuICAgICAgNzQsXG4gICAgICAyMzYsXG4gICAgICAxOTAsXG4gICAgICAyNDIsXG4gICAgICAyNDAsXG4gICAgICAxNTksXG4gICAgICAyMDQsXG4gICAgICAxMDUsXG4gICAgICAyOSxcbiAgICAgIDYsXG4gICAgICAyMzQsXG4gICAgICAxMzksXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWE5LQjcyVEFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzQzOTc4MDMzMDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3Nzg1MTExNDA5NDYxNjo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BXbjF0c0NFTkNYcmJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidGdCemxNV09iNmxUeU0rZ0Y4MlF3cHdpNkdEUm5jeVU3Nm1iWlhkRHV4TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoRTZDWWU5UkdIc0kzdU9teWhiQkd1SUE3clp4RmhYaEVPSzdLU2JnRW1WMkt3OW1mS3czcjk3QWV4OVVDUElxdkZ2OVhRUDhPUmRSVU1YOFRrN3BEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSdDA2R096a2xjdkhMUlZpTGl3VGJoZjA1UlpRVmFvRk5UVjA5c1ErS2d6TDhnOW9YNngzUzNaTm9KdzZHaFdsczFhN0ZuZnlKdnQzWUZOK25rMi9qdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc0Mzk3ODAzMzA6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI5ODc4NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHbVpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdtWi5qc29uIjogIntcImtleURhdGFcIjpcIlFUZmplcGtweVIwRWtHUTdYWDEyZHFzaTBZR0hRdldQbHJwWlVvT0lzam89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzI5MTI1ODc1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
