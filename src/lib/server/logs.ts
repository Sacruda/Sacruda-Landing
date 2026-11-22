import dayjs from 'dayjs';

const LOGS = [];

export function Log(source: string, message?: string) {
	const now = dayjs().format('DD MMM YYYY HH:mm:ss');
	const txt = `[${now}] ${source}: ${message || '<none>'}`;

	console.log(txt);
	LOGS.push(txt);
}

export function Loggable(source: string) {
	class LoggableClass {
		static Log(message: string) {
			Log(source, message);
		}
	}

	return LoggableClass;
}
