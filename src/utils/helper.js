
import TextToSpeechStream from 'text-to-speech-stream';

export const speakOutSpeech  = (speech) => {
    var voice = TextToSpeechStream.getVoiceByName('Google हिन्दी');
    var synthesizer = new TextToSpeechStream({
        voice: voice,
        pitch: 1,
        rate: 1,
    });
    synthesizer.write(speech);
}
