const { zokou } = require(__dirname + "/../framework/zokou");
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({
  nomCom: "menu2",
  categorie: "Menu"
}, async (_0x466846, _0x35dd19, _0x42e541) => {
  let {
    ms: _0x2f945c,
    repondre: _0x35a713,
    prefixe: _0x5b6b66,
    nomAuteurMessage: _0x4099cb,
    mybotpic: _0x11905
  } = _0x42e541;

  let { cm: _0x3f91bc } = require(__dirname + "/../framework/zokou");
  let _0x4b68cd = {};
  let _0x2fb207 = s.MODE.toLowerCase() !== "yes" ? "private" : "public";

  _0x3f91bc.map(_0x5a12df => {
    if (!_0x4b68cd[_0x5a12df.categorie]) {
      _0x4b68cd[_0x5a12df.categorie] = [];
    }
    _0x4b68cd[_0x5a12df.categorie].push(_0x5a12df.nomCom);
  });

  moment.tz.setDefault("Etc/GMT");
  const _0x30b447 = moment().format("DD/MM/YYYY");

  let _0x5810f6 = "\n╭━━✧★☞  𝐍𝐄𝐗𝐔𝐒-𝐀𝐈  😾💜✧━━❖\n┊✺┌────••••────⊷\n┃★│◎ Owner : " + s.OWNER_NAME + "\n┃★│◎ Prefix : [ " + s.PREFIXE + " ]\n┃★│◎ Mode : " + _0x2fb207 + "\n┃★│◎ Ram : 8/132 GB\n┃★│◎ Date : " + _0x30b447 + "\n┃★│◎ Platform : " + os.platform() + "\n┃★│◎ Creator : PK Driller\n┃★│◎ Commands : " + _0x3f91bc.length + "\n┃★│◎ Theme : NEXUS-AI\n┊   └────••••────⊷\n╰━━━••✧NEXUS-AI✧••━━━◆\n";

  let _0x499730 = "𝐍𝐄𝐗𝐔𝐒 𝐀𝐈 𝐌𝐄𝐍𝐔";
  for (const _0x297db1 in _0x4b68cd) {
    _0x499730 += `\n╭━━━❂ *${_0x297db1}* ❂━━─••\n║╭━━══••══━━••⊷ `;
    for (const _0x38505c of _0x4b68cd[_0x297db1]) {
      _0x499730 += `\n║┊❍ ${s.PREFIXE}  *${_0x38505c}*`;
    }
    _0x499730 += `\n║╰━━══••══━━••⊷\n╰════────════◆◆◆`;
  }

  _0x499730 += "\n> @NEXUS AI\n";
  _0x499730 += "\n" + _0x499730;

  const fakeContact = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      contactMessage: {
        displayName: "Nexus AI Menu",
        vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:Nexus AI Menu\nORG:Nexus AI\nTEL;type=CELL;type=VOICE;waid=254701000001:+254 701 000001\nEND:VCARD",
        isFromMe: false,
        isVerified: true
      }
    }
  };

  const contextInfoMenu = {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "254701000001@newsletter",
      newsletterName: "Nexus AI Official"
    },
    externalAdReply: {
      title: "NEXUS AI",
      body: "Tap here for latest updates",
      thumbnailUrl: "https://files.catbox.moe/299643.jpg",
      mediaType: 1,
      renderLargerThumbnail: true,
      showAdAttribution: true,
      sourceUrl: s.URL,
      mediaUrl: s.GURL
    }
  };

  try {
    // MENU TEXT
    await _0x35dd19.sendMessage(
      _0x466846,
      {
        text: _0x5810f6 + _0x499730,
        contextInfo: contextInfoMenu
      },
      {
        quoted: fakeContact
      }
    );

    // AUDIO MENU
    await _0x35dd19.sendMessage(
      _0x466846,
      {
        audio: {
          url: "https://github.com/nexustech1911/NEXUS-XMD-DATA/raw/refs/heads/main/music/nexus.mp3"
        },
        mimetype: "audio/mp4",
        ptt: false,
        contextInfo: contextInfoMenu
      },
      {
        quoted: fakeContact
      }
    );
  } catch (err) {
    console.error("Menu error: ", err);
    _0x35a713("Menu error: " + err);
  }
});
    
