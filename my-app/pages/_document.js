import Document, {Html, Head, Main, NextScript} from 'next/document'

class myDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head/>
                <body>
                    <div id='overlays'></div>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default myDocument;