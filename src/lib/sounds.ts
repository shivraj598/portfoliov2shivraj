import { playSound } from "@/lib/sound-engine";

export const SOUNDS = {
  button: "/sounds/button-3.mp3",
  back: "/sounds/pop.mp3",
  click: "/sounds/click.wav",
  mouseclick: "/sounds/mouseclick1.mp3",
  pop: "/sounds/pop.mp3",
} as const;

export type SoundKey = keyof typeof SOUNDS;

export function playUiSound(key: SoundKey, volume = 0.45) {
  void playSound(SOUNDS[key], { volume }).catch(() => {
    // Audio is non-critical; ignore failures (e.g. fetch hiccups).
  });
}