type Extra = {
    user_id?: number,
    filename?: string,
    trace_id?: string,
    database_id?: string | number,
    extrasIndexed?: Record<string, string | number>,
} & Record<string, unknown>

declare function logToConsole(
    errorLevel: string,
    sender: string,
    errorMessage: string,
    extras?: Extra
): void

declare class LoggerClass {
    constructor(defaultSender: string)
    critical(msg: string, extra?: Extra, sender?: string): void
    error(msg: string, extra?: Extra, sender?: string): void
    warn(msg: string, extra?: Extra, sender?: string): void
    info(msg: string, extra?: Extra, sender?: string): void
    debug(msg: string, extra?: Extra, sender?: string): void
    trace(msg: string, extra?: Extra, sender?: string): void
}

declare const logger: {
    for(sender: string): LoggerClass;
    settings: {
        level: string;
        host: string;
        port: string | number;
        saveLocal: boolean;
        timestampLocal: boolean;
        verboseLocal: boolean;
        color: boolean;
        prettyPrint: boolean;
        developer_mode: boolean;
        slackHook: any;
    };
}

declare const _exports: {
    logToConsole: typeof logToConsole;
    Logger: typeof logger;
    resolveCountryToISO2: (countryInfo: string) => string | null;
    resolveCountryToISO3: (countryInfo: string) => string | null;
};

export = _exports;
