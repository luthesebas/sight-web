export default function modulo(value: number, divisor: number) {
    return ((value % divisor) + divisor) % divisor;
}
