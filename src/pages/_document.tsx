import Document, {
  DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript,
} from "next/document";

class LetaDocument extends Document {
  static async getInitialProps(ctx: DocumentContext):
    Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html className='scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default LetaDocument;
