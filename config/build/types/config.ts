export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildMode;
    analyze: boolean;
    port: number;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    isAnalyze: boolean;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
}
