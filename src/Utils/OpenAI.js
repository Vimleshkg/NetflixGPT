import OpenAI from "openai";
import { openai_API_KEY } from "../Components/Constant";


const openai = new OpenAI({
    apiKey: openai_API_KEY,
    dangerouslyAllowBrowser: true
});

export default openai;

