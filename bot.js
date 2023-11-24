const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => {
    console.log('Bot está online!');
});

client.on('messageCreate', message => {
    if (message.content === '!embed') {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Título do Embed')
            .setURL('https://www.example.com/')
            .setDescription('Descrição do Embed')
            .addField('Campo 1', 'Valor 1', true)
            .addField('Campo 2', 'Valor 2', true)
            .setFooter('Rodapé do Embed', 'https://i.imgur.com/wSTFkRM.png')
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }
});

client.login('TOKEN_DO_SEU_BOT');
