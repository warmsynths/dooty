import { enqueuePendingEvent, getPendingEvents, removePendingEvent, saveEventsOffline, getEventsOffline, } from '../db/offlineStore.js';
const DEFAULT_BFF_URL = 'https://watslog-bff.warmsynthsiloveyou.workers.dev/api';
function getApiBase() {
    const envUrl = import.meta.env?.VITE_API_URL;
    if (envUrl) {
        return envUrl.replace(/\/+$/, '');
    }
    if (typeof window !== 'undefined') {
        const hostname = window.location.hostname;
        if (hostname.endsWith('github.io') || (!hostname.includes('localhost') && !hostname.includes('127.0.0.1'))) {
            return DEFAULT_BFF_URL;
        }
    }
    return '/api';
}
const API_BASE = getApiBase();
function getAuthHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    const token = localStorage.getItem('dooty_auth_token');
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
}
export class ApiClient {
    static async signUp(dto) {
        const res = await fetch(`${API_BASE}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dto),
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.error || 'Failed to sign up');
        }
        return res.json();
    }
    static async signIn(dto) {
        const res = await fetch(`${API_BASE}/auth/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dto),
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.error || 'Invalid email or password');
        }
        return res.json();
    }
    static async getMe() {
        const res = await fetch(`${API_BASE}/auth/me`, {
            headers: getAuthHeaders(),
        });
        if (!res.ok) {
            throw new Error('Unauthorized');
        }
        return res.json();
    }
    static async joinAuthenticated(code, role) {
        const res = await fetch(`${API_BASE}/households/join-authenticated`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify({ code, role }),
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.error || 'Failed to join household');
        }
        return res.json();
    }
    static async claimHousehold(householdId, role) {
        const res = await fetch(`${API_BASE}/households/claim`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify({ householdId, role }),
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.error || 'Failed to claim household');
        }
        return res.json();
    }
    static async createHousehold(data) {
        const res = await fetch(`${API_BASE}/households`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(data),
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.error || 'Failed to create household');
        }
        return res.json();
    }
    static async getHousehold(householdId) {
        const res = await fetch(`${API_BASE}/households/${householdId}`, {
            headers: getAuthHeaders(),
        });
        if (!res.ok)
            throw new Error('Failed to fetch household');
        return res.json();
    }
    static async removeMember(householdId, memberId) {
        const res = await fetch(`${API_BASE}/households/${householdId}/members/${memberId}`, {
            method: 'DELETE',
            headers: getAuthHeaders(),
        });
        if (!res.ok)
            throw new Error('Failed to remove member');
    }
    static async createInviteCode(householdId) {
        const res = await fetch(`${API_BASE}/households/${householdId}/invites`, {
            method: 'POST',
            headers: getAuthHeaders(),
        });
        if (!res.ok)
            throw new Error('Failed to create invite code');
        return res.json();
    }
    static async joinHousehold(code, displayName, role) {
        const res = await fetch(`${API_BASE}/households/join`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify({ code, displayName, role }),
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.error || 'Failed to join household');
        }
        return res.json();
    }
    static async getPets(householdId) {
        const res = await fetch(`${API_BASE}/households/${householdId}/pets`, {
            headers: getAuthHeaders(),
        });
        if (!res.ok)
            throw new Error('Failed to fetch pets');
        return res.json();
    }
    static async updatePet(petId, data) {
        const res = await fetch(`${API_BASE}/pets/${petId}`, {
            method: 'PATCH',
            headers: getAuthHeaders(),
            body: JSON.stringify(data),
        });
        if (!res.ok)
            throw new Error('Failed to update pet');
        return res.json();
    }
    static async updateMember(householdId, memberId, data) {
        const res = await fetch(`${API_BASE}/households/${householdId}/members/${memberId}`, {
            method: 'PATCH',
            headers: getAuthHeaders(),
            body: JSON.stringify(data),
        });
        if (!res.ok)
            throw new Error('Failed to update member');
        return res.json();
    }
    static async getEvents(petId, limit) {
        if (!navigator.onLine) {
            return getEventsOffline(petId);
        }
        try {
            const url = limit ? `${API_BASE}/pets/${petId}/events?limit=${limit}` : `${API_BASE}/pets/${petId}/events`;
            const res = await fetch(url, {
                headers: getAuthHeaders(),
            });
            if (!res.ok)
                throw new Error('Failed to fetch events from server');
            const events = await res.json();
            await saveEventsOffline(events);
            return events;
        }
        catch {
            return getEventsOffline(petId);
        }
    }
    static async createEvent(dto) {
        if (!navigator.onLine) {
            const localId = await enqueuePendingEvent(dto);
            return {
                id: localId,
                householdId: dto.householdId,
                petId: dto.petId,
                eventType: dto.eventType,
                loggedByName: dto.loggedByName || 'Me',
                timestamp: dto.timestamp,
                notes: dto.notes,
                latitude: dto.latitude,
                longitude: dto.longitude,
                metadata: dto.metadata,
                createdAt: new Date().toISOString(),
                isOfflinePending: true,
                localId,
            };
        }
        try {
            const res = await fetch(`${API_BASE}/events`, {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify(dto),
            });
            if (!res.ok)
                throw new Error('Server returned error creating event');
            const evt = await res.json();
            await saveEventsOffline([evt]);
            return evt;
        }
        catch (err) {
            console.warn('Network request failed, falling back to offline queue:', err);
            const localId = await enqueuePendingEvent(dto);
            return {
                id: localId,
                householdId: dto.householdId,
                petId: dto.petId,
                eventType: dto.eventType,
                loggedByName: dto.loggedByName || 'Me',
                timestamp: dto.timestamp,
                notes: dto.notes,
                latitude: dto.latitude,
                longitude: dto.longitude,
                metadata: dto.metadata,
                createdAt: new Date().toISOString(),
                isOfflinePending: true,
                localId,
            };
        }
    }
    static async flushOfflineQueue() {
        if (!navigator.onLine)
            return 0;
        const pending = await getPendingEvents();
        if (pending.length === 0)
            return 0;
        try {
            const dtos = pending.map((p) => p.dto);
            const res = await fetch(`${API_BASE}/events/batch-sync`, {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify({ events: dtos }),
            });
            if (res.ok) {
                for (const item of pending) {
                    await removePendingEvent(item.localId);
                }
                return pending.length;
            }
        }
        catch (err) {
            console.warn('Failed to flush offline queue:', err);
        }
        return 0;
    }
    static async importEvents(events) {
        const chunkSize = 500;
        let totalImported = 0;
        for (let i = 0; i < events.length; i += chunkSize) {
            const chunk = events.slice(i, i + chunkSize);
            let res = await fetch(`${API_BASE}/import/events`, {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify({ events: chunk }),
            });
            // Fallback if worker cache or route hasn't refreshed
            if (res.status === 404) {
                res = await fetch(`${API_BASE}/events/batch-sync`, {
                    method: 'POST',
                    headers: getAuthHeaders(),
                    body: JSON.stringify({ events: chunk }),
                });
            }
            if (!res.ok) {
                const errJson = await res.json().catch(() => ({}));
                throw new Error(errJson.error || `Import batch failed (${res.status})`);
            }
            const data = await res.json();
            totalImported += data.importedCount || data.syncedCount || chunk.length;
        }
        return { importedCount: totalImported };
    }
    static async importDogNotes(householdId, petId, items) {
        const res = await fetch(`${API_BASE}/import/dognotes`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify({ householdId, petId, items }),
        });
        if (!res.ok)
            throw new Error('DogNotes import failed');
        return res.json();
    }
    static async getAnalytics(petId) {
        const res = await fetch(`${API_BASE}/pets/${petId}/analytics`, {
            headers: getAuthHeaders(),
        });
        if (!res.ok)
            throw new Error('Failed to fetch analytics');
        return res.json();
    }
    static async saveWalkRoute(walk) {
        const res = await fetch(`${API_BASE}/walks`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(walk),
        });
        if (!res.ok)
            throw new Error('Failed to save walk route');
        return res.json();
    }
    static async getWalkRoutes(petId) {
        const res = await fetch(`${API_BASE}/pets/${petId}/walks`, {
            headers: getAuthHeaders(),
        });
        if (!res.ok)
            throw new Error('Failed to fetch walk routes');
        return res.json();
    }
}
//# sourceMappingURL=client.js.map