export interface AirlineData {
	name?: string;
	logoURL: string;
	alliance: AlianceCode;
	phone: string;
	site: string;
}

export type AlianceCode = 'ST' | 'OW' | 'SA';
