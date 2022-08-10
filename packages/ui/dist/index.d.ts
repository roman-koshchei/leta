import { KeyInfo } from 'models';
import { DragEventHandler, Dispatch, SetStateAction, FC, ChangeEventHandler } from 'react';

interface KeyboardProps {
    keys: KeyInfo[][];
    keyDrag?: (row: number, col: number) => void;
    keyDrop?: (row: number, col: number) => void;
    onKeyDragOver?: DragEventHandler;
    keyClick?: (row: number, col: number) => void;
}
declare const Keyboard: ({ keys, keyDrag: onKeyDrag, keyDrop: onKeyDrop, onKeyDragOver, keyClick }: KeyboardProps) => JSX.Element;

interface ComparableKeyboardProps {
    keys: KeyInfo[][];
    setKeys: Dispatch<SetStateAction<KeyInfo[][]>>;
    keyClick?: (row: number, col: number) => void;
}
declare const DragKeyboard: ({ keys, setKeys, keyClick }: ComparableKeyboardProps) => JSX.Element;

declare const Button: FC;

interface InputProps {
    val: string;
    onChange: ChangeEventHandler;
}
declare const Input: ({ val, onChange }: InputProps) => JSX.Element;

export { Button, DragKeyboard, Input, Keyboard };
