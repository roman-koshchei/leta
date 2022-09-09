declare const Button: () => JSX.Element;

interface TitleProps {
    children: string;
}
declare const Title: ({ children }: TitleProps) => JSX.Element;

export { Button, Title };
