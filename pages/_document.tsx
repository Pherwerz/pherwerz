import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          {/* <link rel="icon" href="/sc192.png" /> */}
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="Adebayo Fawaz Ajibola's portfolio"
          />
          {/* <link rel="manifest" href="/manifest.json" /> */}

          {/* fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* safari */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#ffffff"
          />
          <meta name="apple-mobile-web-app-title" content="Pherwerz" />
          {/* <link rel="apple-touch-icon" href="/sc32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/sc64.png" sizes="64x64" />
        <link rel="apple-touch-icon" href="/sc144.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="/sc192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/sc512.png" sizes="512x512" /> */}

          {/* internet explorer */}
          {/* <meta name="msapplication-TileImage" content="/sc192.png" /> */}
          <meta name="msapplication-TileColor" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
