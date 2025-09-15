import React, { useState, useEffect, useRef } from "react";
import SpeechToText from "speech-to-text";

export default function VoiceToText({ socket }) {
  const [currentWord, setCurrentWord] = useState(""); // latest word/command
  const [isListening, setIsListening] = useState(false);
  const listenerRef = useRef(null);

  // run on each new word
  useEffect(() => {
    if (!currentWord) return;

    console.log("Processing word:", currentWord);

    switch (currentWord) {
      case "stop":
        socket.emit("movement", { movement: "stop" });
        break;
      case "forward":
        socket.emit("movement", { movement: "forward" });
        break;
      case "back":
        socket.emit("movement", { movement: "back" });
        break;
      case "left":
        socket.emit("movement", { movement: "left" });
        break;
      case "right":
        socket.emit("movement", { movement: "right" });
        break;
      case "forward-right":
        socket.emit("movement", { movement: "forward-right" });
        break;
      case "forward-left":
        socket.emit("movement", { movement: "forward-left" });
        break;
      case "back-right":
        socket.emit("movement", { movement: "back-right" });
        break;
      case "back-left":
        socket.emit("movement", { movement: "back-left" });
        break;
      default:
        console.log("Unknown command:", currentWord);
    }
  }, [currentWord, socket]);

  const startListening = () => {
    try {
      const onAnythingSaid = (msg) => {
        if (msg) {
          const word = msg.trim().toLowerCase();
          setCurrentWord(word); // overwrite with latest
        }
      };

      const onFinalised = (msg) => {
        if (msg) {
          const word = msg.trim().toLowerCase();
          setCurrentWord(word); // overwrite with finalized
        }
      };

      const onError = (err) => {
        console.error("Speech error:", err);
      };

      listenerRef.current = new SpeechToText(
        onAnythingSaid,
        onFinalised,
        onError,
        { lang: "en-US", continuous: true, interimResults: true }
      );

      listenerRef.current.startListening();
      setIsListening(true);
    } catch (err) {
      console.error("Speech init error:", err);
    }
  };

  const stopListening = () => {
    if (listenerRef.current) {
      listenerRef.current.stopListening();
    }
    setIsListening(false);
  };

  useEffect(() => {
    return () => {
      if (listenerRef.current) {
        listenerRef.current.stopListening();
      }
    };
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🎤 Voice to Text</h2>
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>

      <div style={{ marginTop: "20px" }}>
        <strong>Last word:</strong>
        <p>{currentWord}</p>
      </div>
    </div>
  );
}
