import { enqueuePendingEvent, getPendingEvents, removePendingEvent, saveEventsOffline, getEventsOffline, deleteEventOffline, updateEventOffline, getLastSyncTimestamp, setLastSyncTimestamp, } from '../db/offlineStore.js';
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
let activeRequestsCount = 0;
const activityListeners = new Set();
let settleTimer = null;
function notifyActivityListeners() {
    const count = activeRequestsCount;
    activityListeners.forEach((fn) => {
        try {
            fn(count);
        }
        catch (e) {
            console.error('API activity listener error:', e);
        }
    });
}
export function onApiActivityChange(listener) {
    activityListeners.add(listener);
    listener(activeRequestsCount);
    return () => {
        activityListeners.delete(listener);
    };
}
export function getActiveApiCount() {
    return activeRequestsCount;
}
export async function trackedFetch(input, init) {
    if (settleTimer) {
        clearTimeout(settleTimer);
        settleTimer = null;
    }
    activeRequestsCount++;
    notifyActivityListeners();
    try {
        const res = await fetch(input, init);
        return res;
    }
    finally {
        activeRequestsCount = Math.max(0, activeRequestsCount - 1);
        if (activeRequestsCount === 0) {
            settleTimer = setTimeout(() => {
                if (activeRequestsCount === 0) {
                    notifyActivityListeners();
                }
            }, 250);
        }
        else {
            notifyActivityListeners();
        }
    }
}
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
        const res = await trackedFetch(`${API_BASE}/auth/signup`, {
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
        const res = await trackedFetch(`${API_BASE}/auth/signin`, {
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
        const res = await trackedFetch(`${API_BASE}/auth/me`, {
            headers: getAuthHeaders(),
        });
        if (!res.ok) {
            throw new Error('Unauthorized');
        }
        return res.json();
    }
    static async joinAuthenticated(code, role) {
        const res = await trackedFetch(`${API_BASE}/households/join-authenticated`, {
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
        const res = await trackedFetch(`${API_BASE}/households/claim`, {
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
        const res = await trackedFetch(`${API_BASE}/households`, {
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
        const res = await trackedFetch(`${API_BASE}/households/${householdId}`, {
            headers: getAuthHeaders(),
        });
        if (!res.ok)
            throw new Error('Failed to fetch household');
        return res.json();
    }
    static async removeMember(householdId, memberId) {
        const res = await trackedFetch(`${API_BASE}/households/${householdId}/members/${memberId}`, {
            method: 'DELETE',
            headers: getAuthHeaders(),
        });
        if (!res.ok)
            throw new Error('Failed to remove member');
    }
    static async createInviteCode(householdId) {
        const res = await trackedFetch(`${API_BASE}/households/${householdId}/invites`, {
            method: 'POST',
            headers: getAuthHeaders(),
        });
        if (!res.ok)
            throw new Error('Failed to create invite code');
        return res.json();
    }
    static async joinHousehold(code, displayName, role) {
        const res = await trackedFetch(`${API_BASE}/households/join`, {
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
        const res = await trackedFetch(`${API_BASE}/households/${householdId}/pets`, {
            headers: getAuthHeaders(),
        });
        if (!res.ok)
            throw new Error('Failed to fetch pets');
        return res.json();
    }
    static async updatePet(petId, data) {
        const res = await trackedFetch(`${API_BASE}/pets/${petId}`, {
            method: 'PATCH',
            headers: getAuthHeaders(),
            body: JSON.stringify(data),
        });
        if (!res.ok)
            throw new Error('Failed to update pet');
        return res.json();
    }
    static async updateMember(householdId, memberId, data) {
        const res = await trackedFetch(`${API_BASE}/households/${householdId}/members/${memberId}`, {
            method: 'PATCH',
            headers: getAuthHeaders(),
            body: JSON.stringify(data),
        });
        if (!res.ok)
            throw new Error('Failed to update member');
        return res.json();
    }
    static async getEvents(petId, options) {
        if (!navigator.onLine) {
            return getEventsOffline(petId);
        }
        try {
            const opts = typeof options === 'number' ? { limit: options } : options || {};
            const params = new URLSearchParams();
            if (opts.limit)
                params.set('limit', opts.limit.toString());
            if (opts.offset)
                params.set('offset', opts.offset.toString());
            if (opts.since)
                params.set('since', opts.since);
            if (opts.startDate)
                params.set('startDate', opts.startDate);
            if (opts.endDate)
                params.set('endDate', opts.endDate);
            const qs = params.toString();
            const url = qs ? `${API_BASE}/pets/${petId}/events?${qs}` : `${API_BASE}/pets/${petId}/events`;
            const res = await trackedFetch(url, {
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
    static async syncEvents(petId, onProgress) {
        if (!navigator.onLine) {
            return getEventsOffline(petId);
        }
        try {
            const lastSync = await getLastSyncTimestamp(petId);
            const syncStartTime = new Date().toISOString();
            if (lastSync) {
                // Delta sync: fetch only new/modified events since last sync
                const deltaEvents = await this.getEvents(petId, { since: lastSync, limit: 1000 });
                if (deltaEvents && deltaEvents.length > 0) {
                    await saveEventsOffline(deltaEvents);
                }
                await setLastSyncTimestamp(petId, syncStartTime);
                return getEventsOffline(petId);
            }
            else {
                // Cold sync: fetch recent 90 days first for immediate interaction
                const ninetyDaysAgo = new Date(Date.now() - 90 * 86400000).toISOString();
                const recentEvents = await this.getEvents(petId, { startDate: ninetyDaysAgo, limit: 500 });
                if (recentEvents && recentEvents.length > 0) {
                    await saveEventsOffline(recentEvents);
                    onProgress?.(recentEvents.length);
                }
                await setLastSyncTimestamp(petId, syncStartTime);
                // Asynchronously backfill older history in the background
                this.backfillOlderEvents(petId, ninetyDaysAgo, onProgress).catch((err) => {
                    console.warn('Background historical backfill error:', err);
                });
                return getEventsOffline(petId);
            }
        }
        catch (err) {
            console.warn('Sync failed, using offline fallback:', err);
            return getEventsOffline(petId);
        }
    }
    static async backfillOlderEvents(petId, beforeIso, onProgress) {
        if (!navigator.onLine)
            return;
        try {
            let currentBefore = beforeIso;
            let hasMore = true;
            const batchSize = 500;
            while (hasMore) {
                const chunk = await this.getEvents(petId, {
                    endDate: currentBefore,
                    limit: batchSize,
                });
                if (!chunk || chunk.length === 0) {
                    hasMore = false;
                    break;
                }
                await saveEventsOffline(chunk);
                onProgress?.(chunk.length);
                if (chunk.length < batchSize) {
                    hasMore = false;
                }
                else {
                    const earliest = chunk[chunk.length - 1];
                    if (earliest && earliest.timestamp && earliest.timestamp !== currentBefore) {
                        currentBefore = earliest.timestamp;
                    }
                    else {
                        hasMore = false;
                    }
                }
            }
        }
        catch (err) {
            console.warn('Backfill chunk failed:', err);
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
            const res = await trackedFetch(`${API_BASE}/events`, {
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
    static async updateEvent(eventId, updates) {
        if (!navigator.onLine) {
            // Find event offline and apply updates
            const all = await getEventsOffline(''); // or update directly
            const target = all.find((e) => e.id === eventId);
            if (target) {
                const updated = {
                    ...target,
                    ...updates,
                    eventType: updates.eventType ?? target.eventType,
                    notes: updates.notes !== undefined ? updates.notes : target.notes,
                    latitude: updates.latitude !== undefined ? (updates.latitude ?? undefined) : target.latitude,
                    longitude: updates.longitude !== undefined ? (updates.longitude ?? undefined) : target.longitude,
                    metadata: updates.metadata !== undefined ? updates.metadata : target.metadata,
                };
                await updateEventOffline(updated);
                return updated;
            }
        }
        try {
            const res = await trackedFetch(`${API_BASE}/events/${eventId}`, {
                method: 'PATCH',
                headers: getAuthHeaders(),
                body: JSON.stringify(updates),
            });
            if (!res.ok)
                throw new Error('Server returned error updating event');
            const evt = await res.json();
            await updateEventOffline(evt);
            return evt;
        }
        catch (err) {
            console.warn('Network update failed:', err);
            throw err;
        }
    }
    static async deleteEvent(eventId) {
        await deleteEventOffline(eventId);
        if (!navigator.onLine)
            return;
        try {
            const res = await trackedFetch(`${API_BASE}/events/${eventId}`, {
                method: 'DELETE',
                headers: getAuthHeaders(),
            });
            if (!res.ok && res.status !== 404) {
                throw new Error('Server returned error deleting event');
            }
        }
        catch (err) {
            console.warn('Network delete warning:', err);
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
            const res = await trackedFetch(`${API_BASE}/events/batch-sync`, {
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
            let res = await trackedFetch(`${API_BASE}/import/events`, {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify({ events: chunk }),
            });
            // Fallback if worker cache or route hasn't refreshed
            if (res.status === 404) {
                res = await trackedFetch(`${API_BASE}/events/batch-sync`, {
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
        const res = await trackedFetch(`${API_BASE}/import/dognotes`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify({ householdId, petId, items }),
        });
        if (!res.ok)
            throw new Error('DogNotes import failed');
        return res.json();
    }
    static async getAnalytics(petId, options) {
        const params = new URLSearchParams();
        if (options?.startDate)
            params.set('startDate', options.startDate);
        if (options?.endDate)
            params.set('endDate', options.endDate);
        const qs = params.toString();
        const url = qs ? `${API_BASE}/pets/${petId}/analytics?${qs}` : `${API_BASE}/pets/${petId}/analytics`;
        const res = await trackedFetch(url, {
            headers: getAuthHeaders(),
        });
        if (!res.ok)
            throw new Error('Failed to fetch analytics');
        return res.json();
    }
    static async saveWalkRoute(walk) {
        const res = await trackedFetch(`${API_BASE}/walks`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(walk),
        });
        if (!res.ok)
            throw new Error('Failed to save walk route');
        return res.json();
    }
    static async getWalkRoutes(petId) {
        const res = await trackedFetch(`${API_BASE}/pets/${petId}/walks`, {
            headers: getAuthHeaders(),
        });
        if (!res.ok)
            throw new Error('Failed to fetch walk routes');
        return res.json();
    }
}
//# sourceMappingURL=client.js.map