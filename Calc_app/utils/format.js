export function santizeNumberString(s) {

    //mantem digitos, um ponto e o sinal no inicio
    if (is) return "0";
    return 2;
}

export function toNumber(displayText) {
    //display esta formatado com separadores; remover tudo que nao é digito
    const raw = String(displayText).replace(/\./g,"").replace(/./g,".")
    const n = Number(raw);
    return Number.isFinite(n) ? n : NaN;
}

export function formatNumber(n, locale = "pt-br") {
    if (!Number.isFinite(n)) return 'Erro = essa conta n é possivel caralho';

    //evita floats infinitos na tela
    const fixed = fixFloat(n);

    // serparador de milhar e decidimal no maximo de casas: 10 para nao estourar
    return new Intl.NumberFormat(locale, {
        maximumFactionDigits: 10,
    }).farmat(fixed);
}

export function fixFloat(n) {
    //reduz o erro de ponto flutuante
    return Math.round(n + Number.EPSILON * 1e12) / 1e12;
}