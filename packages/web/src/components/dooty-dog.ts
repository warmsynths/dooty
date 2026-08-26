import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../state/appState.js';

@customElement('dooty-dog')
export class DootyDog extends LitElement {
  @state() private medDone: Record<number, boolean> = { 0: true, 1: false, 2: false };
  private unsubscribe?: () => void;

  static styles = css`
    :host {
      display: block;
      padding: 58px 18px 140px;
      box-sizing: border-box;
    }

    .dog-hero-card {
      background: #FFCE2E;
      border: 3px solid #17140F;
      border-radius: 24px;
      padding: 17px;
      box-shadow: 5px 5px 0 #17140F;
      display: flex;
      gap: 14px;
      align-items: center;
      margin-bottom: 14px;
    }

    .dog-avatar-wrapper {
      position: relative;
      cursor: pointer;
      flex: none;
      transition: transform 0.12s;
    }

    .dog-avatar-wrapper:active {
      transform: scale(0.96);
    }

    .dog-pic-avatar {
      width: 74px;
      height: 74px;
      border-radius: 50%;
      border: 3px solid #17140F;
      box-shadow: 2px 2px 0 #17140F;
      background: #FFFFFF;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 800;
      color: #8A7F68;
      text-align: center;
      line-height: 1.2;
    }

    .dog-pic-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .avatar-edit-badge {
      position: absolute;
      bottom: -2px;
      right: -2px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #FF5A3C;
      color: #FFFFFF;
      border: 2px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      box-shadow: 1.5px 1.5px 0 #17140F;
    }

    .dog-name {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 25px;
      color: #17140F;
      letter-spacing: -0.8px;
      line-height: 1.1;
    }

    .dog-details {
      font-size: 12px;
      font-weight: 700;
      color: #7A5C00;
      margin-top: 2px;
    }

    .good-badge {
      display: inline-flex;
      margin-top: 7px;
      align-items: center;
      gap: 6px;
      background: #1FC99B;
      border: 2.5px solid #17140F;
      border-radius: 10px;
      padding: 3px 9px;
      font-size: 10.5px;
      font-weight: 800;
      color: #17140F;
    }

    .card-block {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px;
      box-shadow: 4px 4px 0 #17140F;
      margin-bottom: 14px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }

    .card-title {
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
    }

    .card-badge {
      font-size: 10.5px;
      font-weight: 800;
      color: #9A9080;
      letter-spacing: 0.6px;
    }

    /* Checklist */
    .med-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 11px;
    }

    .med-check {
      width: 28px;
      height: 28px;
      border-radius: 10px;
      flex: none;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 15px;
      font-weight: 800;
      color: #17140F;
    }

    /* Vet Timeline */
    .vet-item {
      display: flex;
      gap: 12px;
      margin-bottom: 14px;
    }

    .vet-date {
      font-size: 11.5px;
      font-weight: 800;
      color: #7A6F5D;
      width: 80px;
      flex: none;
      padding-top: 2px;
    }

    .vet-body {
      flex: 1;
      min-width: 0;
      border-left: 3px solid #FFCE2E;
      padding-left: 12px;
    }

    .weight-stat-row {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .weight-current-val {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 32px;
      color: #17140F;
      letter-spacing: -1px;
      line-height: 1;
    }

    .weight-current-date {
      font-size: 12px;
      font-weight: 700;
      color: #6A6152;
    }

    .export-btn {
      background: #2B5BE8;
      border: 3px solid #17140F;
      border-radius: 20px;
      padding: 15px;
      text-align: center;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 17px;
      color: #FFF;
      cursor: pointer;
      box-shadow: 4px 4px 0 #17140F;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    .export-btn:hover {
      transform: translate(-1px, -1px);
      box-shadow: 6px 6px 0 #17140F;
    }
  `;

  @state() private uncheckState: Record<string, boolean> = {};

  connectedCallback() {
    super.connectedCallback();
    this.unsubscribe = appState.subscribe(() => this.requestUpdate());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe?.();
  }

  private toggleMedChecked(key: string) {
    this.uncheckState = { ...this.uncheckState, [key]: !this.uncheckState[key] };
  }

