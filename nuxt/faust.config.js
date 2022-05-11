import {
    config as coreConfig
} from '@faustjs/core';

if (!process.env.NUXT_PUBLIC_WORDPRESS_URL) {
    console.error(
        'You must provide a NUXT_PUBLIC_WORDPRESS_URL environment variable, did you forget to load your .env.local file?',
    );
}

/**
 * @type {import("@faustjs/core").Config}
 */
export default coreConfig({
    wpUrl: process.env.NUXT_PUBLIC_WORDPRESS_URL,
    apiClientSecret: process.env.FAUSTWP_SECRET_KEY,
});