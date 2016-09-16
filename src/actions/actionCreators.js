// Load stats
export function loadStats(stats) {
    return {
        type: 'LOAD_STATS',
        stats
    }
}

// Add stats
export function addStats(stat) {
    return {
        type: 'ADD_STATS',
        stat: stat
    }
}

// Change account
export function changeAcconut(accountId) {
    return {
        type: 'CHANGE_ACCOUNT',
        gameId,
        score
    }
}

// Change settings
export function changeSettings(settingsId, newSettings) {
    return {
        type: 'CHANGE_SETTINGS',
        settingsId,
        newSettings
    }
}

// Reset settings
export function resetSettings(settingsId) {
    return {
        type: 'RESET_SETTINGS',
        settignsId
    }
}
