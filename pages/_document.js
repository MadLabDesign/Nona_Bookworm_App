import Document, { Head, Main, NextScript } from 'next/document'
import JssProvider from 'react-jss/lib/JssProvider';
import { injectGlobal, ServerStyleSheet } from 'styled-components'
import getPageContext from '../lib/getPageContext';


// noinspection JSUnusedGlobalSymbols
export default class MyDocument extends Document {
    static getInitialProps({renderPage}) {
        const sheet = new ServerStyleSheet()
        const pageContext = getPageContext();
        const page = renderPage(Component => props => sheet.collectStyles(
            <JssProvider
                registry={pageContext.sheetsRegistry}
                generateClassName={pageContext.generateClassName}
            >
                <Component {...props} pageContext={pageContext}/>
            </JssProvider>,
        ));
        const styleTags = sheet.getStyleElement()
        return {
            ...page,
            styleTags,
            pageContext,
            styles: (
                <style
                    id="jss-server-side"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{__html: pageContext.sheetsRegistry.toString()}}
                />
            ),
        };
    }

    render() {
        const {pageContext, styleTags} = this.props;
        return (
            <html>
            <Head>
                <title>Nona_BookWorm</title>
                {styleTags}
                {/*<meta name="viewport" content="width=device-width, initial-scale=1.0"/>*/}
                <meta name="viewport"
                      content={'user-scalable=0, initial-scale=1, ' + 'minimum-scale=1, width=device-width, height=device-height'}
                />
                <meta charSet="utf-8"/>
                <meta name="theme-color" content={pageContext.theme.palette.primary[500]}/>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
                />
                <link rel="manifest" href="/static/manifest.json"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}
