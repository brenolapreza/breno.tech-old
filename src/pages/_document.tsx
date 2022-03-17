import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <title>Breno Lapreza - Dev Frontend</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Wire+One&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div>
        <button id="openChat" onclick="openTheChat()">Chat</button>
        <div class="conteudo">
            <div id="closeChat"><span onclick="openTheChat()" id="closeChat"></span></div>
            <embed class="embedAkivaChat" type="text/html"
                src="http://omni-chat.57c3f340730845a28a2d.westus2.aksapp.io/?company_id=12&chat_id=220"/>
        </div>
    </div>
    <script src="http://20.206.127.201/files/web/js/v1/script.min.js"></script>
        </body>
      </Html>
    );
  }
}
