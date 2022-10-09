enum Finger {
  LeftPinky,
  LeftRing,
  LeftMiddle,
  LeftIndex,
  // LeftThumb,
  // RightThumb,
  RightIndex,
  RightMiddle,
  RightRing,
  RightPinky,
}

const FingerColors = new Map<Finger, string>(
  [
    [Finger.LeftPinky, "bg-emerald-500"],
    [Finger.LeftRing, "bg-emerald-400"],
    [Finger.LeftMiddle, "bg-emerald-300"],
    [Finger.LeftIndex, "bg-emerald-200"],
    // [Finger.LeftThumb, "bg-neutral-100"],
    // [Finger.RightThumb, "bg-neutral-200"],
    [Finger.RightIndex, "bg-blue-200"],
    [Finger.RightMiddle, "bg-blue-300"],
    [Finger.RightRing, "bg-blue-400"],
    [Finger.RightPinky, "bg-blue-500"],
  ]
)

export { Finger, FingerColors }