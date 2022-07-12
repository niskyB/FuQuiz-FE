import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <link rel="apple-touch-icon" sizes="57x57" href="/asset/share/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/asset/share/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/asset/share/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/asset/share/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/asset/share/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/asset/share/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/asset/share/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/asset/share/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/asset/share/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/asset/icons/logo-image.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/asset/icons/logo-image.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/asset/icons/logo-image.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/asset/icons/logo-image.png" />
                    <link rel="mask-icon" href="/asset/icons/logo-image.png" color="orange" />
                    <link rel="manifest" href="/asset/icons/logo-image.png" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/asset/icons/logo-image.png" />
                    <meta name="theme-color" content="#ffffff" />
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
