import { Finger, Hand } from "./enums";

interface KeyInfo {
  primary: string;
  shift: string;
}

interface FingerPosition {
  finger: Finger
  hand: Hand
}

export type { KeyInfo, FingerPosition }