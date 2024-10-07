import { messageStrings, MessageType, MessageAction } from '../constants/messageStrings';

export const formatMessage = (
  message: string,
  variables: Record<string, string>
): string => {
  return message.replace(/\{\{(\w+)\}\}/g, (_, key) => variables[key] || `{{${key}}}`);
};

export const getToastMessage = (
  type: MessageType,
  action: MessageAction,
  variables: Record<string, string>
): string => {
  const message = messageStrings.toastMessages[type][action];
  return formatMessage(message, variables);
};

// Usage examples:
// const successMessage = getToastMessage('success', 'create', { item: 'Work Order' });
// const errorMessage = getToastMessage('error', 'update', { item: 'Purchase Order' });
// const infoMessage = getToastMessage('info', 'processing', { item: 'Sales Order' });
// const warningMessage = getToastMessage('warning', 'expiringSoon', { item: 'Invoice' });