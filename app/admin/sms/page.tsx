'use client';

import { useState } from 'react';
import SmsSendModal from '@/components/admin/SmsSendModal';
import SmsBulkForm from '@/components/admin/SmsBulkForm';
import SmsBalanceCard from '@/components/admin/SmsBalanceCard';
import SmsHistoryTable from '@/components/admin/SmsHistoryTable';
import { smsApi, RenewalReminderResult } from '@/lib/api';

type Tab = 'send' | 'bulk' | 'history' | 'renewal';

export default function SmsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('send');
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [renewalResult, setRenewalResult] = useState<RenewalReminderResult | null>(null);
  const [isSendingRenewal, setIsSendingRenewal] = useState(false);
  const [renewalDays, setRenewalDays] = useState(3);

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'send', label: 'Send SMS', icon: 'send' },
    { id: 'bulk', label: 'Bulk SMS', icon: 'campaign' },
    { id: 'history', label: 'History', icon: 'history' },
    { id: 'renewal', label: 'Renewal Reminders', icon: 'schedule' },
  ];

  const handleSendRenewalReminders = async () => {
    setIsSendingRenewal(true);
    setRenewalResult(null);
    try {
      const result = await smsApi.sendRenewalReminders(renewalDays);
      setRenewalResult(result);
    } catch (err) {
      console.error('Failed to send renewal reminders:', err);
    } finally {
      setIsSendingRenewal(false);
    }
  };


  return (
    <div className="min-h-screen bg-background p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-white text-3xl font-bold mb-2">SMS Management</h1>
          <p className="text-white/60">Send messages, manage templates, and track SMS history</p>
        </div>

        {/* Balance Card */}
        <div className="mb-6">
          <SmsBalanceCard />
        </div>

        {/* Tabs */}
        <div className="bg-surface-dark rounded-xl border border-surface-dark-lighter overflow-hidden mb-6">
          <div className="border-b border-surface-dark-lighter">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-white/60 hover:text-white hover:bg-surface-dark-lighter'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {/* Send SMS Tab */}
            {activeTab === 'send' && (
              <div>
                <button
                  onClick={() => setIsSendModalOpen(true)}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-medium"
                >
                  <span className="material-symbols-outlined align-middle mr-2">send</span>
                  Send New SMS
                </button>
              </div>
            )}

            {/* Bulk SMS Tab */}
            {activeTab === 'bulk' && (
              <SmsBulkForm
                onSuccess={() => {
                  // Optionally refresh history tab if user switches to it
                  // The history will refresh when the tab is opened
                }}
              />
            )}

            {/* History Tab */}
            {activeTab === 'history' && <SmsHistoryTable />}

            {/* Renewal Reminders Tab */}
            {activeTab === 'renewal' && (
              <div className="space-y-6">
                <div className="bg-surface-dark-lighter rounded-lg p-6">
                  <h3 className="text-white font-semibold text-lg mb-4">
                    Send Renewal Reminders
                  </h3>
                  <p className="text-white/60 text-sm mb-6">
                    Send automated renewal reminder messages to members whose subscriptions are
                    expiring soon.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        Days Before Expiry
                      </label>
                      <input
                        type="number"
                        value={renewalDays}
                        onChange={(e) => setRenewalDays(Number(e.target.value))}
                        min={1}
                        max={30}
                        className="w-full max-w-xs px-4 py-2 bg-surface-dark border border-surface-dark-lighter rounded-lg text-white focus:outline-none focus:border-primary"
                        disabled={isSendingRenewal}
                      />
                      <p className="text-white/60 text-xs mt-1">
                        Members expiring within {renewalDays} day{renewalDays !== 1 ? 's' : ''}{' '}
                        will receive reminders
                      </p>
                    </div>

                    <button
                      onClick={handleSendRenewalReminders}
                      disabled={isSendingRenewal}
                      className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                    >
                      {isSendingRenewal ? 'Sending...' : 'Send Renewal Reminders'}
                    </button>

                    {renewalResult && (
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                        <h4 className="text-emerald-400 font-semibold mb-2">Results</h4>
                        <div className="text-white/80 text-sm space-y-1">
                          <p>Total: {renewalResult.total} members</p>
                          <p className="text-emerald-400">
                            Success: {renewalResult.success} sent
                          </p>
                          {renewalResult.failed > 0 && (
                            <p className="text-red-400">Failed: {renewalResult.failed}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Send SMS Modal */}
      <SmsSendModal
        isOpen={isSendModalOpen}
        onClose={() => setIsSendModalOpen(false)}
        onSuccess={() => {
          if (activeTab === 'history') {
            window.location.reload();
          }
        }}
      />
    </div>
  );
}


