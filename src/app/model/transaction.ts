export interface Transaction {
  "id": number,
  transactionType: string
  reference: string,
  customerNumber: number,
  customerName: string,
  customerAddress: string,
  customerPhoneNumber: number,
  transferAmount: number,
  transferCurrency: string,
  beneficiaryBank: string,
  beneficiaryAccountNumber: number,
  paymentDetails: string,
  credit_DebitCardDetails: number,
  region: string
}
