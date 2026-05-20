"use client";

import { useEffect, useRef, useState } from "react";

type SpeechRecognitionLike = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((event: SpeechRecognitionResultEventLike) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
};

type SpeechRecognitionResultEventLike = {
  resultIndex: number;
  results: ArrayLike<{
    isFinal: boolean;
    0: { transcript: string };
  }>;
};

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  }
}

type Props = {
  onTranscript: (text: string) => void;
  disabled?: boolean;
};

export function MicButton({ onTranscript, disabled }: Props) {
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(true);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const finalBufferRef = useRef("");

  useEffect(() => {
    const Ctor =
      typeof window !== "undefined"
        ? window.SpeechRecognition ?? window.webkitSpeechRecognition
        : undefined;

    if (!Ctor) {
      setSupported(false);
      return;
    }

    const recognition = new Ctor();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalBufferRef.current += result[0].transcript;
        }
      }
    };

    recognition.onerror = () => setListening(false);
    recognition.onend = () => {
      const finalText = finalBufferRef.current.trim();
      finalBufferRef.current = "";
      if (finalText) onTranscript(finalText);
      setListening(false);
    };

    recognitionRef.current = recognition;
    return () => {
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
      recognition.stop();
    };
  }, [onTranscript]);

  const toggle = () => {
    const rec = recognitionRef.current;
    if (!rec) return;
    if (listening) {
      rec.stop();
      return;
    }
    finalBufferRef.current = "";
    try {
      rec.start();
      setListening(true);
    } catch {
      // recognition.start() throws if already started — safe to ignore
    }
  };

  if (!supported) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={disabled}
      aria-label={listening ? "Stop dictation" : "Start dictation"}
      title={listening ? "Stop dictation" : "Dictate prompt"}
      className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
        listening
          ? "animate-pulse bg-red-500 text-white"
          : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3Zm5-3a1 1 0 1 0-2 0 3 3 0 0 1-6 0 1 1 0 1 0-2 0 5 5 0 0 0 4 4.9V19H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-2.1A5 5 0 0 0 17 11Z" />
      </svg>
    </button>
  );
}
