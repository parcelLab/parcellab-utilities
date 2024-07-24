type Extra = {
    user_id?: number,
    filename?: string,
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

declare const _exports: {
    logToConsole: typeof logToConsole;
    Logger: { for(sender: string): LoggerClass };
    resolveCountryToISO2: (countryInfo: string) => string | null;
    resolveCountryToISO3: (countryInfo: string) => string | null;
};

export = _exports;
