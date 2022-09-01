import { NS, ProcessInfo } from '@ns';

export async function main(ns: NS): Promise<void> {
    ns.tprint(`[${ns.getHostname()}]: Hello world -> ${ns.args}`);
}