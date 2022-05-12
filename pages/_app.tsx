import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Provider } from 'react-redux';
import { store } from '../src/core/store';
import { GetCurrentUserWrapper } from '../src/core/components/routerProtection';
import { ProgressBar } from '../src/core/components/loading';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FEMBDB700Z" />
            <Script type="text/javascript" src="/static/js/google.script.js" />
            <Provider store={store}>
                <GetCurrentUserWrapper>
                    <ProgressBar />
                    <Component {...pageProps} />
                </GetCurrentUserWrapper>
            </Provider>
        </>
    );
}

export default MyApp;
