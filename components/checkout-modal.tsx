'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  packageName: string;
}

export default function CheckoutModal({ isOpen, onClose, amount, packageName }: CheckoutModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsProcessing(true);

    try {
      const PaystackPop = (await import('@paystack/inline-js')).default;
      const paystack = new PaystackPop();
      paystack.newTransaction({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
      email: email,
      amount: amount * 100, // Paystack expects amount in kobo
      metadata: {
        custom_fields: [
          {
            display_name: "Customer Name",
            variable_name: "customer_name",
            value: name
          },
          {
            display_name: "Package",
            variable_name: "package",
            value: packageName
          }
        ]
      },
      onSuccess: (transaction: any) => {
        setIsProcessing(false);
        toast.success(`Payment successful! Reference: ${transaction.reference}`);
        onClose();
      },
      onCancel: () => {
        setIsProcessing(false);
      }
    });
    } catch (error) {
      console.error("Paystack SDK could not be loaded", error);
      setIsProcessing(false);
      toast.error("Payment could not be initialized.");
    }
  };

  return (
    <div className="modal-overlay open" style={{ zIndex: 1000, display: 'flex' }}>
      <div className="modal-box" style={{ maxWidth: '400px', padding: '32px' }}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Checkout</h3>
        <p style={{ marginBottom: '24px', fontSize: '14px' }}>
          You are purchasing <strong>{packageName}</strong> for &#8358;{amount.toLocaleString()}
        </p>

        <form onSubmit={handlePay} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--ink-20)',
                borderRadius: 'var(--radius)',
                fontFamily: 'var(--sans)'
              }}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--ink-20)',
                borderRadius: 'var(--radius)',
                fontFamily: 'var(--sans)'
              }}
            />
          </div>
          <button
            type="submit"
            disabled={isProcessing}
            style={{
              background: 'var(--blue)',
              color: 'var(--ink-60)',
              padding: '14px',
              border: 'none',
              borderRadius: 'var(--radius)',
              fontWeight: 600,
              cursor: isProcessing ? 'not-allowed' : 'pointer',
              opacity: isProcessing ? 0.7 : 1,
              marginTop: '8px'
            }}
          >
            {isProcessing ? 'Processing...' : 'Pay with Paystack'}
          </button>
        </form>
      </div>
    </div>
  );
}
