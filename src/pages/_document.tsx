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
      <Html
        className='bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white overflow-x-hidden'>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" /> */}
        </Head>
        <body className='scrollbar-thin scrollbar-thumb-neutral-900 dark:scrollbar-thumb-white 
        scrollbar-track-white dark:scrollbar-track-neutral-900 overflow-x-hidden'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default LetaDocument;
