import NextHead from 'next/head';
import { DEV_FULLNAME, T_OG_DESC } from '../config/constants';

function getUrlBase() {
    return window.location.protocol + '//' + window.location.host + '/';
}

const Head = ({ customTitle = DEV_FULLNAME }) => {
    return (
        <NextHead>
            <title>{customTitle}</title>
            <link rel="icon" href="/favicon.png" />
            <meta name="description" content={T_OG_DESC} />
            <meta property="og:title" content={customTitle} />
            <meta property="og:description" content={T_OG_DESC} />
            <meta property="og:image" content="https://danielorchanian.fr/favicon.png" />
            <meta name="google-site-verification" content="nA_w5Nq5KWlhRel_fhMcUW8ZhvYOXWyDfZFxeDrWFjM" />
            {/* <link rel="stylesheet" href="/libs/prism.css" /> */}
            {/* <link href="/styles/globals.css" rel="stylesheet"></link> */}
            {/* <link href="https://fonts.googleapis.com/css2?family=Kufam:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}
            {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}
        </NextHead>
    )
};

export default Head;