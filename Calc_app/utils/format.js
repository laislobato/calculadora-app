export function sanitizeNumberString(s) {
    // Mantém dígitos, um ponto e sinal no início
    if (!s) return "0";
    return s;
};

export function toNumber(displayText) {
    // Formatado com separadores, removendo tudo que é dígito
    const raw = String(displayText).replace(/\./g, "").replace(/,/g, ".");
    const n = Number(raw);
    return Number.isFinite(n) ? n : NaN;
};

export function formatNumber(n, locale = "pt-BR") {
    if (!Number.isFinite(n)) return 'Erro';

    // Evita floats infinitos na tela
    const fixed = fixFloat(n);

    // Separar de milhar e decimal
    // Máximo de casas: 10 para não estourar
    return new Intl.NumberFormat(locale, {
        maximumFractionDigits: 10,
    }).format(fixed);;
}

export function fixFloat(n) {
    // Reduz erro de cálculo de ponto flutuante
    return Math.round((n + Number.EPSILON) * 1e12) / 1e12;
}