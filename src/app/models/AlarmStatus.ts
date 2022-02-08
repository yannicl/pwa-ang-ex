export interface Zone {
    label: string,
    status: string
}

export interface AlarmStatus {
    zones: Zone[]
}