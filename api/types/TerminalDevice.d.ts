export interface TerminalDevice {
    /** Unique identifier for this terminal device. Use this as the device_id when initiating payments. */
    id: string;
    /** Friendly name assigned to this device (e.g., 'Front Desk Terminal') */
    device_name: string | null;
    /** Serial number of the paired PAX terminal hardware */
    terminal_serial: string | null;
    /** The LAN IP address of the terminal as seen by the connector on the merchant's local network. This is not a publicly reachable address — all commands flow through the RevKeen cloud. */
    terminal_ip: string | null;
    /** Operating system of the machine running the Terminal Connector application */
    platform: TerminalDevice.Platform | null;
    /** Device connectivity status. online: connector connected and heartbeat within 5 minutes. offline: heartbeat stale or connector disconnected. pairing: connector registered but terminal not yet paired. */
    status: TerminalDevice.Status;
    /** Whether a PAX terminal has been paired to this connector device. Must be true to accept payments. */
    terminal_paired: boolean;
    /** Whether the connector can currently reach the PAX terminal on the local network */
    terminal_reachable: boolean | null;
    /** Version of the Terminal Connector application */
    app_version: string | null;
    /** ISO 8601 timestamp of the last heartbeat received from this device. Devices with no heartbeat in 5 minutes are considered offline. */
    last_heartbeat_at: string | null;
}
export declare namespace TerminalDevice {
    /** Operating system of the machine running the Terminal Connector application */
    const Platform: {
        readonly Macos: "macos";
        readonly Windows: "windows";
        readonly Linux: "linux";
    };
    type Platform = (typeof Platform)[keyof typeof Platform];
    /** Device connectivity status. online: connector connected and heartbeat within 5 minutes. offline: heartbeat stale or connector disconnected. pairing: connector registered but terminal not yet paired. */
    const Status: {
        readonly Online: "online";
        readonly Offline: "offline";
        readonly Pairing: "pairing";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=TerminalDevice.d.ts.map