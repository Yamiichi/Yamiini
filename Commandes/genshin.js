const Discord = require('discord.js');/*
const genshin = require("../bdd_genshin.json");
const { url } = require('inspector');*/

module.exports.run = async(client, message, args) => {
/*
    //genshin plugin
    
    const softpity = 76;
    const hardpitycaract = 90;
    const hardpityweapon = 80;

    var PlayerID;
    var Player;
    var pitycaract = Number[0];
    var pityweapon = Number[0];
    var pityperma = Number[0];
    var garantiecaract = Boolean[false];
    var garantieweapon = Boolean[false];

        if(message.content.startsWith("pity") || message.content.startsWith("Pity")){
            let args = message.content.trim().split(/ +/g);
            //si pas d'agument
            if(!args[1]){
                PlayerID = message.author.id;
                Player = message.author.username;
            }
            //si il y a 1 argument
            else if(args[1] && !args[2]){
                PlayerID = message.mentions.users.first().id;
                Player = message.mentions.users.first().username;
            }
            if(genshin[PlayerID]){
                //à faire...
                pitycaract = genshin[PlayerID][0];
                garantiecaract = genshin[PlayerID][1];
                pityweapon = genshin[PlayerID][2];
                garantieweapon = genshin[PlayerID][3];
                pityperma = genshin[PlayerID][4];

                const Profil = {
                    color: 0x0099ff,
                    author: {
                        name: `${Player}`,
                    },
                    description: 'Bannière Personnage Focus',
                    fields: [
                        {
                            name: 'Soft pity :',
                            value: `\u300b${softpity-pitycaract} restant avant la soft pity\r*Si le nombre est négatif, c'est qu'il est passé.*`,
                            inline: true,
                        },
                        {
                            name: 'Hard pity :',
                            value: `\u300b${hardpitycaract-pitycaract} restant avant la hard pity`,
                            inline: true,
                        },
                        {
                            name: 'Focus garantie :',
                            value: `${garantiecaract}`,
                        },
                    ],
                    image: {
                        url: 'https://image.jeuxvideo.com/medias-md/162670/1626700303-2789-capture-d-ecran.jpg',
                    },
                };

                const Profil2 = {
                    color: 0x0099ff,
                    author: {
                        name: `${Player}`,
                    },
                    description: 'Bannière arme',
                    fields: [
                        {
                            name: 'Soft pity :',
                            value: `Je sais pas si il y en un pour les armes.`,
                            inline: true,
                        },
                        {
                            name: 'Hard pity :',
                            value: `\u300b${hardpityweapon-pityweapon} restant avant la hard pity`,
                            inline: true,
                        },
                        {
                            name: 'Focus :',
                            value: `${garantieweapon}`,
                        },
                    ],
                    image: {
                        url: 'https://image.jeuxvideo.com/medias-md/162670/1626700549-6285-capture-d-ecran.jpg',
                    },
                };

                const Profil3 = {
                    color: 0x0099ff,
                    author: {
                        name: `${Player}`,
                    },
                    description: 'Bannière Permanante',
                    fields: [
                        {
                            name: 'Soft pity :',
                            value: `\u300b${softpity-pityperma} restant avant la soft pity\r*Si le nombre est négatif, c'est qu'il est passé.*`,
                            inline: true,
                        },
                        {
                            name: 'Hard pity :',
                            value: `\u300b${hardpitycaract-pityperma} restant avant la hard pity`,
                            inline: true,
                        },
                    ],
                    image: {
                        url: 'https://www.gamosaurus.com/wp-content/uploads/Independant/Genshin-Impact/Images/Banniere/envie-de-voyage-voeux-permanent-genshin-impact-patch-1-1.jpg',
                    },
                };

                message.channel.send(`<@${PlayerID}>`);
                message.channel.send({ embed: Profil });
                message.channel.send({ embed: Profil2 });
                message.channel.send({ embed: Profil3 });

            }
            else{
                message.channel.send("ta fait de la merde");
            }
        }
        else if(message.content.startsWith("set pity") || message.content.startsWith("Set pity")){
            let args = message.content.trim().split(/ +/g);
            if(args[6] && !args[7]){
                PlayerID = message.author.id;

                //[pitycaract, garantiecaract, pityweapon, garantieweapon]

                //pity caract
                if(!isNaN(args[2]) && args[2] >= 0 && args[2] < hardpitycaract){
                    pitycaract = args[2];
                }
                else{
                    message.channel.send("Problème à la donnée 1");
                }

                //pity weapon
                if(!isNaN(args[4]) && args[4] >= 0 && args[4] < hardpityweapon){
                    pityweapon = args[4];
                }
                else{
                    message.channel.send("Problème à la donnée 3");
                }

                //pity perma
                if(!isNaN(args[6]) && args[6] >= 0 && args[4] < hardpitycaract){
                    pityperma = args[6];
                }
                else{
                    message.channel.send("Problème à la donnée 5");
                }


                //garantie caract
                if(isNaN(args[3])){
                    if(args[3] == "oui"){
                        garantiecaract = true;
                    }
                    else if(args[3] == "non"){
                        garantiecaract = false;
                    }
                    else{
                        message.channel.send("Problème à la donnée 2");
                    }
                }
                else{
                    message.channel.send("Problème à la donnée 2");
                }

                //garantie weapon
                if(isNaN(args[5])){
                    if(args[5] == "oui"){
                        garantieweapon = true;
                    }
                    else if(args[5] == "non"){
                        garantieweapon = false;
                    }
                    else{
                        message.channel.send("Problème à la donnée 4");
                    }
                }
                else{
                    message.channel.send("Problème à la donnée 4");
                }

                //tableau
                genshin[PlayerID] = [pitycaract, garantiecaract, pityweapon, garantieweapon, pityperma];
                SavebddGenshin();
                message.channel.send(`<@${PlayerID}>, tout a bien été sauvegardé. Taper 'Pity' pour plus d'info.`);
            }
            else if(!args[2]){
                message.channel.send("```Set pity <nombre invocation perso focus faite> <5* focus garantie [oui/non]>\r<nombre invocation arme faite> <5* focus garantie [oui/non]> <nombre invocation perma>```");
            }
        }

    //Fonction sauvegarde de la bdd
    function SavebddGenshin(){
        fs.writeFile("./bdd_genshin.json", JSON.stringify(genshin, null, 4), (err) => {
            if (err) message.channel.send("Une erreur est survenue.");
        });
    }*/
};

module.exports.help = {
    name: "genshin"
}