  private renderWeightChart(isKo: boolean) {
    const rawEvents = (appState.events || [])
      .filter((e) => e.eventType === 'weight' && e.metadata?.weightKg)
      .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

    interface WeightPoint {
      weight: number;
      dateLabel: string;
    }

    if (rawEvents.length === 0) {
      return html`
        <div style="padding: 16px 0; text-align: center;">
          <div style="font-size: 28px; margin-bottom: 6px;">⚖️</div>
          <div style="font-size: 14px; font-weight: 800; color: #17140F;">
            ${isKo ? '등록된 체중 기록이 없습니다' : 'No weigh-ins recorded yet'}
          </div>
          <div style="font-size: 12px; font-weight: 600; color: #6A6152; margin-top: 4px; line-height: 1.4;">
            ${isKo
              ? '하단 + 버튼을 눌러 첫 몸무게를 기록해보세요.'
              : 'Tap the orange + button below to log your pet’s weight.'}
          </div>
        </div>
      `;
    }

    const dataPoints: WeightPoint[] = rawEvents.map((e) => {
      const d = new Date(e.timestamp);
      const mon = d.toLocaleDateString([], { month: 'short' });
      const yr = d.getFullYear().toString().slice(-2);
      return {
        weight: Number(e.metadata?.weightKg || parseFloat(e.notes || '0') || 0),
        dateLabel: `${mon} '${yr}`,
      };
    });

    const weights = dataPoints.map((p) => p.weight);
    const minW = Math.min(...weights);
    const maxW = Math.max(...weights);
    const range = maxW - minW || 1;

    const svgW = 320;
    const svgH = 110;
    const padTop = 22;
    const padBottom = 24;
    const chartH = svgH - padTop - padBottom;

    const coords = dataPoints.map((p, i) => {
      const x = dataPoints.length === 1 ? svgW / 2 : 16 + (i / (dataPoints.length - 1)) * (svgW - 32);
      const y = dataPoints.length === 1 ? padTop + chartH / 2 : padTop + chartH - ((p.weight - minW) / range) * chartH;
      return { x, y, ...p };
    });

    const pathD = coords
      .map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`)
      .join(' ');

    const last = coords[coords.length - 1];
    const diff = last.weight - coords[0].weight;

    return html`
      <div class="weight-stat-row">
        <div>
          <span class="weight-current-val">${last.weight.toFixed(1)} kg</span>
          ${coords.length > 1
            ? html`
                <span style="font-size: 11px; font-weight: 800; color: ${diff >= 0 ? '#1FC99B' : '#FF5A3C'}; margin-left: 6px;">
                  ${diff >= 0 ? '+' : ''}${diff.toFixed(1)} kg
                </span>
              `
            : null}
        </div>
        <div class="weight-current-date">
          ${isKo ? `최근 측정: ${last.dateLabel}` : `Latest: ${last.dateLabel}`}
        </div>
      </div>

      <div style="height: 110px; width: 100%; position: relative;">
        <svg viewBox="0 0 ${svgW} ${svgH}" style="width: 100%; height: 100%; overflow: visible;">
          <!-- Grid lines -->
          <line x1="12" y1="${padTop + chartH}" x2="${svgW - 12}" y2="${padTop + chartH}" stroke="#E8DFCE" stroke-width="1.5" stroke-dasharray="4,4" />
          <line x1="12" y1="${padTop}" x2="${svgW - 12}" y2="${padTop}" stroke="#E8DFCE" stroke-width="1.5" stroke-dasharray="4,4" />

          <!-- Path -->
          ${coords.length > 1
            ? html`<path d="${pathD}" fill="none" stroke="#17140F" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round" />`
            : null}

          <!-- Data Points with Actual Weights -->
          ${coords.map((c, i) => {
            const isLast = i === coords.length - 1;
            return html`
              <circle
                cx="${c.x}"
                cy="${c.y}"
                r="${isLast ? 6 : 4.5}"
                fill="${isLast ? '#FF5A3C' : '#FFCE2E'}"
                stroke="#17140F"
                stroke-width="2.5"
              />
              <rect
                x="${c.x - 17}"
                y="${c.y - 19}"
                width="34"
                height="14"
                rx="4"
                fill="#17140F"
              />
              <text
                x="${c.x}"
                y="${c.y - 9}"
                font-size="8.5"
                font-weight="800"
                font-family="sans-serif"
                fill="#FFFFFF"
                text-anchor="middle"
              >
                ${c.weight.toFixed(1)}k
              </text>
            `;
          })}
        </svg>
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 6px; font-size: 9.5px; font-weight: 800; color: #8A7F68; letter-spacing: 0.5px;">
        ${coords.map((c) => html`<span>${c.dateLabel}</span>`)}
      </div>
    `;
  }

  render() {
    const isKo = appState.currentLocale === 'ko';
    const pet = appState.currentPet;
    const petName = pet?.name || (isKo ? '반려견' : 'My Pet');
    // Calculate Pet Age
    let ageStr = '';
    if (pet?.birthday) {
      const birth = new Date(pet.birthday);
      const now = new Date();
      if (!isNaN(birth.getTime())) {
        const diffMonths = (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());
        if (diffMonths >= 12) {
          const yrs = Math.floor(diffMonths / 12);
          ageStr = isKo ? `${yrs}살` : `${yrs} yr${yrs > 1 ? 's' : ''}`;
        } else if (diffMonths > 0) {
          ageStr = isKo ? `${diffMonths}개월` : `${diffMonths} mo${diffMonths > 1 ? 's' : ''}`;
        } else {
          ageStr = isKo ? '신생' : 'puppy';
        }
      }
    }
    if (!ageStr) {
      ageStr = isKo ? '5살' : '5 yrs';
    }

    // Calculate Latest Current Weight
    const rawWeightEvents = (appState.events || [])
      .filter((e) => e.eventType === 'weight' && (e.metadata?.weightKg || e.notes))
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    let currentWeightKg: number = 14.2;
    if (rawWeightEvents.length > 0) {
      const firstValid = rawWeightEvents.find((e) => {
        const w = Number(e.metadata?.weightKg || parseFloat(e.notes || '0') || 0);
        return w > 0;
      });
      if (firstValid) {
        currentWeightKg = Number(firstValid.metadata?.weightKg || parseFloat(firstValid.notes || '0') || 14.2);
      }
    }
    const weightStr = isKo ? `${currentWeightKg.toFixed(1)}kg` : `${currentWeightKg.toFixed(1)} kg`;
    const petBreed = pet?.breed || (isKo ? '비글 믹스' : 'Beagle mix');
    const petDetailsStr = `${petBreed} · ${ageStr} · ${weightStr}`;

    // Pull medicine events restricted to the last 6 months
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const recentMedEvents = (appState.events || [])
      .filter((e) => {
        if (e.eventType !== 'medicine') return false;
        const d = new Date(e.timestamp);
        return d >= sixMonthsAgo;
      })
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    // Deduplicate identical medication records logged around the same timestamp (e.g. multi-device sync)
    const uniqueMeds: typeof recentMedEvents = [];
    const seenMedKeys = new Set<string>();

    for (const e of recentMedEvents) {
      const medName = (e.metadata?.medication || e.notes || '').trim().toLowerCase();
      // Bucket timestamp to 10-minute window for duplicate prevention
      const timeBucket = Math.floor(new Date(e.timestamp).getTime() / (10 * 60 * 1000));
      const dedupKey = `${medName}_${timeBucket}`;
      if (!seenMedKeys.has(dedupKey)) {
        seenMedKeys.add(dedupKey);
        uniqueMeds.push(e);
      }
    }

    // Default fallback med entries if history in last 6 months is empty
    const defaultMedEntries = [
      {
        id: 'def-med-1',
        title: 'Apoquel',
        sub: `16 mg with food · ${isKo ? '기록자' : 'Logged by'} Sam`,
        dateStr: '24 Aug 2026, 8:05 am',
      },
      {
        id: 'def-med-2',
        title: 'Joint chew',
        sub: `1 chew, evening · ${isKo ? '기록자' : 'Logged by'} Sam`,
        dateStr: '24 Aug 2026, 6:15 pm',
      },
      {
        id: 'def-med-3',
        title: 'Flea & tick prevention',
        sub: `Topical treatment · ${isKo ? '기록자' : 'Logged by'} Sam`,
        dateStr: '18 Aug 2026, 10:00 am',
      },
    ];

    const displayMeds =
      uniqueMeds.length > 0
        ? uniqueMeds.map((e) => {
            const d = new Date(e.timestamp);
            const dateStr = `${d.toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' })}, ${d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).toLowerCase()}`;
            const title = e.metadata?.medication || e.notes || (isKo ? '약/영양제' : 'Medicine');

            // Format clean subtitle without repeating the medicine name
            const subParts: string[] = [];
            if (e.metadata?.dosage) {
              subParts.push(e.metadata.dosage);
            }
            if (e.notes && e.notes.trim().toLowerCase() !== title.trim().toLowerCase()) {
              subParts.push(e.notes.trim());
            }
            if (e.loggedByName) {
              subParts.push(`${isKo ? '기록자' : 'Logged by'} ${e.loggedByName}`);
            }
            const sub = subParts.join(' · ');

            return {
              id: e.id,
              title,
              sub,
              dateStr,
            };
          })
        : defaultMedEntries;

