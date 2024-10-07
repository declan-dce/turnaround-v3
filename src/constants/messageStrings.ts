export const messageStrings = {
  toastMessages: {
    success: {
      create: {
        blunt: "{{item}} created",
        succinct: "{{item}} created successfully",
        verbose: "Success! {{item}} created!",
      },
      update: {
        blunt: "{{item}} updated",
        succinct: "{{item}} updated successfully",
        verbose: "Success! {{item}} updated!",
      },
      delete: {
        blunt: "{{item}} deleted",
        succinct: "{{item}} deleted successfully",
        verbose: "Success! {{item}} deleted!",
      },
      save: {
        blunt: "{{item}} saved",
        succinct: "{{item}} saved successfully",
        verbose: "Success! {{item}} saved!",
      },
      upload: {
        blunt: "{{item}} uploaded",
        succinct: "{{item}} uploaded successfully",
        verbose: "Success! {{item}} uploaded!",
      },
      download: {
        blunt: "{{item}} downloaded",
        succinct: "{{item}} downloaded successfully",
        verbose: "Success! {{item}} downloaded!",
      },
      import: {
        blunt: "{{item}} imported",
        succinct: "{{item}} imported successfully",
        verbose: "Success! {{item}} imported!",
      },
      export: {
        blunt: "{{item}} exported",
        succinct: "{{item}} exported successfully",
        verbose: "Success! {{item}} exported!",
      },
      statusChanged: {
        blunt: "Status changed to {{newStatus}}",
        succinct: "Status successfully changed to {{newStatus}}",
        verbose: "Success! Status changed to {{newStatus}}",
      },
      approved: {
        blunt: "{{item}} approved",
        succinct: "{{item}} approved successfully",
        verbose: "Success! {{item}} approved!",
      },
      rejected: {
        blunt: "{{item}} rejected",
        succinct: "{{item}} rejected successfully",
        verbose: "Success! {{item}} rejected!",
      },
      archived: {
        blunt: "{{item}} archived",
        succinct: "{{item}} archived successfully",
        verbose: "Success! {{item}} archived!",
      },
      unarchived: {
        blunt: "{{item}} unarchived",
        succinct: "{{item}} unarchived successfully",
        verbose: "Success! {{item}} unarchived!",
      },
      processed: {
        blunt: "{{item}} processed",
        succinct: "{{item}} processed successfully",
        verbose: "Success! {{item}} processed!",
      },
    },
    error: {
      create: {
        blunt: "{{item}} creation failed",
        succinct: "Failed to create {{item}}",
        verbose: "Error! Failed to create {{item}}.",
      },
      update: {
        blunt: "{{item}} update failed",
        succinct: "Failed to update {{item}}",
        verbose: "Error! Failed to update {{item}}.",
      },
      delete: {
        blunt: "{{item}} deletion failed",
        succinct: "Failed to delete {{item}}",
        verbose: "Error! Failed to delete {{item}}.",
      },
      save: {
        blunt: "{{item}} save failed",
        succinct: "Failed to save {{item}}",
        verbose: "Error! Failed to save {{item}}.",
      },
      upload: {
        blunt: "{{item}} upload failed",
        succinct: "Failed to upload {{item}}",
        verbose: "Error! Failed to upload {{item}}.",
      },
      download: {
        blunt: "{{item}} download failed",
        succinct: "Failed to download {{item}}",
        verbose: "Error! Failed to download {{item}}.",
      },
      import: {
        blunt: "{{item}} import failed",
        succinct: "Failed to import {{item}}",
        verbose: "Error! Failed to import {{item}}.",
      },
      export: {
        blunt: "{{item}} export failed",
        succinct: "Failed to export {{item}}",
        verbose: "Error! Failed to export {{item}}.",
      },
      statusChangeFailed: {
        blunt: "Status change failed",
        succinct: "Failed to change status to {{newStatus}}",
        verbose: "Error! Failed to change status to {{newStatus}}",
      },
      approvalFailed: {
        blunt: "{{item}} approval failed",
        succinct: "Failed to approve {{item}}",
        verbose: "Error! Failed to approve {{item}}.",
      },
      rejectionFailed: {
        blunt: "{{item}} rejection failed",
        succinct: "Failed to reject {{item}}",
        verbose: "Error! Failed to reject {{item}}.",
      },
      archiveFailed: {
        blunt: "{{item}} archive failed",
        succinct: "Failed to archive {{item}}",
        verbose: "Error! Failed to archive {{item}}.",
      },
      unarchiveFailed: {
        blunt: "{{item}} unarchive failed",
        succinct: "Failed to unarchive {{item}}",
        verbose: "Error! Failed to unarchive {{item}}.",
      },
      processingFailed: {
        blunt: "{{item}} processing failed",
        succinct: "Failed to process {{item}}",
        verbose: "Error! Failed to process {{item}}.",
      },
      notFound: {
        blunt: "{{item}} not found",
        succinct: "Unable to locate {{item}}",
        verbose: "The requested {{item}} could not be found in the system.",
      },
      unauthorized: {
        blunt: "Unauthorized",
        succinct: "Access denied",
        verbose: "You are not authorized to perform this action.",
      },
      forbidden: "Access forbidden",
      serverError: "An unexpected server error occurred",
      networkError: "Network error. Please check your connection",
      validationError: "Please check your input and try again",
      duplicateEntry: "{{item}} already exists",
      insufficientPermissions: "You don't have sufficient permissions for this action",
      itemNotFound: "{{item}} not found",
      statusChangeNotAllowed: "Cannot change status from {{currentStatus}} to {{newStatus}}",
      pendingApproval: "This action requires approval",
      pendingPayment: "Payment is required to proceed",
      pendingFulfillment: "Item cannot be processed until fulfillment is complete",
      pendingDelivery: "Item is awaiting delivery",
      pendingReturn: "Return process is not complete",
      pendingRefund: "Refund is being processed",
      pendingVerification: "Verification is required before proceeding",
      alreadyArchived: "This item is already archived",
      cannotProcessArchived: "Cannot process an archived item",
    },
    info: {
      processing: {
        blunt: "Processing {{item}}",
        succinct: "Processing {{item}}. Please wait",
        verbose: "Processing {{item}}. This may take a moment...",
      },
      loading: {
        blunt: "Loading {{item}}",
        succinct: "Loading {{item}}...",
        verbose: "Loading {{item}}. Please wait...",
      },
      syncing: {
        blunt: "Syncing {{item}}",
        succinct: "Syncing {{item}}. Please wait",
        verbose: "Syncing {{item}}. This may take a moment...",
      },
      awaitingApproval: {
        blunt: "{{item}} awaiting approval",
        succinct: "{{item}} is awaiting approval",
        verbose: "{{item}} is awaiting approval. Please wait...",
      },
      inReview: {
        blunt: "{{item}} in review",
        succinct: "{{item}} is under review",
        verbose: "{{item}} is under review. Please wait...",
      },
      paymentPending: {
        blunt: "{{item}} payment pending",
        succinct: "Payment is pending for {{item}}",
        verbose: "Payment is pending for {{item}}. Please wait...",
      },
      fulfillmentInProgress: {
        blunt: "{{item}} fulfillment in progress",
        succinct: "Fulfillment is in progress for {{item}}",
        verbose: "Fulfillment is in progress for {{item}}. Please wait...",
      },
      preparingDelivery: {
        blunt: "Preparing {{item}} for delivery",
        succinct: "Preparing {{item}} for delivery",
        verbose: "Preparing {{item}} for delivery. Please wait...",
      },
      processingReturn: {
        blunt: "Processing return for {{item}}",
        succinct: "Processing return for {{item}}",
        verbose: "Processing return for {{item}}. Please wait...",
      },
      processingRefund: {
        blunt: "Processing refund for {{item}}",
        succinct: "Processing refund for {{item}}",
        verbose: "Processing refund for {{item}}. Please wait...",
      },
      verificationRequired: {
        blunt: "Verification required for {{item}}",
        succinct: "Verification required for {{item}}",
        verbose: "Verification required for {{item}}. Please wait...",
      },
    },
    warning: {
      unsavedChanges: {
        blunt: "Unsaved changes",
        succinct: "Unsaved changes to {{item}}",
        verbose: "Warning! You have unsaved changes to {{item}}.",
      },
      limitReached: {
        blunt: "Limit reached for {{item}}",
        succinct: "Warning! You've reached the limit for {{item}}.",
        verbose: "Warning! You've reached the limit for {{item}}. Please take action.",
      },
      expiringSoon: {
        blunt: "{{item}} expiring soon",
        succinct: "Warning! {{item}} is expiring soon.",
        verbose: "Warning! {{item}} is expiring soon. Please take action.",
      },
      approachingArchive: {
        blunt: "{{item}} approaching archive",
        succinct: "{{item}} will be archived soon",
        verbose: "{{item}} will be archived soon. Please take action.",
      },
      processingTimeout: {
        blunt: "Processing timeout for {{item}}",
        succinct: "Processing {{item}} is taking longer than expected",
        verbose: "Processing {{item}} is taking longer than expected. Please wait...",
      },
    },
  },
  confirmations: {
    deleteItem: {
      blunt: "Delete {{item}}",
      succinct: "Confirm deletion of {{item}}",
      verbose: "Are you sure you want to delete this {{item}}?",
    },
    discardChanges: {
      blunt: "Discard changes",
      succinct: "Unsaved changes will be lost",
      verbose: "Are you sure you want to discard your changes?",
    },
    logout: {
      blunt: "Log out",
      succinct: "Confirm logout",
      verbose: "You will be logged out. Do you want to continue?",
    },
    cancelSubscription: {
      blunt: "Cancel subscription",
      succinct: "Subscription will be cancelled",
      verbose: "Are you sure you want to cancel your subscription?",
    },
    changeStatus: {
      blunt: "Change status",
      succinct: "Status will change: {{currentStatus}} → {{newStatus}}",
      verbose: "Are you sure you want to change the status from {{currentStatus}} to {{newStatus}}?",
    },
    approve: {
      blunt: "Approve {{item}}",
      succinct: "Confirm approval of {{item}}",
      verbose: "Are you sure you want to approve this {{item}}?",
    },
    reject: {
      blunt: "Reject {{item}}",
      succinct: "Confirm rejection of {{item}}",
      verbose: "Are you sure you want to reject this {{item}}?",
    },
    archive: {
      blunt: "Archive {{item}}",
      succinct: "{{item}} will be archived",
      verbose: "Are you sure you want to archive this {{item}}?",
    },
    unarchive: {
      blunt: "Unarchive {{item}}",
      succinct: "{{item}} will be unarchived",
      verbose: "Are you sure you want to unarchive this {{item}}?",
    },
    cancelProcessing: {
      blunt: "Stop processing",
      succinct: "Cancel processing of {{item}}",
      verbose: "Are you sure you want to cancel processing of this {{item}}?",
    },
  },
} as const;

export type MessageType = 'success' | 'error' | 'info' | 'warning';
export type MessageAction = keyof (typeof messageStrings.toastMessages)[MessageType];