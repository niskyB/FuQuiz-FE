import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import 'react-quill/dist/quill.snow.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetCurrentUserWrapper } from '../src/core/components/routerProtection';
import { store } from '../src/core/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
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
