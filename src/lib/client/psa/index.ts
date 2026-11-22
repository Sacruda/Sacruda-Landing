import axios from 'axios';
import {
	PsaSeverity,
	type ParsedPsaItem,
	type PsaResponse,
	type PsaShowIn,
	type RawPsaItem
} from '../../../types/psa';

export class Psa {
	static #FEED_URL = 'https://pb.sacruda.nl/api/collections/psa/records';
	static #psaAvailable = false;
	static #items: ParsedPsaItem[] = [];

	public static get PsaAvailable() {
		return this.#psaAvailable;
	}

	static async Initialize(): Promise<void> {
		await this.Refresh();
	}

	static async Refresh() {
		try {
			const response = await axios.get<PsaResponse>(this.#FEED_URL, {
				params: { perPage: 1000 },
				responseType: 'json'
			});

			this.#items = response.data.items.map((item) => this.RawToParsed(item));
			this.#psaAvailable = true;
		} catch (e) {
			this.#psaAvailable = false;
		}
	}

	public static RawToParsed(item: RawPsaItem): ParsedPsaItem {
		return {
			id: item.id,
			affectedService: item.affectedService,
			showIn: this.ParseRawShowIn(item.showIn),
			message: item.message,
			longMessage: item.longMessage,
			severity: this.RawSeverityToSeverity(item.severity),
			severityStr: item.severity.toLowerCase(),
			createdBy: item.createdBy,
			validUntil: new Date(item.validUntil),
			created: new Date(item.created),
			updated: new Date(item.updated)
		};
	}

	public static GetPsaFor(area: string, location?: string): ParsedPsaItem | undefined {
		return this.#items.find(
			(item) =>
				!!item.showIn.find((showIn) => {
					if (location && showIn.location !== location) return false;
					if (area && showIn.area !== area) return false;

					return Date.now() < item.validUntil.getTime();
				})
		);
	}

	public static GetAllPsas(): ParsedPsaItem[] {
		return this.#items.filter((item) => Date.now() < item.validUntil.getTime());
	}

	public static RawSeverityToSeverity(rawSeverity: string): PsaSeverity {
		switch (rawSeverity.toLowerCase().trim()) {
			case 'medium':
				return PsaSeverity.Medium;
			case 'high':
				return PsaSeverity.High;
			case 'critical':
				return PsaSeverity.Critical;
			case 'low':
			default:
				return PsaSeverity.Low;
		}
	}

	public static ParseRawShowIn(showIn: string): PsaShowIn[] {
		return showIn
			.split(',')
			.map((i) => i.trim().split(':').filter(Boolean))
			.map(([area, location]) => ({ area, location }));
	}
}
