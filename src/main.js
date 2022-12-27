// 需要必要的 discord.js 檔
import { Client, Events, GatewayIntentBits }from'discord.js'
//require從discord.js裡拿出了Client, Events, GatewayIntentBits這3個檔案
import dotenv from 'dotenv'

dotenv.config()


// 創建一個新的機械人
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
//Client這個檔案從新定義成new Client裡面給它intents: [GatewayIntentBits.Guilds]這個參數,最後就會創造出一個client的機械人變數

// 當客戶端準備就緒時，運行此代碼（僅一次）
// 我們使用 'c' 作為事件參數，以使其與已經定義的 'client' 分開
client.once(Events.ClientReady, c => {
    //機械人去註冊一次性的事件Ready
	console.log(`Ready! Logged in as ${c.user.tag}`);
});//當機械人Ready好後就會在終端機印出`Ready! Logged in as ${c.user.tag}`這段字串

// 使用您客戶的令牌登錄 Discord
client.login(process.env.TOKEN);
//最後機械人會login(機械人的代碼),啟動
//env.TOKEN前面的.env會連接到env檔案裡抓取TOKEN檔