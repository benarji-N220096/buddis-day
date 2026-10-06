import { useState, useRef, useEffect, useCallback } from 'react';

export function useAmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);

  // Soft ambient generative synthesizer (warm low-volume drone with gentle harmonic notes)
  const startAmbient = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Pentatonic warm frequencies: F3, C4, D4, F4, A4, C5
      const notes = [174.61, 261.63, 293.66, 349.23, 440.0, 523.25];

      const playChime = () => {
        if (!audioContextRef.current || audioContextRef.current.state !== 'running') return;
        const now = ctx.currentTime;
        const note = notes[Math.floor(Math.random() * notes.length)];

        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        // Warm filtered sine tone
        osc.type = 'sine';
        osc.frequency.setValueAtTime(note, now);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, now);

        noteGain.gain.setValueAtTime(0.0001, now);
        noteGain.gain.exponentialRampToValueAtTime(0.04, now + 1.2);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

        osc.connect(filter);
        filter.connect(masterGain);

        osc.start(now);
        osc.stop(now + 4.6);

        // Schedule next gentle chime
        const nextTime = 2500 + Math.random() * 3000;
        timerRef.current = window.setTimeout(playChime, nextTime);
      };

      playChime();
      setIsPlaying(true);
    } catch {
      // Audio context might fail silently or not be supported
      setIsPlaying(false);
    }
  }, []);

  const stopAmbient = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (gainNodeRef.current && audioContextRef.current) {
      const ctx = audioContextRef.current;
      gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      setTimeout(() => {
        setIsPlaying(false);
      }, 1200);
    } else {
      setIsPlaying(false);
    }
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      stopAmbient();
    } else {
      startAmbient();
    }
  }, [isPlaying, startAmbient, stopAmbient]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return { isPlaying, toggle };
}
