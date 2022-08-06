import { FC, Dispatch, SetStateAction } from 'react';
import { KeyInfo, FingerPosition } from 'models';

interface ButtonProps {
}
declare const Button: FC<ButtonProps>;

interface KeyboardProps {
    keys: KeyInfo[][];
    setKeys: Dispatch<SetStateAction<KeyInfo[][]>>;
    fingers: FingerPosition[][];
}
declare const Keyboard: ({ setKeys, keys, fingers }: KeyboardProps) => JSX.Element;

export { Button, Keyboard };
