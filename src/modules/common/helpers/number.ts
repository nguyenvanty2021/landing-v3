export function numberWithSymbol(num: number, symbol: string) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
}