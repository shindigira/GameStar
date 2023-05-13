import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_OPENAI_URL ||
  "https://api.openai.com/v1/chat/completions";

export const getChatGPTdata = async (game = "Half-Life") => {
  const response = await axios.post(
    BASE_URL,
    {
      messages: [
        { role: "system", content: "You are" },
        {
          role: "user",
          content: `What are your thoughts on the game ${game}?`,
        },
      ],
      model: "gpt-3.5-turbo",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
    }
  );

  return response.data.choices[0].message.content;
};
