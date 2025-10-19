'use client';

import { useChat } from '@ai-sdk/react';
import { useState, useRef } from 'react';
import { PromptBox } from '@/components/chatgpt-prompt-input';

export default function Chat() {
  const { messages, sendMessage } = useChat();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [resetKey, setResetKey] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get the message from the textarea directly
    const message = textareaRef.current?.value?.trim();
    
    // Check if there's a message to send
    if (!message) {
      return;
    }

    // Send message using your chat hook
    sendMessage({ text: message });
    
    // Force PromptBox to remount by changing key
    setResetKey(prev => prev + 1);
  };

  return (
    <div className="flex flex-col w-full h-screen bg-background dark:bg-[#212121]">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-center text-3xl text-foreground dark:text-white">
                Your AI Database Assistant
              </p>
            </div>
          ) : (
            messages.map(message => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-black dark:bg-white text-white dark:text-black'
                      : 'bg-gray-100 dark:bg-[#303030] text-black dark:text-white'
                  }`}
                >
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case 'text':
                        return (
                          <div key={`${message.id}-${i}`} className="whitespace-pre-wrap">
                            {part.text}
                          </div>
                        );
                      case 'tool-db':
                      case 'tool-schema':
                        return (
                          <pre
                            key={`${message.id}-${i}`}
                            className="text-xs overflow-x-auto mt-2 p-2 bg-black/5 dark:bg-white/5 rounded"
                          >
                            {JSON.stringify(part, null, 2)}
                          </pre>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Input Container */}
      <div className=" bg-background dark:bg-[#212121]">
        <div className="max-w-3xl mx-auto p-4">
          <form ref={formRef} onSubmit={handleSubmit}>
            <PromptBox
              key={resetKey}
              ref={textareaRef}
              name="message"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  formRef.current?.requestSubmit();
                }
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}