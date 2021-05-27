import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
        <Html lang='en-US'>
          <Head />
          <body>
            <form name="contact" netlify="true" netlify-honeypot="bot-field" action='/' hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <textarea name="message"></textarea>
            </form>
            <Main />
            <NextScript />
          </body>
        </Html>
    )
  }
}

export default MyDocument