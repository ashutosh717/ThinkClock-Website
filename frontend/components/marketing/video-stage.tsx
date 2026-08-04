"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface VideoStageProps {
  stageId: number;
  src: string;
  overlayText: string;
  isActive: boolean;
  onFinished: () => void;
  onLoaded: () => void;
  prefersReducedMotion?: boolean;
}

export function VideoStage({
  stageId,
  src,
  overlayText,
  isActive,
  onFinished,
  onLoaded,
  prefersReducedMotion = false,
}: VideoStageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play/pause & playback speed control (slow motion 0.65x for cinematic clarity)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.65; // Cinematic slow motion

    if (isActive) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }
  }, [isActive]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    // Trigger pre-roll overlap 1.8 seconds before video ends
    if (video.currentTime >= video.duration - 1.8) {
      onFinished();
    }
  };

  return (
    <div
      data-stage-id={stageId}
      className={`absolute inset-0 h-full w-full transition-opacity duration-1500 cubic-bezier(0.4, 0, 0.2, 1) ${
        isActive ? "pointer-events-auto opacity-100 z-10" : "pointer-events-none opacity-0 z-0"
      }`}
    >
      {/* Video Element with High Visibility (opacity-85) and Slow Motion (0.65x) */}
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        onLoadedData={onLoaded}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onFinished}
        aria-label={overlayText}
        className="h-full w-full object-contain opacity-85 transition-opacity duration-500"
      />

      {/* Subtle Backdrop Darkening for Text Contrast */}
      <div className="pointer-events-none absolute inset-0 bg-black/25" />

      {/* Centered High-Impact Transparent Headline Text Overlay */}
      <AnimatePresence>
        {isActive && !prefersReducedMotion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4 text-center"
          >
            <h2 className="max-w-4xl font-display text-3xl font-extrabold tracking-tight text-white/95 drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] sm:text-5xl md:text-6xl">
              {overlayText}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
