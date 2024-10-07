String Constants and Message Formatters
=======================================

This directory contains string constants and utilities for managing text content throughout the application. This README provides instructions on how to use the string constants and message formatters effectively.

Table of Contents
-----------------
1. String Constants
   1.1. General Strings
   1.2. Message Strings
2. Message Formatters
3. Best Practices
4. Examples

1. String Constants
-------------------

1.1. General Strings

The `generalStrings.ts` file contains constant strings used throughout the application for various UI elements, labels, and general text content.

Usage:
------
Import the `generalStrings` object from the file:

    import { generalStrings } from '../constants/generalStrings';

Example:
--------
    // In a React component
    import React from 'react';
    import { generalStrings } from '../constants/generalStrings';

    const WelcomeComponent: React.FC = () => {
        return <h1>{generalStrings.welcomeMessage}</h1>;
    };

1.2. Message Strings

The `messageStrings.ts` file contains message templates used for various notifications and dynamic content throughout the application.

Usage:
------
Import the `messageStrings` object from the file:

    import { messageStrings } from '../constants/messageStrings';

Example:
--------
    // In a utility function
    import { messageStrings } from '../constants/messageStrings';

    function getSuccessMessage(action: string, item: string): string {
        return messageStrings.success[action].replace('{{item}}', item);
    }

2. Message Formatters
---------------------

The `messageFormatters.ts` file provides utility functions to format and retrieve messages with dynamic content. This is particularly useful for creating user notifications, such as toast messages, with placeholders that can be replaced with actual values at runtime.

Functions:
----------

2.1. formatMessage

This function replaces placeholders in a message string with values from a provided variables object.

Parameters:
- message: The message string containing placeholders in the format {{key}}.
- variables: An object where keys correspond to placeholder names and values are the replacements.

Returns: A formatted string with placeholders replaced by corresponding values.

Example:
--------
    import { formatMessage } from '../utils/messageFormatters';

    const messageTemplate = "Hello, {{name}}! Welcome to {{platform}}.";
    const variables = { name: "Alice", platform: "OurApp" };
    const formattedMessage = formatMessage(messageTemplate, variables);
    console.log(formattedMessage); // Output: "Hello, Alice! Welcome to OurApp."

2.2. getToastMessage

This function retrieves a pre-defined message template based on the message type and action, then formats it using the provided variables.

Parameters:
- type: The type of message (e.g., 'success', 'error', 'info', 'warning').
- action: The action associated with the message (e.g., 'create', 'update', 'delete').
- variables: An object containing key-value pairs for replacing placeholders in the message template.

Returns: A formatted string ready to be displayed as a toast message.

Example:
--------
    import { getToastMessage } from '../utils/messageFormatters';

    const successMessage = getToastMessage('success', 'create', { item: 'Work Order' });
    console.log(successMessage); // Output: "Successfully created Work Order."

    const errorMessage = getToastMessage('error', 'update', { item: 'Purchase Order' });
    console.log(errorMessage); // Output: "Failed to update Purchase Order."

3. Best Practices
-----------------

3.1. Consistency: Use the message formatters to ensure consistent messaging across the application.

3.2. Localization: Consider using a similar pattern for localization by storing message templates in different languages.

3.3. Error Handling: Ensure that all placeholders in message templates have corresponding entries in the variables object to avoid displaying raw placeholders.

3.4. Type Safety: Use TypeScript interfaces to define the structure of the variables object for each message template, ensuring type safety when using the formatMessage function.

3.5. Centralized Management: Keep all message templates in the messageStrings.ts file for easy maintenance and updates.
 