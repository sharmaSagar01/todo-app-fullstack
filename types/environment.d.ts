declare namespace NodeJS {
    interface ProcessEnv {
        DATABASE_URL: string;
        SECRET: string;

        NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
        NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: string;
        NEXT_PUBLIC_GITHUB_CLIENT_ID: string;
        NEXT_PUBLIC_GITHUB_CLIENT_SECRET: string;
        NEXTAUTH_URL: string;
    }
}