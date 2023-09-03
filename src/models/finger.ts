enum Finger {
  LeftPinky, // 0
  LeftRing,
  LeftMiddle,
  LeftIndex,
  RightIndex,
  RightMiddle,
  RightRing,
  RightPinky, // 7
}

const FingerNames = ["Pinky", "Ring", "Middle", "Index"]

const FingerColors = new Map<Finger, string>([
  [Finger.LeftPinky, "bg-teal-200"],
  [Finger.LeftRing, "bg-sky-200"],
  [Finger.LeftMiddle, "bg-indigo-200"],
  [Finger.LeftIndex, "bg-purple-200"],
  [Finger.RightIndex, "bg-red-200"],
  [Finger.RightMiddle, "bg-orange-200"],
  [Finger.RightRing, "bg-yellow-200"],
  [Finger.RightPinky, "bg-green-200"],
])

export { Finger, FingerColors, FingerNames }
