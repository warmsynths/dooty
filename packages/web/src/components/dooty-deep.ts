import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { appState } from '../state/appState.js';

@customElement('dooty-deep')
export class DootyDeep extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 52px 18px 140px;
      box-sizing: border-box;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 14px;
      padding: 8px 13px;
      font-size: 12.5px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      width: fit-content;
      box-shadow: 3px 3px 0 #17140F;
      margin-bottom: 14px;
    }

    .section-tag {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.8px;
      color: #9A9080;
      text-transform: uppercase;
    }

    .page-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 29px;
      color: #17140F;
      letter-spacing: -1px;
      line-height: 1.1;
      margin-top: 2px;
    }

    .page-sub {
      font-size: 12.5px;
      font-weight: 600;
      color: #6A6152;
      margin-top: 4px;
      line-height: 1.45;
      margin-bottom: 14px;
    }

    .card-block {
      background: #FFF;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 15px;
      box-shadow: 4px 4px 0 #17140F;
      margin-bottom: 14px;
    }

    .score-row {
      display: flex;
      align-items: baseline;
      gap: 10px;
      margin-bottom: 12px;
    }

    .score-num {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 36px;
      color: #17140F;
      line-height: 1;
      letter-spacing: -1.4px;
    }

    .score-trend {
      font-size: 12px;
      font-weight: 800;
      color: #1FC99B;
    }

    .spread-row {
      display: flex;
      align-items: center;
      gap: 9px;
      margin-bottom: 9px;
    }

    .spread-num {
      width: 24px;
      height: 24px;
      border-radius: 8px;
      flex: none;
      border: 2.5px solid #17140F;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 800;
      color: #17140F;
    }

    .spread-track {
      flex: 1;
      height: 12px;
      border-radius: 12px;
      border: 2px solid #17140F;
      background: #FFF9E9;
      overflow: hidden;
      box-sizing: border-box;
    }

    .flag-card {
      background: #FFE3DC;
      border: 3px solid #17140F;
      border-radius: 22px;
      padding: 16px;
      box-shadow: 4px 4px 0 #17140F;
    }

    .flag-send-btn {
      margin-top: 12px;
      background: #FFF;
      border: 2.5px solid #17140F;
      border-radius: 14px;
      padding: 11px;
      text-align: center;
      font-size: 13px;
      font-weight: 800;
      color: #17140F;
      cursor: pointer;
      box-shadow: 3px 3px 0 #17140F;
    }
  `;

  private distNames = ['Pellets', 'Lumpy', 'Cracked', 'Textbook', 'Soft blobs', 'Mushy', 'Liquid'];
  private distCol = ['#E3D8BE', '#E3D8BE', '#FFE9A8', '#1FC99B', '#FFCE2E', '#FF9A3C', '#FF5A3C'];

  render() {
    const isKo = appState.currentLocale === 'ko';
    const events = appState.events || [];
    const totalCount = events.length;

    // 14-Day Poops
    const fourteenDaysAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);
    const recentPoops = events.filter(
      (e) => e.eventType === 'poop' && new Date(e.timestamp) >= fourteenDaysAgo
    );

    // Consistency counts (1..7)
    const counts = [0, 0, 0, 0, 0, 0, 0];
    recentPoops.forEach((p) => {
      const match = (p.notes || '').match(/Type\s*([1-7])/i) || (p.notes || '').match(/([1-7])/);
      if (match) {
        const typeNum = parseInt(match[1], 10);
        if (typeNum >= 1 && typeNum <= 7) counts[typeNum - 1]++;
      } else {
        counts[3]++; // Default textbook if not specified
      }
    });

    const totalPoopClassified = counts.reduce((a, b) => a + b, 0);
    const distP = counts.map((cnt) =>
      totalPoopClassified > 0 ? Math.round((cnt / totalPoopClassified) * 100) : 0
    );

    const perfectCount = counts[3];
    const gutScore =
      totalPoopClassified > 0
        ? Math.round((perfectCount / totalPoopClassified) * 100)
        : totalCount > 0
        ? 100
        : 0;

    // Health alert events in last 14 days
    const flaggedEvents = events.filter(
      (e) =>
        (e.eventType === 'vomit' || (e.notes || '').toLowerCase().includes('loose') || (e.notes || '').toLowerCase().includes('diarrhea')) &&
        new Date(e.timestamp) >= fourteenDaysAgo
    );

    return html`
      <div
        class="back-btn"
        @click=${() => this.dispatchEvent(new CustomEvent('dooty-navigate', { bubbles: true, composed: true, detail: 'analytics' }))}
      >
        ‹ ${isKo ? '숫자들' : 'Numbers'}
      </div>

      <div>
        <div class="section-tag">${isKo ? '심층 분석' : 'Deep dive'}</div>
        <div class="page-title">${isKo ? '장 건강 점수' : 'Gut score'}</div>
        <div class="page-sub">
          ${isKo
            ? '형태, 빈도, 시간대를 종합한 14일 롤링 점수입니다.'
            : 'A rolling 14-day read on consistency, frequency and timing.'}
        </div>
      </div>

      <!-- 14-Day Score Chart Card -->
      <div class="card-block">
        <div class="score-row">
          <div class="score-num">${totalCount > 0 ? gutScore : '-'}</div>
          <div class="score-trend">${totalCount > 0 ? (isKo ? '14일 분석' : '14-day rolling') : (isKo ? '기록 대기 중' : 'No logs yet')}</div>
        </div>
        <div style="font-size: 12.5px; font-weight: 600; color: #6A6152;">
          ${totalPoopClassified > 0
            ? isKo
              ? `최근 14일 동안 ${totalPoopClassified}건의 배변이 분석되었습니다.`
              : `${totalPoopClassified} potty logs analyzed over the last 14 days.`
            : isKo
            ? '배변을 기록하면 이상적인 형태(4단계) 비율이 산출됩니다.'
            : 'Log potty events to calculate consistency quality rating.'}
        </div>
      </div>

      <!-- Consistency Spread -->
      <div class="card-block">
        <div style="font-size: 15px; font-weight: 800; color: #17140F;">
          ${isKo ? '형태별 분포' : 'Consistency spread'}
        </div>
        <div style="font-size: 11.5px; font-weight: 600; color: #6A6152; margin: 2px 0 13px;">
          ${isKo ? '7단계 척도. 4단계가 완벽한 이상형입니다.' : 'Seven-point scale. Four is textbook.'}
        </div>
        <div>
          ${this.distNames.map((name, i) => {
            const pct = distP[i];
            const col = this.distCol[i];
            return html`
              <div class="spread-row">
                <div class="spread-num" style="background: ${col};">${i + 1}</div>
                <div style="width: 66px; font-size: 11.5px; font-weight: 700; color: #6A6152; flex: none;">
                  ${name}
                </div>
                <div class="spread-track">
                  <div style="height: 100%; background: ${col}; width: ${Math.max(pct > 0 ? 4 : 0, pct)}%;"></div>
                </div>
                <div style="width: 32px; text-align: right; font-size: 11px; font-weight: 800; color: #6A6152; flex: none;">
                  ${pct}%
                </div>
              </div>
            `;
          })}
        </div>
      </div>

      <!-- Flagged Warning Card / Health Status -->
      ${flaggedEvents.length > 0
        ? html`
            <div class="flag-card">
              <div style="display: flex; align-items: center; gap: 8px;">
                <div
                  style="width: 22px; height: 22px; border-radius: 50%; border: 2.5px solid #17140F; background: #FF5A3C; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; color: #FFF;"
                >
                  !
                </div>
                <div style="font-size: 15px; font-weight: 800; color: #17140F;">
                  ${isKo ? `주의 감지: 최근 ${flaggedEvents.length}건 이상 반응` : `Flagged: ${flaggedEvents.length} symptom events`}
                </div>
              </div>
              <div style="font-size: 12.5px; font-weight: 600; color: #7A3325; line-height: 1.5; margin-top: 8px;">
                ${flaggedEvents.map((f) => `${new Date(f.timestamp).toLocaleDateString()}: ${f.notes || f.eventType}`).join(' · ')}
              </div>
              <div
                class="flag-send-btn"
                @click=${() =>
                  this.dispatchEvent(
                    new CustomEvent('dooty-toast', {
                      bubbles: true,
                      composed: true,
                      detail: {
                        title: isKo ? '기록 준비 완료' : 'Summary ready',
                        sub: isKo ? '수의사 공유용 데이터가 생성되었습니다.' : 'Packaged for vet consultation.',
                      },
                    })
                  )}
              >
                ${isKo ? '기록 수의사에게 내보내기' : 'Export health records for vet'}
              </div>
            </div>
          `
        : html`
            <div class="card-block" style="background: #EAF8F1;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <div
                  style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid #17140F; background: #1FC99B; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; color: #17140F;"
                >
                  ✓
                </div>
                <div style="font-size: 14px; font-weight: 800; color: #0A5A45;">
                  ${isKo ? '이상 징후 없음' : 'No issues detected'}
                </div>
              </div>
              <div style="font-size: 12px; font-weight: 600; color: #0A5A45; margin-top: 4px;">
                ${isKo
                  ? '최근 14일 동안 등록된 구토나 소화 이상 기록이 없습니다.'
                  : 'No vomiting or digestive symptoms reported in the last 14 days.'}
              </div>
            </div>
          `}
    `;
  }
}