    // Pull vet events with full year format
    const allVetEvents = (appState.events || [])
      .filter((e) => e.eventType === 'vet')
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    const defaultVets = [
      { date: '12 Jun 2024', title: 'Annual check-up', note: 'Weight up 0.4 kg. Teeth good. Apoquel renewed.' },
      { date: '03 Aug 2025', title: 'Loose stool consult', note: 'Likely new treat brand. Bland diet 5 days.' },
      { date: '19 Aug 2026', title: 'Follow-up call', note: 'Resolved. Back to normal food.' },
    ];

    const displayVets =
      allVetEvents.length > 0
        ? allVetEvents.map((v) => {
            const d = new Date(v.timestamp);
            const date = d.toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' });
            return {
              date,
              title: v.notes || (isKo ? '정기 진료' : 'Vet Consultation'),
              note: `${isKo ? '기록자' : 'Logged by'}: ${v.loggedByName}`,
            };
          })
        : defaultVets;

    const petAvatar = pet?.avatarUrl;

    return html`
      <!-- Pet Hero Card -->
      <div class="dog-hero-card">
        <div
          class="dog-avatar-wrapper"
          @click=${() =>
            appState.openPhotoModal({
              target: 'pet',
              targetId: pet?.id,
              currentAvatar: petAvatar,
              title: isKo ? `${petName} 사진 변경` : `Change ${petName}'s Photo`,
            })}
        >
          <div class="dog-pic-avatar">
            ${petAvatar
              ? html`<img src="${petAvatar}" class="dog-pic-img" alt="${petName}" />`
              : html`<div>${isKo ? '반려견\n사진' : 'pet\npic'}</div>`}
          </div>
          <div class="avatar-edit-badge">📷</div>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div class="dog-name">${petName}</div>
          <div class="dog-details">
            ${petDetailsStr}
          </div>
          <div class="good-badge">${isKo ? '모두 양호' : 'ALL GOOD'}</div>
        </div>
      </div>

      <!-- Weight Card (With Actual Weights & Dates) -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${isKo ? '체중 변화' : 'Weight'}</div>
          <div class="card-badge">${isKo ? '최근 12개월' : '12 MONTHS'}</div>
        </div>
        ${this.renderWeightChart(isKo)}
      </div>

      <!-- Medications Log (History with Checked Status by Default) -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${isKo ? '투약 및 영양제 기록' : 'Pills & Supplements'}</div>
          <div class="card-badge">${displayMeds.length} ${isKo ? '건' : 'LOGGED'}</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 11px;">
          ${displayMeds.map((m) => {
            // Checked by default unless explicitly toggled off
            const isChecked = !this.uncheckState[m.id];
            return html`
              <div class="med-row">
                <div
                  class="med-check"
                  style="background: ${isChecked ? '#1FC99B' : '#FFF'};"
                  @click=${() => this.toggleMedChecked(m.id)}
                  title="${isChecked ? 'Marked as completed' : 'Click to check'}"
                >
                  ${isChecked ? '✓' : ''}
                </div>
                <div style="flex: 1; min-width: 0;">
                  <div style="font-size: 14px; font-weight: 800; color: #17140F;">
                    ${m.title}
                  </div>
                  ${m.sub
                    ? html`<div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin-top: 1px;">${m.sub}</div>`
                    : null}
                </div>
                <div style="font-size: 11px; font-weight: 800; color: #9A9080; flex: none; text-align: right;">
                  ${m.dateStr}
                </div>
              </div>
            `;
          })}
        </div>
      </div>

      <!-- Vet History (With Explicit Year in Dates) -->
      <div class="card-block">
        <div class="card-header">
          <div class="card-title">${isKo ? '병원 진료 내역' : 'Vet history'}</div>
          <div class="card-badge">${displayVets.length} ${isKo ? '회' : 'VISITS'}</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${displayVets.map(
            (v) => html`
              <div class="vet-item">
                <div class="vet-date">${v.date}</div>
                <div class="vet-body">
                  <div style="font-size: 13.5px; font-weight: 800; color: #17140F;">
                    ${v.title}
                  </div>
                  <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; line-height: 1.45; margin-top: 2px;">
                    ${v.note}
                  </div>
                </div>
              </div>
            `
          )}
        </div>
      </div>

      <!-- Export Button -->
      <div
        class="export-btn"
        @click=${() =>
          this.dispatchEvent(
            new CustomEvent('dooty-toast', {
              bubbles: true,
              composed: true,
              detail: {
                title: isKo ? '요약 준비 완료' : 'Summary ready',
                sub: isKo ? '기록 데이터가 준비되었습니다.' : 'Health logs ready.',
              },
            })
          )}
      >
        ${isKo ? '건강 요약 내보내기' : 'Export health summary'}
      </div>
    `;
  }
}
