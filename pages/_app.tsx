import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import 'react-quill/dist/quill.snow.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationWrapper from '../src/core/common/HOC/notificationWrapper';
import { GetCurrentUserWrapper } from '../src/core/components/routerProtection';
import { store } from '../src/core/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                src="https://browser.sentry-cdn.com/7.7.0/bundle.min.js"
                integrity="sha384-zVycKakbFST6m0pi9RFIAnb5nw7mrA1n/mE4C8grImB4B6iqCp/0LHOcTIu9AI7+"
                // crossorigin="anonymous"
            />
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FEMBDB700Z" />
            <Script type="text/javascript" src="/static/js/google.script.js" />
            <Provider store={store}>
                <GetCurrentUserWrapper>
                    <NextSeo
                        title={`FUQuiz`}
                        description={
                            'Quiz practicing for FPT University student with lots of courses on many different dimensions, join with us now!!!'
                        }
                        openGraph={{
                            images: [
                                {
                                    url: 'https://tetcha.site/asset/icons/logo-text.png',
                                    width: 1000,
                                    height: 700,
                                    alt: `FUQuiz`,
                                },
                                {
                                    url: 'https://tetcha.site/asset/icons/logo-image.png',
                                    width: 1000,
                                    height: 700,
                                    alt: `FUQuiz`,
                                },
                            ],
                        }}
                    />
                    {/* <NotificationWrapper></NotificationWrapper> */}
                    <Component {...pageProps} />
                </GetCurrentUserWrapper>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </Provider>
        </>
    );
}

export default MyApp;
