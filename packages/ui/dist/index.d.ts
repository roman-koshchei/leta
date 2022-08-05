import { KeyInfo, FingerPosition } from 'models';
import { Dispatch, SetStateAction } from 'react';

interface ButtonProps {
    text: string;
}
declare const Button: ({ text }: ButtonProps) => JSX.Element;

interface KeyboardProps {
    keys: KeyInfo[][];
    setKeys: Dispatch<SetStateAction<KeyInfo[][]>>;
    fingers: FingerPosition[][];
}
declare const Keyboard: ({ setKeys, keys, fingers }: KeyboardProps) => JSX.Element;

export { Button, Keyboard };
