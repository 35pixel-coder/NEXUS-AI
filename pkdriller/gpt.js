const { zokou } = require('../framework/zokou');
const traduire = require("../framework/traduction");
const { default: axios } = require('axios');
const fs = require('fs');
const pkg = require('@whiskeysockets/baileys');
const { generateWAMessageFromContent, proto } = pkg;

zokou({
  nomCom: "gpt",
  reaction: "🤪",
  categorie: "ai"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  try {
    if (!arg || arg.length === 0) {
      return repondre('Hello 🖐️.\n\n What help can I offer you today?');
    }

    // Combine arguments into a single string
    const prompt = arg.join(' ');
    const apiKey = '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';
    const response = await axios.post(`https:                                  
      prompt: prompt
    }, {
      headers: {
        'Authorization': `//api.groq.com/v1/models/llama`, {
      prompt: prompt
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    const data = response.data;
    if (data && data.response) {
      const answer = data.response;
                                          
      const codeMatch = answer.match(/`// Check if the answer contains code
      const codeMatch = answer.match(/```([\s\S]*?)```/);
      const msg = generateWAMessageFromContent(dest, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: answer
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: "> *NEXUS-TECH*"
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: "",
                subtitle: "",
                hasMediaAttachment: false
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [] // No buttons
              })
            })
          }
        }
      }, {});

      await zk.relayMessage(dest, msg.message, {
        messageId: msg.key.id
      });
    } else {
      throw new Error('Invalid response from the API.');
    }
  } catch (error) {
    console.error('Error getting response:', error.message);
    repondre('Error getting response.');
  }
});
